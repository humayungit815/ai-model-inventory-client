import React from 'react';

const ModelLine = () => {
    return (
			<div>
				<section className="py-24 dark:bg-[#0b1215]">
					<div className="max-w-7xl mx-auto px-6">
						<div className="flex flex-col lg:flex-row gap-16 items-start">
							<div className="lg:w-1/3">
								<span className="text-[#F087B1] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
									Process Flow
								</span>
								<h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
									The Life of <br /> a Model.
								</h2>
								<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
									From raw data to a fully optimized API, we track every
									heartbeat of your AI assets.
								</p>
							</div>

							<div className="lg:w-2/3 grid grid-cols-1 gap-12 relative">
								<div className="absolute left-8 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-800"></div>

								{[
									{
										step: "01",
										title: "Ingestion & Training",
										desc: "Connect your cloud buckets and start training with version-tracked datasets.",
									},
									{
										step: "02",
										title: "Hyper-Parameter Tuning",
										desc: "Compare different runs and lock the best configuration automatically.",
									},
									{
										step: "03",
										title: "Validation & Safety",
										desc: "Run automated bias checks and performance benchmarks before deployment.",
									},
								].map((item, i) => (
									<div key={i} className="relative pl-24 group">
										<div className="absolute left-0 w-16 h-16 bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 rounded-2xl flex items-center justify-center z-10 group-hover:border-[#F087B1] transition-colors duration-500">
											<span className="text-xl font-black text-slate-900 dark:text-white">
												{item.step}
											</span>
										</div>
										<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
											{item.title}
										</h3>
										<p className="text-slate-500 dark:text-slate-400 max-w-md font-medium text-sm leading-relaxed">
											{item.desc}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
};

export default ModelLine;