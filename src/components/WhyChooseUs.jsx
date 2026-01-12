import React from 'react';

const WhyChooseUs = () => {
    return (
			<div>
				<section className="py-24 dark:bg-[#0b1215]">
					<div className="max-w-7xl mx-auto px-6">
						<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
							<div className="max-w-2xl">
								<h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
									Designed for <span className="text-[#F087B1]">Modern</span> AI
									Teams
								</h2>
								<p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
									Stop searching through messy folders. Our inventory brings
									order to the chaos of model development.
								</p>
							</div>
							<div className="h-px flex-grow bg-slate-100 dark:bg-slate-800 hidden md:block mb-6 mx-8"></div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									title: "Smart Versioning",
									desc: "Keep track of every hyperparameter change and never lose a winning model again.",
								},
								{
									title: "Real-time Drift",
									desc: "Automatically detect when your model performance starts to drop in production.",
								},
								{
									title: "Team Synergy",
									desc: "Share models across your entire engineering team with secure, role-based access.",
								},
							].map((feat, i) => (
								<div
									key={i}
									className="group p-10 rounded-[45px] shadow-md dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-[0_30px_60px_rgba(240,135,177,0.1)] transition-all"
								>
									<div className="w-12 h-1 bg-[#F087B1] mb-6 rounded-full group-hover:w-20 transition-all duration-500"></div>
									<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-[#F087B1] transition-colors">
										{feat.title}
									</h3>
									<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
										{feat.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		);
};

export default WhyChooseUs;