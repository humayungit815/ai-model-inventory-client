import React, {useEffect, useState} from "react";
import {Link} from "react-router";
import Loader from "../components/Loader";
// Lucide Icons Import
import {Search, Filter, ArrowRight, Box, Cpu, Zap} from "lucide-react";

const AllModels = () => {
	const [models, setModels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedFrameworks, setSelectedFrameworks] = useState([]);

	useEffect(() => {
		fetchModels();
	}, []);

	const fetchModels = async (frameworksArray = []) => {
		setLoading(true);
		try {
			let url = "https://ai-model-inventory-manager.vercel.app/filter";
			if (frameworksArray.length > 0) {
				url = `https://ai-model-inventory-manager.vercel.app/filter?frameworks=${encodeURIComponent(
					frameworksArray.join(",")
				)}`;
			} else {
				url = "https://ai-model-inventory-manager.vercel.app/models";
			}
			const res = await fetch(url);
			const data = await res.json();
			setModels(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const handleDropdownChange = e => {
		const val = e.target.value;
		const selectedOptions = val ? [val] : [];
		setSelectedFrameworks(selectedOptions);
		fetchModels(selectedOptions);
	};

	const handleSearch = e => {
		e.preventDefault();
		const search_text = e.target.search.value;
		setLoading(true);

		fetch(
			`https://ai-model-inventory-manager.vercel.app/search?search=${search_text}`
		)
			.then(res => res.json())
			.then(data => {
				setModels(data);
				setLoading(false);
			});
	};

	if (loading) return <Loader />;

	return (
		<div className="min-h-screen  dark:bg-[#0b1215] transition-colors duration-500 pb-20 font-sans">
			{/* --- HEADER SECTION --- */}
			<div className="pt-20 pb-12 px-6 text-center">
				<span className="inline-block mb-4 px-4 py-1 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-full text-[#F087B1] text-[10px] font-black uppercase tracking-[0.4em] shadow-sm">
					AI Inventory Manager
				</span>
				<h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
					Discover{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F087B1] to-[#c471ed]">
						Intelligence.
					</span>
				</h1>
			</div>

			{/* --- SEARCH & FILTER BAR --- */}
			<div className="max-w-7xl mx-auto px-6 mb-16">
				<div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[30px] border border-white dark:border-slate-800 shadow-xl flex flex-col md:flex-row gap-4 items-center">
					{/* Search Form */}
					<form
						onSubmit={handleSearch}
						className="relative w-full md:flex-grow group"
					>
						<Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors size={20}" />
						<input
							type="text"
							name="search"
							placeholder="Search by model name..."
							className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
						/>
						<button
							type="submit"
							className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-white dark:text-black text-white px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white transition-all shadow-md"
						>
							Search
						</button>
					</form>

					{/* Filter Dropdown */}
					<div className="relative w-full md:w-64 group">
						<Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors size={20}" />
						<select
							value={selectedFrameworks[0] || ""}
							onChange={handleDropdownChange}
							className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 appearance-none focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-bold text-xs uppercase tracking-widest cursor-pointer"
						>
							<option value="">All Frameworks</option>
							<option value="TensorFlow">TensorFlow</option>
							<option value="PyTorch">PyTorch</option>
						</select>
					</div>
				</div>
			</div>

			{/* --- MODELS GRID --- */}
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{models.length > 0 ? (
					models.map(model => (
						// কার্ডের ভেতর এই অংশটি ব্যবহার করুন (Map ফাংশনের ভেতরে)
						<div
							key={model._id}
							className="group relative bg-white dark:bg-slate-900 rounded-[45px] border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(240,135,177,0.15)]"
						>
							{/* --- IMAGE SECTION --- */}
							<div className="relative h-60 overflow-hidden p-4">
								<img
									src={model.image}
									alt={model.name}
									className="w-full h-full object-cover rounded-[35px] transition-transform duration-700 group-hover:scale-110"
								/>
								{/* Framework Badge Over Image */}
								<div className="absolute top-8 left-8">
									<div className="flex items-center gap-2 px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
										<Box size={14} className="text-[#F087B1]" />
										<span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">
											{model.framework}
										</span>
									</div>
								</div>
							</div>

							{/* --- CONTENT SECTION --- */}
							<div className="p-8 pt-2">
								<h2 className="text-2xl font-black text-slate-900 dark:text-white mb-5 tracking-tight group-hover:text-[#F087B1] transition-colors">
									{model.name}
								</h2>

								{/* Data Points */}
								<div className="space-y-4 mb-8">
									{/* Framework Info */}
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#F087B1]">
											<Cpu size={18} />
										</div>
										<div>
											<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
												Architecture
											</p>
											<p className="text-sm font-bold text-slate-700 dark:text-slate-300">
												{model.framework}
											</p>
										</div>
									</div>

									{/* Use Case Info */}
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#F087B1]">
											<Zap size={18} />
										</div>
										<div>
											<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
												Primary Use Case
											</p>
											<p className="text-sm font-bold text-slate-700 dark:text-slate-300 line-clamp-1">
												{model.useCase}
											</p>
										</div>
									</div>
								</div>

								{/* Action Button */}
								<Link to={`/details/${model._id}`}>
									<div className="flex items-center justify-between p-2 pl-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group/btn hover:bg-[#F087B1]/10 transition-all duration-300">
										<span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover/btn:text-[#F087B1]">
											View Model Info
										</span>
										<div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover/btn:bg-[#F087B1] group-hover/btn:text-white transition-all">
											<ArrowRight size={18} />
										</div>
									</div>
								</Link>
							</div>
						</div>
					))
				) : (
					<div className="col-span-full py-20 text-center">
						<div className="inline-block p-6 rounded-full bg-slate-50 dark:bg-slate-900 mb-4">
							<Search size={48} className="text-slate-200" />
						</div>
						<p className="font-black text-slate-400 uppercase tracking-widest text-sm">
							No models discovered yet.
						</p>
					</div>
				)}
			</div>

			{/* Signature Line */}
			<div className="mt-24 flex items-center justify-center gap-4 max-w-7xl mx-auto px-6 opacity-30">
				<div className="h-[1px] flex-grow bg-slate-900 dark:bg-white"></div>
				<div className="w-2 h-2 rounded-full bg-[#F087B1]"></div>
				<div className="h-[1px] flex-grow bg-slate-900 dark:bg-white"></div>
			</div>
		</div>
	);
};

export default AllModels;
