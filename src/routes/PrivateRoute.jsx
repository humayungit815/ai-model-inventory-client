import React, {useContext} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {Navigate, useLocation} from "react-router";

const PrivateRoute = ({children}) => {
	const {user, loading} = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<span className="loading loading-bars loading-xl"></span>;
			</div>
		);
	}

	if (!user) {
		return <Navigate state={location?.pathname} to="/login"></Navigate>;
	}

	return children;
};

export default PrivateRoute;
