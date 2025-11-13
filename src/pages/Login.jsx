import {AtSign, Lock} from "lucide-react";
import React, {useContext} from "react";
import {BsGoogle} from "react-icons/bs";
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

		loginUser(email, password)
			.then(result => {
				console.log(result.user);
				navigate(`${location.state ? location.state : "/"}`);
				toast.success("Login Successful!");
			})
			.catch(error => {
				console.log(error.message);
				toast.error("Invalid Email or Password");
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				console.log(result.user);
				toast.success("Login Successful.");
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
				{/* Colorful Card */}
				<div className="bg-linear-to-br from-purple-600 to-pink-500 rounded-3xl shadow-2xl max-w-lg w-full p-10 text-white">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
						<p className="text-purple-100">
							Log in to your AI Model Inventory account
						</p>
					</div>

					{/* Login Form */}
					<form onSubmit={handleLogin} className="space-y-6">
						<div className="relative">
							<AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200 w-5 h-5" />
							<input
								type="email"
								name="email"
								required
								placeholder="Email"
								className="w-full px-12 py-3 rounded-xl border border-purple-300 bg-purple-700 placeholder-purple-200 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition"
							/>
						</div>

						<div className="relative">
							<Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200 w-5 h-5" />
							<input
								type="password"
								name="password"
								required
								placeholder="Password"
								className="w-full px-12 py-3 rounded-xl border border-purple-300 bg-purple-700 placeholder-purple-200 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition"
							/>
						</div>
						<div className="px-2 cursor-pointer">
							<p>Forgot Password?</p>
						</div>

						<button
							type="submit"
							className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
						>
							Log In
						</button>

						<div className="flex items-center">
							<hr className="grow border-gray-300" />
							<span className="mx-4 text-gray-400 font-medium">OR</span>
							<hr className="grow border-gray-300" />
						</div>
						<button
							onClick={handleGoogleSignIn}
							type="button"
							className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
						>
							<div className="flex justify-center items-center gap-3">
								<img className="w-5 h-5" src={googleImg} alt="" /> Login With
								Google
							</div>
						</button>
					</form>

					{/* OR Section */}

					{/* Footer */}
					<div className="mt-6 text-center text-purple-100 text-sm">
						Don't have an account?{" "}
						<Link
							to="/signUp"
							className="text-white font-medium hover:underline"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
