import {
	DatabaseZap,
	Edit,
	ShoppingCart,
	Trash2,
	Layers,
	Cpu,
	Calendar,
	User,
	Info,
} from "lucide-react";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";
import Loader from "../components/Loader";

const ModelDetails = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const {user} = useContext(AuthContext);

	const [model, setModel] = useState({});
	const [refetch, setRefetch] = useState(false);
	const [loading, setLoading] = useState(true);

	const isOwner = user?.email === model.createdBy;

	useEffect(() => {
		fetch(`https://ai-model-inventory-manager.vercel.app/models/${id}`)
			.then(res => res.json())
			.then(data => {
				setModel(data);
				setLoading(false);
			});
	}, [id, refetch]);

	const handleDelete = () => {
		fetch(`https://ai-model-inventory-manager.vercel.app/models/${model._id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(data => {
				toast.success("Delete Model Successful");
				navigate("/all-model");
			});
	};

	const handlePurchase = () => {
		const purchaseData = {
			modelId: model._id,
			name: model.name,
			framework: model.framework,
			useCase: model.useCase,
			image: model.image,
			createdBy: model.createdBy,
			purchasedBy: user.email,
			purchaseDate: new Date(),
			purchased: model.purchased,
		};

		fetch("https://ai-model-inventory-manager.vercel.app/purchased", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(purchaseData),
		})
			.then(res => res.json())
			.then(data => {
				toast.success("Model Purchased Successfully!");
				setRefetch(data);
			});
	};

	if (loading) return <Loader />;

	return (
		<div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0b1215] py-16 px-6 transition-colors duration-500">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
						{/* --- Left Side: Visuals --- */}
						<div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center border-r border-slate-100 dark:border-slate-800">
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-[#F087B1] to-purple-600 rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
								<img
									src={model.image}
									alt={model.name}
									className="relative w-full h-[400px] object-cover rounded-[30px] shadow-2xl"
								/>
							</div>

							<div className="mt-8 grid grid-cols-2 gap-4 w-full text-center">
								<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
									<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
										Total Usage
									</p>
									<p className="text-xl font-black text-[#F087B1]">
										{model.purchased}x
									</p>
								</div>
								<div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
									<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
										Framework
									</p>
									<p className="text-sm font-bold dark:text-white uppercase">
										{model.framework}
									</p>
								</div>
							</div>
						</div>

						{/* --- Right Side: Content --- */}
						<div className="lg:col-span-7 p-10 lg:p-14">
							<div className="flex items-center gap-2 mb-4">
								<span className="px-4 py-1.5 rounded-full bg-[#F087B1]/10 text-[#F087B1] text-[10px] font-black uppercase tracking-widest">
									{model.useCase}
								</span>
							</div>

							<h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter">
								{model.name}
							</h1>

							<div className="space-y-6 mb-10">
								<div className="flex items-start gap-4">
									<div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500">
										<Info size={20} />
									</div>
									<div>
										<h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
											Architecture Overview
										</h4>
										<p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
											{model.description}
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
									<div className="flex items-center gap-3">
										<Layers className="text-[#F087B1]" size={18} />
										<span className="text-sm font-bold text-slate-500">
											Dataset:{" "}
											<span className="text-slate-900 dark:text-white">
												{model.dataset}
											</span>
										</span>
									</div>
									<div className="flex items-center gap-3">
										<User className="text-[#F087B1]" size={18} />
										<span className="text-sm font-bold text-slate-500">
											Developer:{" "}
											<span className="text-slate-900 dark:text-white truncate max-w-[150px] inline-block align-bottom">
												{model.createdBy}
											</span>
										</span>
									</div>
								</div>
							</div>

							{/* --- Action Buttons --- */}
							<div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
								<button
									onClick={handlePurchase}
									className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 px-8 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none"
								>
									<ShoppingCart size={18} /> Purchase Model
								</button>

								{isOwner && (
									<div className="flex items-center gap-3">
										<Link
											to={`/update-model/${model._id}`}
											className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl hover:bg-[#F087B1] hover:text-white transition-all shadow-sm"
										>
											<Edit size={20} />
										</Link>
										<button
											onClick={handleDelete}
											className="p-4 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
										>
											<Trash2 size={20} />
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModelDetails;
