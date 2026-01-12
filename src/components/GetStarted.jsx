import React, {useContext} from "react";
import {useNavigate} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";
import {HiOutlineArrowRight} from "react-icons/hi2";

const GetStarted = () => {
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();

	const handleRegister = e => {
		e.preventDefault();
		if (user) {
			toast.info("You are already registered and logged in!");
			return;
		}
		navigate("/signUp");
	};

	const handleLogin = e => {
		e.preventDefault();
		if (user) {
			toast.info("You are already logged in!");
			return;
		}
		navigate("/login");
	};

	return (
		<div className="max-w-7xl mx-auto px-6 py-24">
			{/* ইমেজের মতো গ্লোয়িং বর্ডার ইফেক্ট দেওয়ার জন্য আউটার কন্টেইনার */}
			<section className="relative overflow-hidden bg-white dark:bg-[#0b1215] rounded-[50px] shadow-[0_20px_80px_rgba(240,135,177,0.15)] border border-white dark:border-slate-800 p-1">
				{/* Background Decorative Blobs - ইমেজের মতো সফট পিঙ্ক ও ব্লু শেড */}
				<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-100/40 blur-[100px] rounded-full -z-10 animate-pulse"></div>
				<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 blur-[100px] rounded-full -z-10"></div>

				<div className="relative z-10 py-24 px-6 md:px-20 text-center">
					{/* Upper Badge */}
					<div className="inline-flex items-center justify-center px-6 py-2 bg-pink-50 dark:bg-pink-500/10 rounded-full mb-10 border border-pink-100 dark:border-pink-500/20">
						<span className="text-[#F087B1] text-xs font-black uppercase tracking-[0.3em]">
							Community Access
						</span>
					</div>

					{/* Main Heading styled like the image's bold font */}
					<h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
						Ready to Shape the <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F087B1] via-[#c471ed] to-[#12c2e9]">
							Future with AI?
						</span>
					</h2>

					<p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-14 font-medium leading-relaxed italic">
						"Effortlessly manage and explore industry-level AI models with our
						intelligent inventory system."
					</p>

					<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
						{/* Get Started Button - ইমেজের পিঙ্ক শেড */}
						<button
							onClick={handleRegister}
							className="group px-12 py-5 bg-[#F087B1] text-white font-black rounded-3xl transition-all duration-300 hover:bg-[#e076a0] hover:shadow-[0_15px_40px_rgba(240,135,177,0.4)] flex items-center gap-3 active:scale-95"
						>
							Get Started Free
							<HiOutlineArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
						</button>

						{/* Sign In Button - ইমেজের সলিড ব্ল্যাক স্টাইল */}
						<button
							onClick={handleLogin}
							className="px-12 py-5 bg-black dark:bg-white dark:text-black text-white font-black rounded-3xl transition-all duration-300 hover:bg-slate-800 shadow-xl active:scale-95 flex items-center gap-2"
						>
							Sign In
							<div className="w-6 h-6 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center text-xs">
								→
							</div>
						</button>
					</div>

					{/* Bottom Indicator */}
					<div className="mt-16 flex flex-col items-center gap-4">
						<div className="flex -space-x-3">
							{[1, 2, 3, 4].map(i => (
								<div
									key={i}
									className={`w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 i${i}`}
								>
									<img
										src={`https://i.pravatar.cc/100?img=${i + 10}`}
										alt="user"
										className="rounded-full"
									/>
								</div>
							))}
						</div>
						<p className="text-sm font-black text-slate-400 uppercase tracking-widest">
							Join 3M+ Creators Worldwide
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GetStarted;
