import React, {useEffect, useState} from "react";
import {
	Users,
	ShieldCheck,
	Trash2,
	UserPlus,
	Search,
	Loader2,
} from "lucide-react";
import Swal from "sweetalert2";

const ManageUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = () => {
		setLoading(true);
		fetch("https://ai-model-inventory-manager.vercel.app/users")
			.then(res => res.json())
			.then(data => {
				setUsers(data);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleMakeAdmin = user => {
		fetch(`https://ai-model-inventory-manager.vercel.app/${user._id}`, {
			method: "PATCH",
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					fetchUsers();
					Swal.fire({
						icon: "success",
						title: `${user.name} is now an Admin!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleDeleteUser = user => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#F087B1",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`https://ai-model-inventory-manager.vercel.app/${user._id}`, {
					method: "DELETE",
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							fetchUsers();
							Swal.fire("Deleted!", "Operator has been removed.", "success");
						}
					});
			}
		});
	};

	if (loading)
		return (
			<div className="flex flex-col items-center justify-center h-96 gap-4">
				<Loader2 className="animate-spin text-[#F087B1]" size={40} />
				<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
					Loading Operators...
				</p>
			</div>
		);

	return (
		<div className="space-y-6 animate-in fade-in duration-700">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
						Manage Network Operators
					</h1>
					<p className="text-sm text-slate-500 font-medium">
						Currently {users.length} active members
					</p>
				</div>
			</div>

			{/* Table Container */}
			<div className="bg-white dark:bg-slate-900 rounded-[35px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
								<th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
									Operator
								</th>
								<th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
									Role Status
								</th>
								<th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50 dark:divide-slate-800">
							{users.map(user => (
								<tr
									key={user._id}
									className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
								>
									<td className="px-8 py-5">
										<div className="flex items-center gap-4">
											<div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
												<img
													src={
														user.photo ||
														"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
													}
													alt=""
												/>
											</div>
											<div>
												<h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">
													{user.name}
												</h4>
												<p className="text-[11px] text-slate-400 font-medium">
													{user.email}
												</p>
											</div>
										</div>
									</td>
									<td className="px-8 py-5">
										<span
											className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
												user.role === "admin"
													? "bg-[#F087B1]/10 text-[#F087B1]"
													: "bg-slate-100 dark:bg-slate-800 text-slate-500"
											}`}
										>
											{user.role === "admin" && <ShieldCheck size={12} />}
											{user.role}
										</span>
									</td>
									<td className="px-8 py-5 text-right">
										<div className="flex items-center justify-end gap-2">
											{user.role !== "admin" ? (
												<button
													onClick={() => handleMakeAdmin(user)}
													className="p-2 text-slate-400 hover:text-[#F087B1] hover:bg-[#F087B1]/5 rounded-xl transition-all"
													title="Promote to Admin"
												>
													<UserPlus size={18} />
												</button>
											) : (
												<div className="p-2 text-green-500 opacity-50">
													<ShieldCheck size={18} />
												</div>
											)}
											<button
												onClick={() => handleDeleteUser(user)}
												className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
												title="Remove User"
											>
												<Trash2 size={18} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageUsers;
