import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import {Outlet} from "react-router";

const Root = () => {
	return (
		<div className="h-screen">
			<Navbar></Navbar>
			<div>
				<Outlet></Outlet>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Root;
