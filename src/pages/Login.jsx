import {AtSign, Lock, ArrowRight, ShieldCheck, UserCheck} from "lucide-react";
import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router";
import googleImg from "../assets/google_img.png";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";

const Login = () => {
	const {loginUser, signInWithGoogle} = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogin = e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		executeLogin(email, password);
	};

	const executeLogin = (email, password) => {
		loginUser(email, password)
			.then(result => {
				navigate(`${location.state ? location.state : "/"}`);
				toast.success("Access Granted! Welcome back.");
			})
			.catch(error => {
				toast.error("Access Denied: Invalid Credentials");
			});
	};

	// ডেমো লগইন হ্যান্ডলার
	const handleDemoLogin = role => {
		const demoEmail = role === "admin" ? "admin@gmail.com" : "user@gmail.com";
		const demoPassword =
			role === "admin" ? "Admin@gmail.com" : "User@gmail.com";

		// ফর্মে অটো-ফিল দেখানোর জন্য (ঐচ্ছিক)
		const emailInput = document.querySelector('input[name="email"]');
		const passwordInput = document.querySelector('input[name="password"]');
		if (emailInput) emailInput.value = demoEmail;
		if (passwordInput) passwordInput.value = demoPassword;

		executeLogin(demoEmail, demoPassword);
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				toast.success("Authenticated via Google");
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div className="min-h-screen flex items-center justify-center dark:bg-[#0b1215] px-6 py-12 transition-colors duration-500 overflow-hidden relative">
			{/* Background Glows */}
			<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F087B1]/10 blur-[120px] rounded-full"></div>
			<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>

			<div className="max-w-md w-full relative z-10">
				{/* Branding / Header */}
				<div className="text-center mb-10">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-6 shadow-xl">
						<ShieldCheck className="text-[#F087B1] w-8 h-8" />
					</div>
					<h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
						System <span className="text-[#F087B1]">Login.</span>
					</h1>
					<p className="text-slate-500 dark:text-slate-400 font-medium">
						Authorize to manage your AI assets.
					</p>
				</div>

				{/* Login Card */}
				<div className="bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-[40px] border border-white dark:border-slate-800 p-8 md:p-10 shadow-2xl">
					{/* Demo Login Section */}
					<div className="grid grid-cols-2 gap-3 mb-8">
						<button
							type="button"
							onClick={() => handleDemoLogin("admin")}
							className="group relative flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white transition-all active:scale-95"
						>
							<ShieldCheck
								size={14}
								className="text-[#F087B1] group-hover:text-white"
							/>
							Admin Demo
						</button>
						<button
							type="button"
							onClick={() => handleDemoLogin("user")}
							className="group flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-[#F087B1] transition-all active:scale-95"
						>
							<UserCheck size={14} className="text-[#F087B1]" />
							User Demo
						</button>
					</div>

					<div className="relative mb-8 text-center">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
						</div>
						<span className="relative bg-transparent px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
							Or use Credentials
						</span>
					</div>

					<form onSubmit={handleLogin} className="space-y-5">
						{/* Email Input */}
						<div className="space-y-2">
							<label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
								Email
							</label>
							<div className="relative group">
								<AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="email"
									name="email"
									required
									placeholder="name@company.com"
									className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						{/* Password Input */}
						<div className="space-y-2">
							<div className="flex justify-between items-center px-2">
								<label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
									Password
								</label>
								<button
									type="button"
									className="text-[10px] font-black uppercase text-[#F087B1] hover:underline"
								>
									Forgot?
								</button>
							</div>
							<div className="relative group">
								<Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="password"
									name="password"
									required
									placeholder="••••••••"
									className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full group bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white flex items-center justify-center gap-2 shadow-lg active:scale-95"
						>
							Log In{" "}
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</button>

						<div className="relative py-4">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
							</div>
							<div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
								<span className="bg-transparent px-4 text-slate-400">
									Network Auth
								</span>
							</div>
						</div>

						<button
							onClick={handleGoogleSignIn}
							type="button"
							className="w-full py-4 bg-white dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
						>
							<img className="w-5 h-5" src={googleImg} alt="Google" />
							Sign in with Google
						</button>
					</form>

					<p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-xs font-medium">
						Dont't have an account?{" "}
						<Link
							to="/signUp"
							className="text-[#F087B1] font-black uppercase tracking-tighter hover:underline ml-1"
						>
							Create Account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
