import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {Link} from "react-router";
import Loader from "../components/Loader";

const MyModels = () => {
	const {user} = useContext(AuthContext);
	const [models, setModels] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(
			`https://ai-model-inventory-manager.vercel.app/my-model?email=${user.email}`
		)
			.then(res => res.json())
			.then(data => {
				setModels(data);
				setLoading(false);
			});
	}, [user?.email]);

	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<div className="min-h-scree p-6">
				<h1 className="text-3xl font-bold text-center mb-8">My AI Models</h1>

				{models.length === 0 ? (
					<p className="text-center text-gray-400">
						You haven’t added any models yet.
					</p>
				) : (
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
						{models.map(model => (
							<div
								key={model._id}
								className=" border-gray-700 rounded-xl p-5 shadow-md hover:shadow-xl transition"
							>
								<img
									src={model.image}
									alt={model.name}
									className="w-full h-48 object-cover rounded-lg mb-4"
								/>
								<h2 className="text-xl font-semibold mb-2">{model.name}</h2>
								<p className="text-gray-400">Framework: {model.framework}</p>
								<p className="text-gray-400">Use Case: {model.useCase}</p>
								<p className="text-gray-400 mb-4">
									Created By: {model.createdBy}
								</p>

								<Link to={`/details/${model._id}`}>
									<button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
										View Details
									</button>
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default MyModels;
