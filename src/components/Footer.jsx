import React from "react";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className="bg-gray-900 text-gray-300 py-6 mt-10">
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
					{/* Logo / Project Name */}
					<h2 className="btn btn-ghost font-bold text-[#058ED9] text-2xl">
						BrainBox
					</h2>

					{/* Copyright */}
					<p className="text-sm text-gray-400">
						&copy; {new Date().getFullYear()} AI Model Hub. All rights reserved.
					</p>

					{/* GitHub Links */}
					<div className="flex items-center gap-4">
						<a
							href="https://github.com/humayungit815/ai-model-inventory-client"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
						>
							<FaGithub size={20} />
							<span>GitHub Repo</span>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
