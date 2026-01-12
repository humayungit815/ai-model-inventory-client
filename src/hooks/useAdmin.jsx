// hooks/useAdmin.js
import {useEffect, useState, useContext} from "react";
import {AuthContext} from "../AuthContext/AuthContext";

const useAdmin = () => {
	const {user, loading} = useContext(AuthContext);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	useEffect(() => {
		if (!loading && user?.email) {
			fetch(
				`https://ai-model-inventory-manager.vercel.app/users/admin/${user?.email}`
			)
				.then(res => res.json())
				.then(data => {
					setIsAdmin(data.admin);
					setIsAdminLoading(false);
				});
		}
	}, [user, loading]);

	return [isAdmin, isAdminLoading];
};

export default useAdmin;
