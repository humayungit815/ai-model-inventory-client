import React, {useContext} from "react";
import {
	User,
	Mail,
	ShieldCheck,
	Camera,
	MapPin,
	Calendar,
	Edit3,
	CheckCircle2,
	Activity,
} from "lucide-react";
import {AuthContext} from "../../../AuthContext/AuthContext";

const UserProfile = () => {
	const {user} = useContext(AuthContext);

	return (
		<div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
			{/* Header Section */}
			<div className="relative h-48 md:h-64 rounded-[40px] bg-gradient-to-r from-[#F087B1] to-purple-600 overflow-hidden shadow-2xl shadow-[#F087B1]/20">
				<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
				<div className="absolute -bottom-1 -right-1 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
			</div>

			{/* Profile Info Card */}
			<div className="relative px-6 pb-8">
				<div className="flex flex-col md:flex-row items-end gap-6 -mt-20 md:-mt-24 ml-4">
					{/* Avatar */}
					<div className="relative group">
						<div className="w-32 h-32 md:w-40 md:h-40 rounded-[35px] border-8 border-white dark:border-[#0b1215] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-xl transition-transform group-hover:scale-105 duration-500">
							<img
								src={
									user?.photoURL ||
									"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
								}
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
						<button className="absolute bottom-2 right-2 p-2.5 bg-white dark:bg-slate-900 text-[#F087B1] rounded-2xl shadow-lg hover:scale-110 transition-all border border-slate-100 dark:border-slate-800">
							<Camera size={18} />
						</button>
					</div>

					{/* Basic Info */}
					<div className="flex-1 mb-4">
						<div className="flex items-center gap-3">
							<h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
								{user?.displayName || "Operator Name"}
							</h1>
							<span className="bg-green-500/10 text-green-500 p-1 rounded-full">
								<CheckCircle2 size={20} />
							</span>
						</div>
						<p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 mt-1">
							<ShieldCheck size={16} className="text-[#F087B1]" /> Verified
							Senior Operator
						</p>
					</div>

					<button className="mb-4 flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white transition-all shadow-xl active:scale-95">
						<Edit3 size={16} /> Edit Profile
					</button>
				</div>

				{/* Details Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
					{/* Sidebar Details */}
					<div className="md:col-span-1 space-y-6">
						<div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
							<h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">
								Contact Information
							</h3>
							<div className="space-y-4">
								<div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
									<div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<Mail size={18} />
									</div>
									<div className="overflow-hidden">
										<p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
											Email
										</p>
										<p className="text-sm font-bold truncate">
											{user?.email || "not-found@lab.com"}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
									<div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<MapPin size={18} />
									</div>
									<div>
										<p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
											Location
										</p>
										<p className="text-sm font-bold">Dhaka, Bangladesh</p>
									</div>
								</div>
								<div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
									<div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<Calendar size={18} />
									</div>
									<div>
										<p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
											Joined
										</p>
										<p className="text-sm font-bold">January 2026</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Main Content Area */}
					<div className="md:col-span-2 space-y-6">
						{/* Bio/About */}
						<div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm">
							<h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-4">
								Operator Brief
							</h3>
							<p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
								Lead operator specializing in LLM fine-tuning and neural network
								architecture management. Currently overseeing 12 active models
								in the Lab Network with a focus on optimization and uptime.
							</p>
						</div>

						{/* Activity Stats */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800">
								<div className="flex items-center gap-3 text-[#F087B1] mb-2">
									<Activity size={20} />
									<span className="text-2xl font-black text-slate-900 dark:text-white">
										84%
									</span>
								</div>
								<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
									System Efficiency
								</p>
							</div>
							<div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800">
								<div className="flex items-center gap-3 text-purple-500 mb-2">
									<User size={20} />
									<span className="text-2xl font-black text-slate-900 dark:text-white">
										12
									</span>
								</div>
								<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
									Models Managed
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
