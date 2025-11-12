import React from "react";
import {Link} from "react-router";

const Error = () => {
	return (
		<div>
			<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white text-center p-6">
				<h1 className="text-6xl font-extrabold text-blue-400 mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-2">
					Oops! This AI model doesn’t exist.
				</h2>
				<p className="text-gray-300 mb-8 max-w-md">
					It seems you've wandered into an unknown route. Don’t worry — you can
					always go back to the homepage.
				</p>

				<Link
					to="/"
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
