import {AtSign, Camera, Lock, User} from "lucide-react";
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

		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;

		console.log(name, email, photo, password);

		const upperCase = /[A-Z]/.test(password);
		const lowerCase = /[a-z]/.test(password);
		const lengthValid = password.length >= 6;

		if (!upperCase) {
			setError("Password must contain at least one uppercase letter (A-Z).");
			return;
		}
		if (!lowerCase) {
			setError("Password must contain at least one lowercase letter (a-z).");
			return;
		}
		if (!lengthValid) {
			setError("Password must be at least 6 characters long.");
			return;
		}

		createUser(email, password)
			.then(result => {
				console.log(result.user);
				updateUserProfile({displayName: name, photoURL: photo});
				toast.success("Registration Successful.");
				navigate("/");
			})
			.catch(error => {
				console.log(error.message);
				toast.error("Email Already in Use");
				// setError(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				console.log(result.user);
				toast.success("Login Successful.");
				navigate("/");
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
				<div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl shadow-2xl max-w-lg w-full p-10 text-white">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold mb-2">Create Account</h1>
						<p className="text-purple-100">
							Register for AI Model Inventory Manager
						</p>
					</div>

					{/* Registration Form */}
					<form onSubmit={handleRegister} className="space-y-6">
						{/* Name */}
						<div className="relative">
							<User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200 w-5 h-5" />
							<input
								type="text"
								name="name"
								required
								placeholder="Name"
								className="w-full px-12 py-3 rounded-xl border border-purple-300 bg-purple-700 placeholder-purple-200 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition"
							/>
						</div>

						{/* Email */}
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

						{/* photo */}
						<div className="relative">
							<Camera className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-200 w-5 h-5" />
							<input
								type="text"
								name="photo"
								required
								placeholder="Photo URL"
								className="w-full px-12 py-3 rounded-xl border border-purple-300 bg-purple-700 placeholder-purple-200 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition"
							/>
						</div>

						{/* Password */}
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

						{/* Gradient Sign Up Button */}
						<button
							type="submit"
							className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
						>
							Sign Up
						</button>
						{error && <p>{error}</p>}
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
								<img className="w-5 h-5" src={googleImg} alt="" /> Sign Up With
								Google
							</div>
						</button>
					</form>

					{/* Footer */}
					<div className="mt-6 text-center text-purple-100 text-sm">
						Already have an account?{" "}
						<Link
							to="/login"
							className="text-white font-medium hover:underline"
						>
							Log In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
