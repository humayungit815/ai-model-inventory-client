import React, {useContext, useState} from "react";
import {toast} from "react-toastify";
import {AuthContext} from "../AuthContext/AuthContext";
import {useNavigate} from "react-router";
import {
	Sparkles,
	Layout,
	Brain,
	Database,
	FileText,
	Image as ImageIcon,
	Send,
} from "lucide-react";

const AddModel = () => {
	const {user} = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleAddModel = e => {
		e.preventDefault();
		setLoading(true);

		const formData = {
			name: e.target.name.value,
			framework: e.target.framework.value,
			useCase: e.target.useCase.value,
			dataset: e.target.dataset.value,
			description: e.target.description.value,
			image: e.target.image.value,
			createdBy: user?.email,
			purchased: 0,
		};

		fetch("https://ai-model-inventory-manager.vercel.app/models", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(data => {
				toast.success("Model Integrated Successfully!");
				navigate("/all-model");
			})
			.catch(error => {
				console.log(error);
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="min-h-screen dark:bg-[#0b1215] py-20 px-6 transition-colors duration-500">
			<div className="max-w-4xl mx-auto">
				{/* --- HEADER --- */}
				<div className="text-center mb-12">
					<span className="inline-block mb-4 px-4 py-1 bg-pink-50 dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-full text-[#F087B1] text-[10px] font-black uppercase tracking-[0.4em]">
						Contribution Portal
					</span>
					<h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
						Deploy New <span className="text-[#F087B1]">Intelligence.</span>
					</h2>
				</div>

				{/* --- FORM CARD --- */}
				<div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[50px] border border-white dark:border-slate-800 shadow-2xl relative overflow-hidden">
					{/* Decorative Background Glow */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-[#F087B1]/10 blur-[80px] -mr-32 -mt-32"></div>

					<form onSubmit={handleAddModel} className="relative z-10 space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Model Name */}
							<div className="space-y-2">
								<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
									<Sparkles size={14} className="text-[#F087B1]" /> Model
									Identity
								</label>
								<input
									type="text"
									name="name"
									required
									placeholder="e.g. NeuralVision Pro"
									className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>

							{/* Framework */}
							<div className="space-y-2">
								<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
									<Layout size={14} className="text-[#F087B1]" /> Core Framework
								</label>
								<input
									type="text"
									name="framework"
									required
									placeholder="PyTorch, TensorFlow, etc."
									className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>

							{/* Use Case */}
							<div className="space-y-2">
								<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
									<Brain size={14} className="text-[#F087B1]" /> Primary Use
									Case
								</label>
								<input
									type="text"
									name="useCase"
									required
									placeholder="NLP, Computer Vision, etc."
									className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>

							{/* Dataset */}
							<div className="space-y-2">
								<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
									<Database size={14} className="text-[#F087B1]" /> Training
									Dataset
								</label>
								<input
									type="text"
									name="dataset"
									required
									placeholder="ImageNet, Custom CSV, etc."
									className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						{/* Description */}
						<div className="space-y-2">
							<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
								<FileText size={14} className="text-[#F087B1]" /> Architectural
								Description
							</label>
							<textarea
								name="description"
								required
								rows="4"
								placeholder="Explain the model's capabilities and architecture..."
								className="w-full px-6 py-4 rounded-3xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium resize-none"
							></textarea>
						</div>

						{/* Image URL */}
						<div className="space-y-2">
							<label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">
								<ImageIcon size={14} className="text-[#F087B1]" /> Visual
								Reference (URL)
							</label>
							<input
								type="url"
								name="image"
								placeholder="https://images.unsplash.com/your-ai-image"
								className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
							/>
						</div>

						{/* Submit Button */}
						<div className="pt-4">
							<button
								type="submit"
								disabled={loading}
								className="w-full group relative flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white disabled:opacity-70 active:scale-[0.98] shadow-xl"
							>
								{loading ? (
									<div className="flex items-center gap-3">
										<div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
										<span>Analyzing Data...</span>
									</div>
								) : (
									<>
										<span>Publish to Inventory</span>
										<Send
											size={16}
											className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
										/>
									</>
								)}
							</button>
						</div>
					</form>
				</div>

				{/* --- FOOTER DECORATION --- */}
				<p className="mt-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
					System Node: {user?.email || "Anonymous"}
				</p>
			</div>
		</div>
	);
};

export default AddModel;
