import React, {useContext} from "react";
import {Link, NavLink} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";

const Navbar = () => {
	const {user, signOutUser} = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser();
	};

	return (
		<nav className=" bg-base-100 shadow-sm">
			<div className="navbar max-w-7xl mx-auto">
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
							<NavLink>Home</NavLink>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">BrainBox</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 flex gap-5">
						<NavLink to="/">Home</NavLink>
						{user && <NavLink to="/add-model">Add Model</NavLink>}

						<NavLink to="/all-model">All Models</NavLink>
						{user && <NavLink to="/my-model">My Models</NavLink>}
						{user && (
							<NavLink to="/my-model-purchase">My Models Purchase</NavLink>
						)}
					</ul>
				</div>
				<div className="navbar-end">
					{user ? (
						// <img className="w-10 h-10" src={user?.photoURL} alt="" />
						<details className="dropdown">
							<summary className="btn border-0 p-0 rounded-full m-1">
								<img
									className="w-10 h-10 rounded-full"
									src={user?.photoURL}
									alt=""
								/>
							</summary>
							<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm">
								<li>
									<a>name: {user?.displayName}</a>
								</li>
								<li>
									<a>email: {user?.email}</a>
								</li>
								
							</ul>
						</details>
					) : (
						""
					)}

					{user ? (
						<button
							onClick={handleSignOut}
							className="btn btn-active btn-primary"
						>
							Logout
						</button>
					) : (
						<Link to="/login">
							<button className="btn btn-active btn-primary">Login</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
