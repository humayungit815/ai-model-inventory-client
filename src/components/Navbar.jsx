import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {HiOutlineMenuAlt3, HiOutlineX} from "react-icons/hi";
import {
	FiHome,
	FiPlusCircle,
	FiGrid,
	FiLogOut,
	FiUser,
	FiMoon,
	FiSun,
	FiChevronDown,
} from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Navbar = () => {
	const {user, signOutUser} = useContext(AuthContext);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector("html");
		html.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	const navLinkClasses = ({isActive}) =>
		`flex items-center gap-2 px-5 py-2 text-[14px] font-bold tracking-tight transition-all duration-300 rounded-full ${
			isActive
				? "bg-white text-slate-900 shadow-sm border border-slate-100"
				: "text-slate-500 hover:text-[#F087B1]"
		}`;

	return (
		<header className="sticky top-0 z-[100] w-full px-4 py-4 bg-[#F8F9FF]/50 dark:bg-[#0b1215]/50 backdrop-blur-md">
			<nav className="max-w-7xl mx-auto bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-white/80 dark:border-slate-800 rounded-[32px] px-8 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
				<div className="flex justify-between items-center h-12">
					{/* --- LOGO SECTION --- */}
					<Link to="/" className="flex items-center gap-2 group">
						<img
							className="w-9 h-9 rounded-xl object-cover ring-2 ring-[#F087B1]/20 group-hover:scale-105 transition-transform"
							src={logo}
							alt="BrainBox"
						/>
						<span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
							Brain<span className="text-[#F087B1]">Box</span>
						</span>
					</Link>

					{/* --- DESKTOP NAVIGATION (Floating Center Style) --- */}
					<div className="hidden lg:flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
						<NavLink to="/" className={navLinkClasses}>
							Home
						</NavLink>
						<NavLink to="/all-model" className={navLinkClasses}>
							All Models
						</NavLink>
						{user && (
							<NavLink to="/add-model" className={navLinkClasses}>
								Add Model
							</NavLink>
						)}

						{user && (
							<NavLink to="/dashboard" className={navLinkClasses}>
								Dashboard
							</NavLink>
						)}
					</div>

					{/* --- RIGHT ACTIONS --- */}
					<div className="flex items-center gap-3">
						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className="p-2.5 text-slate-400 hover:text-[#F087B1] bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 transition-all"
						>
							{theme === "light" ? (
								<FiMoon size={18} />
							) : (
								<FiSun size={18} className="text-yellow-400" />
							)}
						</button>

						{user ? (
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="flex items-center gap-1 cursor-pointer group bg-white dark:bg-slate-800 p-1.5 pr-3 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm"
								>
									<div className="avatar">
										<div className="w-8 rounded-full ring-2 ring-green-500/20">
											<img src={user?.photoURL} alt="User" />
										</div>
									</div>
									<FiChevronDown className="text-slate-400 text-sm group-hover:text-green-500 transition-colors" />
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-white/90 dark:bg-[#121b1e]/90 backdrop-blur-xl rounded-[24px] w-64 border border-white dark:border-slate-800"
								>
									<li className="px-4 py-3 border-b border-slate-50 dark:border-slate-800 mb-2 text-center">
										<p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
											Authenticated
										</p>
										<p className="text-sm font-bold text-slate-900 dark:text-white truncate">
											{user?.displayName}
										</p>
									</li>
									<li>
										<Link
											to="/dashboard/profile"
											className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-[#F087B1]/5 hover:text-[#F087B1] rounded-xl transition-all"
										>
											<FiUser /> Profile
										</Link>
									</li>
									<li>
										<Link
											to="/dashboard"
											className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-500/10 hover:text-green-600 rounded-xl transition-all"
										>
											<FiGrid /> Dashboard
										</Link>
									</li>
									<li className="mt-2 pt-2 border-t border-slate-50 dark:border-slate-800">
										<button
											onClick={signOutUser}
											className="flex items-center gap-3 w-full px-4 py-2.5 text-[13px] font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
										>
											<FiLogOut /> Log Out
										</button>
									</li>
								</ul>
							</div>
						) : (
							<div className="hidden sm:flex items-center gap-1">
								<Link
									to="/login"
									className="text-[14px] font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 px-5 py-2 transition-all"
								>
									Log in
								</Link>
								<Link
									to="/signUp"
									className="px-7 py-3 bg-black hover:bg-slate-800 text-white text-[14px] font-bold rounded-full shadow-lg transition-all active:scale-95"
								>
									Sign Up
								</Link>
							</div>
						)}

						{/* Mobile Menu Toggle */}
						<button
							className="lg:hidden p-2 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-full"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<HiOutlineX size={22} />
							) : (
								<HiOutlineMenuAlt3 size={22} />
							)}
						</button>
					</div>
				</div>

				{/* --- MOBILE MENU --- */}
				{isMenuOpen && (
					<div className="lg:hidden py-6 space-y-2 animate-in fade-in slide-in-from-top-5">
						<NavLink
							to="/"
							onClick={() => setIsMenuOpen(false)}
							className={navLinkClasses}
						>
							Home
						</NavLink>
						<NavLink
							to="/all-model"
							onClick={() => setIsMenuOpen(false)}
							className={navLinkClasses}
						>
							Features
						</NavLink>
						{user && (
							<NavLink
								to="/add-model"
								onClick={() => setIsMenuOpen(false)}
								className={navLinkClasses}
							>
								Add Model
							</NavLink>
						)}
						{!user && (
							<div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
								<Link
									to="/login"
									onClick={() => setIsMenuOpen(false)}
									className="w-full py-3 text-center font-bold text-slate-600"
								>
									Log in
								</Link>
								<Link
									to="/signUp"
									onClick={() => setIsMenuOpen(false)}
									className="w-full py-3 bg-black text-white text-center font-bold rounded-2xl"
								>
									Sign Up
								</Link>
							</div>
						)}
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
