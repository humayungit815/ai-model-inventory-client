import React, {useState, useContext} from "react";
import {Link, NavLink, Outlet} from "react-router";
import useAdmin from "./../../hooks/useAdmin";
import {
	LayoutDashboard,
	Database,
	PlusCircle,
	User,
	Settings,
	LogOut,
	Menu,
	X,
	Bell,
	Users,
	ShieldAlert,
} from "lucide-react";
import {AuthContext} from "../../AuthContext/AuthContext";

const Dashboard = () => {
	const {signOutUser} = useContext(AuthContext);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isAdmin, isAdminLoading] = useAdmin();


	const userMenuItems = [
		{
			icon: <LayoutDashboard size={20} />,
			label: "Overview",
			
		},
		{icon: <User size={20} />, label: "My Profile", path: "/dashboard/profile"},
	];


	const adminMenuItems = [
		{
			icon: <Users size={20} />,
			label: "Manage Users",
			path: "/dashboard/manage-users",
		},
		{
			icon: <ShieldAlert size={20} />,
			label: "Admin Inventory",
			path: "/dashboard/admin-inventory",
		},
	];

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-[#0b1215] flex transition-colors duration-500">
			{/* --- SIDEBAR --- */}
			<aside
				className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 transition-transform duration-300`}
			>
				<div className="p-6 h-full flex flex-col">
					{/* Logo */}
					<div className="flex items-center gap-3 mb-10">
						<div className="w-10 h-10 bg-[#F087B1] rounded-xl flex items-center justify-center text-white shadow-lg">
							<Database size={24} />
						</div>
						<Link to="/">
							<span className="font-black text-xl tracking-tighter uppercase dark:text-white">
								AI Lab
							</span>
						</Link>
					</div>

					{/* Navigation */}
					<nav className="space-y-2 flex-1 overflow-y-auto">
						{/* user section*/}
						<div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">
							Main Menu
						</div>
						{userMenuItems.map((item, i) => (
							<NavLink
								key={i}
								to={item.path}
								className={({isActive}) =>
									`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
										isActive
											? "bg-[#F087B1] text-white shadow-lg shadow-[#F087B1]/20"
											: "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
									}`
								}
							>
								{item.icon} {item.label}
							</NavLink>
						))}

						{/* admin section */}
						{isAdmin && (
							<div className="pt-6">
								<div className="text-[10px] font-black uppercase tracking-widest text-[#F087B1] mb-2 ml-4">
									Admin Control
								</div>
								{adminMenuItems.map((item, i) => (
									<NavLink
										key={i}
										to={item.path}
										className={({isActive}) =>
											`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
												isActive
													? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl"
													: "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
											}`
										}
									>
										{item.icon} {item.label}
									</NavLink>
								))}
							</div>
						)}
					</nav>

					{/* Logout Button */}
					<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
						<button
							onClick={signOutUser}
							className="flex items-center gap-4 px-4 py-3 w-full rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
						>
							<LogOut size={20} /> Sign Out
						</button>
					</div>
				</div>
			</aside>

			{/* --- MAIN CONTENT --- */}
			<main className="flex-1 lg:ml-64 p-4 md:p-8">
				{/* Header (Navbar) */}
				<header className="flex items-center justify-between mb-8">
					<button
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className="lg:hidden p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 dark:text-white shadow-sm"
					>
						{isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
					</button>

					<div className="hidden lg:block">
						<h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
							{isAdmin ? "Admin Access Enabled" : "Operator Terminal"}
						</h2>
					</div>

					<div className="flex items-center gap-4">
						<button className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-[#F087B1] transition-colors shadow-sm">
							<Bell size={20} />
						</button>
						<div className="w-10 h-10 rounded-xl bg-[#F087B1]/10 border-2 border-white dark:border-slate-800 overflow-hidden shadow-md">
							<img
								src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
								alt="user"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</header>

				{/* --- Dynamic Content Area --- */}
				<div className="max-w-7xl mx-auto min-h-[calc(100vh-160px)]">
					
					{isAdminLoading ? (
						<div className="flex items-center justify-center h-full text-[10px] font-black uppercase tracking-widest text-slate-400">
							Syncing Permissions...
						</div>
					) : (
						<Outlet />
					)}
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
