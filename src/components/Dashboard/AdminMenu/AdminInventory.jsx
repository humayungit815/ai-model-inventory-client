import React from "react";
import {
	Database,
	Search,
	Filter,
	MoreVertical,
	ExternalLink,
	RefreshCw,
	CheckCircle2,
	AlertCircle,
	Activity,
} from "lucide-react";

const AdminInventory = () => {
	const inventoryItems = [
		{
			id: 1,
			name: "GPT-4 Lab Fine-tune",
			type: "LLM",
			version: "v2.4",
			status: "Healthy",
			load: "42%",
			lastUpdate: "1h ago",
		},
		{
			id: 2,
			name: "Stable Diffusion XL",
			type: "Image Gen",
			version: "v1.0",
			status: "Warning",
			load: "89%",
			lastUpdate: "12m ago",
		},
		{
			id: 3,
			name: "Whisper-v3 Turbo",
			type: "Audio",
			version: "v3.2",
			status: "Healthy",
			load: "15%",
			lastUpdate: "3h ago",
		},
		{
			id: 4,
			name: "Llama-3 70B Node",
			type: "LLM",
			version: "v1.1",
			status: "Offline",
			load: "0%",
			lastUpdate: "1d ago",
		},
	];

	return (
		<div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
			{/* Header & Controls */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
				<div>
					<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
						<Database className="text-[#F087B1]" size={32} />
						System Inventory
					</h1>
					<p className="text-slate-500 dark:text-slate-400 font-medium">
						Monitoring all active neural assets and nodes.
					</p>
				</div>

				<div className="flex items-center gap-3">
					<div className="relative group">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
						<input
							type="text"
							placeholder="Search assets..."
							className="pl-11 pr-6 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#F087B1]/20 transition-all w-full md:w-64"
						/>
					</div>
					<button className="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-500 hover:text-[#F087B1] transition-all shadow-sm">
						<Filter size={20} />
					</button>
				</div>
			</div>

			{/* Inventory Table Card */}
			<div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
								<th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									Asset Name
								</th>
								<th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									Type/Version
								</th>
								<th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									System Health
								</th>
								<th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									Current Load
								</th>
								<th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50 dark:divide-slate-800">
							{inventoryItems.map(item => (
								<tr
									key={item.id}
									className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
								>
									<td className="px-8 py-6">
										<div className="flex items-center gap-4">
											<div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-[#F087B1] group-hover:scale-110 transition-transform">
												<Activity size={20} />
											</div>
											<div>
												<h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">
													{item.name}
												</h4>
												<p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
													Updated: {item.lastUpdate}
												</p>
											</div>
										</div>
									</td>
									<td className="px-8 py-6">
										<div className="flex flex-col">
											<span className="text-xs font-bold text-slate-700 dark:text-slate-300">
												{item.type}
											</span>
											<span className="text-[10px] font-black text-[#F087B1] uppercase tracking-widest">
												{item.version}
											</span>
										</div>
									</td>
									<td className="px-8 py-6">
										<div className="flex items-center gap-2">
											{item.status === "Healthy" && (
												<CheckCircle2 size={16} className="text-green-500" />
											)}
											{item.status === "Warning" && (
												<AlertCircle size={16} className="text-orange-500" />
											)}
											{item.status === "Offline" && (
												<div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center">
													<div className="w-2 h-2 rounded-full bg-red-500"></div>
												</div>
											)}
											<span
												className={`text-[10px] font-black uppercase tracking-widest ${
													item.status === "Healthy"
														? "text-green-500"
														: item.status === "Warning"
														? "text-orange-500"
														: "text-red-500"
												}`}
											>
												{item.status}
											</span>
										</div>
									</td>
									<td className="px-8 py-6">
										<div className="w-full max-w-[100px] h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
											<div
												className={`h-full rounded-full transition-all duration-1000 ${
													parseInt(item.load) > 80
														? "bg-orange-500"
														: "bg-[#F087B1]"
												}`}
												style={{width: item.load}}
											></div>
										</div>
										<span className="text-[10px] font-bold text-slate-400 mt-1 block">
											{item.load} Resources used
										</span>
									</td>
									<td className="px-8 py-6 text-right">
										<button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
											<RefreshCw size={18} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Bottom Bar */}
				<div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
					<p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
						End of Inventory List
					</p>
					<button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#F087B1] hover:underline underline-offset-4">
						Deploy New Node <ExternalLink size={14} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminInventory;
