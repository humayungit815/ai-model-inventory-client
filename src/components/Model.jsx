import React from "react";
import {HiFire} from "react-icons/hi"; // Hot ব্যাজের জন্য

const Model = ({model}) => {
	return (
		<div className="group relative p-[3px] transition-all duration-500 hover:scale-[1.02]">
			{/* ইমেজের মতো বাইরের সেই Glowing Gradient Border */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#F087B1] via-[#c471ed] to-[#12c2e9] rounded-[45px] blur-[3px] opacity-70 group-hover:opacity-100 transition-opacity"></div>

			{/* Main Card Content */}
			<div className="relative bg-white dark:bg-[#0b1215] h-full rounded-[42px] p-2 flex flex-col overflow-hidden">
				{/* Image Section - Inner Rounded */}
				<div className="relative h-64 w-full overflow-hidden rounded-[35px] border-[6px] border-[#F8F9FF] dark:border-slate-800 shadow-inner">
					<img
						src={model?.image}
						alt={model?.name}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>
					{/* User Tag like Image */}
					<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
						<div className="w-4 h-4 rounded-full bg-slate-400"></div>
						<span className="text-[10px] text-white font-medium">
							@brainbox_ai
						</span>
					</div>
				</div>

				{/* Content Section */}
				<div className="p-6 pt-4 flex flex-col flex-grow text-left">
					{/* Badges */}
					<div className="flex gap-2 mb-4">
						<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
							{model?.framework || "AI Model"}
						</span>
						<div className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full">
							<HiFire className="text-orange-500 text-xs" />
							<span className="text-[10px] font-black text-orange-600 uppercase">
								Hot
							</span>
						</div>
					</div>

					{/* Title & Description */}
					<h3 className="text-2xl font-black text-slate-900 dark:text-white leading-none mb-1 group-hover:text-[#F087B1] transition-colors">
						{model?.name}
					</h3>

					<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2  font-medium">
						{model?.description ||
							"Cutting-edge AI for creators, developers, and businesses worldwide."}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Model;
