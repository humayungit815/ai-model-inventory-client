import {
	AtSign,
	Camera,
	Lock,
	User,
	Sparkles,
	ArrowRight,
	UserPlus,
} from "lucide-react";
import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router";
import googleImg from "../assets/google_img.png";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";

const Register = () => {
	const {createUser, updateUserProfile, signInWithGoogle} =
		useContext(AuthContext);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleRegister = e => {
		e.preventDefault();
		setError(""); // রিসেট এরর

		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;

		// পাসওয়ার্ড ভ্যালিডেশন
		const upperCase = /[A-Z]/.test(password);
		const lowerCase = /[a-z]/.test(password);
		const lengthValid = password.length >= 6;

		if (!upperCase) {
			setError("Must contain at least one uppercase letter.");
			return;
		}
		if (!lowerCase) {
			setError("Must contain at least one lowercase letter.");
			return;
		}
		if (!lengthValid) {
			setError("Password must be at least 6 characters long.");
			return;
		}

		createUser(email, password)
			.then(result => {
				updateUserProfile({displayName: name, photoURL: photo}).then(() => {
					const userInfo = {
						name: name,
						email: email,
						photo: photo,
						role: "user",
						joinedDate: new Date().toISOString(),
					};
					fetch("http://localhost:3000/users", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(userInfo),
					})
						.then(res => res.json())
						.then(data => {
							if (data.insertedId) {
								toast.success("Registration & Sync Successful.");
								navigate("/");
							} else {
								navigate("/");
							}
						})
						.catch(err => {
							console.error("Database Save Error:", err);

							navigate("/");
						});
				});
			})
			.catch(error => {
				console.error(error);
				toast.error("Email Already in Use or Connection Error");
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				toast.success("Login Successful.");
				navigate("/");
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="min-h-screen flex items-center justify-center dark:bg-[#0b1215] px-4 py-12 transition-colors duration-500 relative overflow-hidden">
			{/* Background Decorative Element */}
			<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#F087B1]/10 blur-[120px] rounded-full"></div>
			<div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#F087B1]/5 blur-[120px] rounded-full"></div>

			<div className="max-w-md w-full relative z-10">
				{/* Header Icon & Title */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-50 dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 mb-6">
						<UserPlus className="text-[#F087B1] w-8 h-8" />
					</div>
					<h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
						Join the <span className="text-[#F087B1]">Lab Network.</span>
					</h1>
					<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
						Create your operator account to manage AI models.
					</p>
				</div>

				{/* Main Card */}
				<div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-10 rounded-[40px] shadow-2xl transition-all">
					<form onSubmit={handleRegister} className="space-y-5">
						{/* Full Name */}

						<div className="space-y-1.5">
							<label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
								Name
							</label>
							<div className="relative group">
								<User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="text"
									name="name"
									required
									placeholder="John Doe"
									className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						{/* Email */}
						<div className="space-y-1.5">
							<label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
								Email
							</label>
							<div className="relative group">
								<AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="email"
									name="email"
									required
									placeholder="name@lab.com"
									className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						{/* Photo URL */}
						<div className="space-y-1.5">
							<label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
								Photo URL
							</label>
							<div className="relative group">
								<Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="text"
									name="photo"
									required
									placeholder="https://image-link.com"
									className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
						</div>

						{/* Password */}
						<div className="space-y-1.5">
							<label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
								Password
							</label>
							<div className="relative group">
								<Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#F087B1] transition-colors w-5 h-5" />
								<input
									type="password"
									name="password"
									required
									placeholder="••••••••"
									className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 dark:bg-[#0b1215] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-[#F087B1]/20 focus:border-[#F087B1] outline-none transition-all font-medium"
								/>
							</div>
							{error && (
								<p className="text-[10px] text-red-500 font-bold uppercase tracking-tight mt-1 ml-2">
									{error}
								</p>
							)}
						</div>

						{/* Register Button */}
						<button
							type="submit"
							className="w-full group bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#F087B1] dark:hover:bg-[#F087B1] dark:hover:text-white flex items-center justify-center gap-2 shadow-xl active:scale-95 mt-2"
						>
							Sign up{" "}
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</button>

						<div className="relative py-2">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
							</div>
							<div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
								<span className="bg-white dark:bg-slate-900 px-4 text-slate-400">
									Social Sign Up
								</span>
							</div>
						</div>

						{/* Google Button */}
						<button
							onClick={handleGoogleSignIn}
							type="button"
							className="w-full py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
						>
							<img className="w-5 h-5" src={googleImg} alt="Google" /> Google
							Sign Up
						</button>
					</form>

					<p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-xs font-medium">
						Already an account?{" "}
						<Link
							to="/login"
							className="text-[#F087B1] font-black hover:underline ml-1 uppercase"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
