import React, {useEffect, useState} from "react";
import {Link} from "react-router";
import Loader from "../components/Loader";

const MyModelPurchase = () => {
	const [models, setModels] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/purchased")
			.then(res => res.json())
			.then(data => {
				setModels(data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
			{models.map(model => (
				<div
					key={model._id}
					className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition"
				>
					<img
						src={model.image}
						alt={model.name}
						className="w-full h-48 object-cover rounded-md mb-4"
					/>
					<h2 className="text-xl text-white font-semibold mb-2">
						{model.name}
					</h2>
					<p className="text-gray-400 text-sm">
						Framework: <span className="text-white">{model.framework}</span>
					</p>
					<p className="text-gray-400 text-sm">
						Use Case: <span className="text-white">{model.useCase}</span>
					</p>
					<p className="text-gray-400 text-sm">
						Created By: <span className="text-white">{model.createdBy}</span>
					</p>
					<p className="text-gray-400 text-sm mb-4">
						Purchased By:{" "}
						<span className="text-white">{model.purchasedBy}</span>
					</p>
					<Link to={`/details/${model.modelId}`}>
						<button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
							View Details
						</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default MyModelPurchase;
