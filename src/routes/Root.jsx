import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import {Outlet} from "react-router";
import Loader from "../components/Loader";

const Root = () => {
	return (
		<div className="min-h-screen bg-slate-100 text-base-content">
			<Navbar></Navbar>
			<div className="min-h-screen">
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Root;
