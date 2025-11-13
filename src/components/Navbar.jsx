import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
const Navbar = () => {
	const {user, signOutUser} = useContext(AuthContext);

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	const handleSignOut = () => {
		signOutUser();
	};

	useEffect(() => {
		const html = document.querySelector("html");
		html.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleTheme = checked => {
		setTheme(checked ? "dark" : "light");
	};

	return (
		<nav className=" bg-base-100 shadow-sm">
			<div className="navbar md:px-10">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<NavLink
								to="/"
								className="hover:text-blue-400 transition-colors duration-200"
							>
								Home
							</NavLink>

							<NavLink
								to="/add-model"
								className="hover:text-blue-400 transition-colors duration-200"
							>
								Add Model
							</NavLink>

							<NavLink
								to="/all-model"
								className="hover:text-blue-400 transition-colors duration-200"
							>
								All Models
							</NavLink>
						</ul>
					</div>
					<a className="btn btn-ghost p-0 font-bold text-[#058ED9] text-2xl">
						BrainBox
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-medium flex gap-5">
						<NavLink
							to="/"
							className="hover:text-blue-400 transition-colors duration-200"
						>
							Home
						</NavLink>

						<NavLink
							to="/add-model"
							className="hover:text-blue-400 transition-colors duration-200"
						>
							Add Model
						</NavLink>

						<NavLink
							to="/all-model"
							className="hover:text-blue-400 transition-colors duration-200"
						>
							All Models
						</NavLink>
					</ul>
				</div>
				<div className="navbar-end">
					{user ? (
						//

						<div className="dropdown dropdown-bottom dropdown-center">
							<div
								tabIndex={0}
								role="button"
								className="btn m-1 border-0 p-0 rounded-full"
							>
								<img
									className="w-10 h-10 rounded-full"
									src={user?.photoURL}
									alt=""
								/>
							</div>
							<ul
								tabIndex="-1"
								className="dropdown-content  menu rounded-xl bg-base-100 font-medium   shadow-sm"
							>
								<li>
									<a>name: {user?.displayName}</a>
								</li>
								<li>
									<a>email: {user?.email}</a>
								</li>
								<li>{user && <NavLink to="/my-model">My Models</NavLink>}</li>
								<li>
									{user && (
										<NavLink to="/my-model-purchase">
											My Models Purchase
										</NavLink>
									)}
								</li>
							</ul>
						</div>
					) : (
						""
					)}

					{user ? (
						<button
							onClick={handleSignOut}
							className="btn text-white bg-[#1E91D6] ml-3"
						>
							Logout
						</button>
					) : (
						<Link to="/login">
							<button className="btn text-white bg-[#1E91D6] ml-3">
								Login
							</button>
						</Link>
					)}
				</div>
				<div className="ml-3">
					<input
						onChange={e => handleTheme(e.target.checked)}
						type="checkbox"
						defaultChecked={localStorage.getItem("theme") === "dark"}
						className="toggle"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
