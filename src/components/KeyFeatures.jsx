import React from "react";

const KeyFeatures = () => {
	return (
		<div>
			<section className="py-20 dark:bg-[#0b1215]">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
							Numbers That Matter
						</h2>
						<p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
							We track every detail of your AI performance so you can focus on
							building the next big thing.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{label: "Active Models", value: "128+"},
							{label: "Predictive Power", value: "99.9%"},
							{label: "Global Users", value: "25k"},
							{label: "Total GPU Hours", value: "10M"},
						].map((stat, i) => (
							<div
								key={i}
								className="p-8 rounded-[35px] bg-white shadow-md dark:bg-slate-900/50 border border-white dark:border-slate-800 text-center hover:border-[#F087B1] transition-colors"
							>
								<h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
									{stat.value}
								</h4>
								<p className="text-[#F087B1] text-[10px] font-black uppercase tracking-widest">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default KeyFeatures;
