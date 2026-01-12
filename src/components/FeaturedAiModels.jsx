import React, {useEffect, useState} from "react";
import Model from "./Model";
import Loader from "./Loader";

const FeaturedAiModels = () => {
	const [models, setModels] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://ai-model-inventory-manager.vercel.app/latest-models")
			.then(res => res.json())
			.then(data => {
				setModels(data);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<section className="relative py-24 px-6 dark:bg-[#0b1215] overflow-hidden">
			{/* Background Blobs - ইমেজের মতো সফট পিঙ্ক এবং ল্যাভেন্ডার ভাইব */}
			<div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-pink-200/30 blur-[120px] rounded-full -z-10"></div>
			<div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full -z-10"></div>

			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<div className="inline-block mb-4 px-6 py-2 bg-white/80 border border-pink-100 rounded-full shadow-sm">
						<span className="text-[#F087B1] text-xs font-black uppercase tracking-[0.4em]">
							New Releases
						</span>
					</div>
					<h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight mb-6">
						Featured <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F087B1] via-[#c471ed] to-[#12c2e9]">
							AI Models
						</span>
					</h2>
					<p className="max-w-xl mx-auto text-slate-500 font-medium text-lg italic">
						"Next-generation intelligence for creators and developers."
					</p>
				</div>

				{/* Models Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{models?.map(model => (
						<Model key={model._id} model={model} />
					))}
				</div>

			</div>
		</section>
	);
};

export default FeaturedAiModels;
