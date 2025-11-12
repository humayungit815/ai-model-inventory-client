import React, {useContext} from "react";
import {Link, useNavigate} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast} from "react-toastify";

const GetStarted = () => {
	const {user} = useContext(AuthContext);

	const navigate = useNavigate();

	const handleRegister = () => {
		if (user) {
			toast.success("You have already registered!");
			return;
		} else {
			navigate("/signUp");
		}
	};
	const handleLogin = () => {
		if (user) {
			toast.success("You have already loged in!");
			return;
		} else {
			navigate("/login");
		}
	};

	return (
		<div className="max-w-7xl mx-auto">
			<section className="bg-gradient-to-r from-blue-800 via-indigo-900 to-gray-900 text-white py-20 px-6 md:px-20 text-center rounded-xl shadow-md">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold mb-6">
						Get Started with AI Models
					</h2>
					<p className="text-lg text-gray-300 mb-8">
						Ready to explore, create, and manage powerful AI models? Join our
						platform today and start building the future with AI. Whether you’re
						a developer or just curious, we make it simple and intuitive.
					</p>

					<div className="flex justify-center gap-6 mt-8">
						<Link
							onClick={handleRegister}
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
						>
							Register Now
						</Link>
						<Link
							onClick={handleLogin}
							className="bg-white text-blue-700 hover:bg-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
						>
							Login
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GetStarted;
