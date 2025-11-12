import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import {Outlet} from "react-router";
import Loader from "../components/Loader";

const Root = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader />
			</div>
		);
	}
	return (
		<div className="min-h-screen">
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
