import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import {Outlet} from "react-router";

const Root = () => {
	return (
		<div className="">
			<Navbar></Navbar>
			<div className="">
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Root;
