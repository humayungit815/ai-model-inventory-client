import React from "react";
import {FaGithub, FaLinkedin, FaTwitter, FaDiscord} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black dark:bg-[#0b1215] pt-24 pb-12 overflow-hidden transition-colors duration-500">
			<div className="max-w-7xl mx-auto px-6">
				{/* --- TOP SECTION: NEWSLETTER / CTA --- */}
				<div className="relative group p-12 md:p-16 rounded-[50px] bg-slate-900 dark:bg-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-10 mb-20 overflow-hidden shadow-2xl">
					{/* Background Glow */}
					<div className="absolute top-0 right-0 w-80 h-80 bg-[#F087B1]/20 blur-[100px] -mr-40 -mt-40 transition-opacity group-hover:opacity-50"></div>

					<div className="relative z-10 lg:w-1/2 text-center lg:text-left">
						<h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
							Join the future of <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F087B1] to-[#c471ed]">
								AI Management.
							</span>
						</h2>
						<p className="text-slate-400 font-medium">
							Subscribe for latest model updates and AI insights.
						</p>
					</div>

					<div className="relative z-10 lg:w-1/2 w-full max-w-md">
						<div className="flex p-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-inner">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-transparent border-none outline-none px-6 py-3 text-white w-full font-medium"
							/>
							<button className="bg-[#F087B1] hover:bg-[#d9769e] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95">
								Join
							</button>
						</div>
					</div>
				</div>

				{/* --- MIDDLE SECTION: LINKS --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
					{/* Brand Info */}
					<div className="space-y-6">
						<h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
							AI<span className="text-[#F087B1]">Lab.</span>
						</h3>
						<p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
							The ultimate backbone for modern machine learning teams.
							Architecting intelligence, one model at a time.
						</p>
						<div className="flex gap-4">
							{[<FaGithub />, <FaLinkedin />, <FaTwitter />, <FaDiscord />].map(
								(icon, idx) => (
									<a
										key={idx}
										href="#"
										className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#F087B1] hover:text-white transition-all duration-300"
									>
										{icon}
									</a>
								)
							)}
						</div>
					</div>

					{/* Quick Links */}
					{["Product", "Resources", "Company"].map((title, i) => (
						<div key={i} className="space-y-6">
							<h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#F087B1]">
								{title}
							</h4>
							<ul className="space-y-4">
								{["Inventory", "Documentation", "Pricing", "API Status"].map(
									(link, j) => (
										<li key={j}>
											<a
												href="#"
												className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
											>
												{link}
											</a>
										</li>
									)
								)}
							</ul>
						</div>
					))}
				</div>

				{/* --- BOTTOM SECTION: LEGAL --- */}
				<div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:row justify-between items-center gap-6">
					<p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
						© 2026 AI Inventory Lab • All Rights Reserved
					</p>
					<div className="flex gap-8">
						<a
							href="#"
							className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-[#F087B1]"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-[#F087B1]"
						>
							Terms of Service
						</a>
					</div>
				</div>

				{/* --- DECORATIVE FINISHER --- */}
				<div className="mt-12 flex items-center justify-center gap-4 opacity-50">
					<div className="h-[1px] flex-grow bg-slate-100 dark:bg-slate-900"></div>
					<div className="w-2 h-2 rounded-full bg-[#F087B1]"></div>
					<div className="h-[1px] flex-grow bg-slate-100 dark:bg-slate-900"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
