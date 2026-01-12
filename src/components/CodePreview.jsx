import React from 'react';

const CodePreview = () => {
    return (
			<div>
				<section className="py-24 dark:bg-[#0b1215]">
					<div className="max-w-7xl mx-auto px-6">
						<div className="bg-slate-900 rounded-[50px] overflow-hidden border border-slate-800 shadow-2xl flex flex-col md:flex-row">
							{/* Left: Content */}
							<div className="p-12 md:w-1/2 flex flex-col justify-center">
								<h2 className="text-4xl font-black text-white tracking-tighter mb-6">
									Built for <span className="text-[#F087B1]">Developers.</span>
								</h2>
								<p className="text-slate-400 font-medium mb-8 leading-relaxed">
									Integrate your inventory with just 3 lines of code. Support
									for Python, Node.js, and direct REST API calls.
								</p>
								<ul className="space-y-4">
									{[
										"Lightweight SDK",
										"JWT Authentication",
										"Auto-Scaling Endpoints",
									].map((list, i) => (
										<li
											key={i}
											className="flex items-center gap-3 text-white font-bold text-sm"
										>
											<div className="w-5 h-5 rounded-full bg-[#F087B1]/20 flex items-center justify-center text-[#F087B1] text-[10px]">
												✓
											</div>
											{list}
										</li>
									))}
								</ul>
							</div>

							{/* Right: Code Terminal */}
							<div className="bg-black/50 p-8 md:w-1/2 font-mono text-sm border-l border-slate-800 relative">
								<div className="flex gap-2 mb-6">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<div className="space-y-2">
									<p className="text-blue-400">
										import <span className="text-white">inventory_lab</span>
									</p>
									<p className="text-slate-500"># Connect to your workspace</p>
									<p className="text-white">
										client = inventory_lab.
										<span className="text-yellow-400">Connect</span>(api_key=
										<span className="text-green-400">"sk_live_..."</span>)
									</p>
									<p className="text-slate-500">
										# Load your latest vision model
									</p>
									<p className="text-white">
										model = client.models.
										<span className="text-yellow-400">get</span>(
										<span className="text-green-400">"vision-v2-pro"</span>)
									</p>
									<p className="text-white">
										result = model.
										<span className="text-yellow-400">predict</span>(image_data)
									</p>
									<p className="text-[#F087B1] mt-4 animate-pulse">_</p>
								</div>
								<div className="absolute bottom-6 right-6 px-4 py-2 bg-slate-800 rounded-xl text-slate-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-slate-700 transition-colors">
									Copy Code
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
};

export default CodePreview;