import React, {useEffect, useState} from "react";
import {Link} from "react-router";

const AllModels = () => {
	const [models, setModels] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/models")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setModels(data);
			});
	}, []);

	return (
		<div>
			<div className="min-h-screen bg-gray-900 text-white py-10 px-4">
				<h1 className="text-3xl font-bold text-center mb-8">All AI Models</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{models.map(model => (
						<div
							key={model._id}
							className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
						>
							<img
								src={model.image}
								alt={model.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-5 space-y-2">
								<h2 className="text-2xl font-semibold">{model.name}</h2>
								<p className="text-gray-400">
									<span className="font-semibold">Framework:</span>{" "}
									{model.framework}
								</p>
								<p className="text-gray-400">
									<span className="font-semibold">Use Case:</span>{" "}
									{model.useCase}
								</p>

								<Link to={`/details/${model._id}`}>
									<button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
										View Details
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllModels;
