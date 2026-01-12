import React from "react";
import {
	HiOutlineCpuChip,
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineEye,
} from "react-icons/hi2";

const AboutAiModels = () => {
	const features = [
		{
			title: "Neural Networks",
			desc: "Neural networks mimic the human brain, learning complex patterns to power intelligent applications.",
			icon: <HiOutlineCpuChip className="text-4xl text-[#F087B1]" />,
			color: "from-[#F087B1]/10 to-transparent",
		},
		{
			title: "Smart Chatbots",
			desc: "AI chatbots use NLP to understand and respond to user messages accurately in real time.",
			icon: (
				<HiOutlineChatBubbleBottomCenterText className="text-4xl text-black dark:text-white" />
			),
			color: "from-slate-100 to-transparent",
		},
		{
			title: "Vision Systems",
			desc: "Identify objects, faces, and scenes in photos and videos, improving automation and security.",
			icon: <HiOutlineEye className="text-4xl text-[#F087B1]" />,
			color: "from-[#F087B1]/10 to-transparent",
		},
	];

	return (
		<section className="  dark:bg-[#0b1215] overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				{/* --- HEADER SECTION (Image Style) --- */}
				<div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-24">
					<div className="lg:w-2/3 text-left">
						<span className="inline-block mb-4 px-4 py-1 bg-white border border-pink-100 rounded-full text-[#F087B1] text-[10px] font-black uppercase tracking-[0.4em]">
							Our Technology
						</span>
						<h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
							Architecting <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F087B1] to-[#c471ed]">
								Intelligence.
							</span>
						</h1>
					</div>
					<div className="lg:w-1/3 text-left lg:text-right">
						<p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic border-l-4 lg:border-l-0 lg:border-r-4 border-[#F087B1] px-6">
							"Building the backbone of modern machine learning through
							innovative neural network patterns."
						</p>
					</div>
				</div>

				{/* --- FEATURES GRID (Pastel Glass Style) --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{features.map((item, index) => (
						<div
							key={index}
							className="group relative p-10 rounded-[45px] bg-white dark:bg-slate-900 border border-white dark:border-slate-800  transition-all duration-500 shadow-md hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(240,135,177,0.15)]"
						>
							{/* Hover Background Accent */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[45px]`}
							></div>

							<div className="relative z-10 text-left">
								{/* Icon Container styled like image elements */}
								<div className="mb-8 inline-block p-5 bg-[#F8F9FF] dark:bg-slate-800 rounded-3xl shadow-inner group-hover:scale-110 transition-transform duration-500 border border-white">
									{item.icon}
								</div>

								<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
									{item.title}
								</h3>

								<p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm">
									{item.desc}
								</p>

								{/* Action Arrow Link like the Image style */}
								<div className="mt-8 flex items-center gap-2 text-[#F087B1] font-black text-xs uppercase tracking-widest cursor-pointer">
									Learn More
									<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
										→
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* --- BOTTOM DECORATION --- */}
				<div className="mt-24 flex items-center justify-center gap-4">
					<div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
					<div className="w-3 h-3 rounded-full bg-[#F087B1] animate-ping"></div>
					<div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
				</div>
			</div>
		</section>
	);
};

export default AboutAiModels;
