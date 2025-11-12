import React, {useEffect, useState} from "react";
import Model from "./Model";

const FeaturedAiModels = () => {
	const [models, setModels] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/latest-models")
			.then(res => res.json())
			.then(data => {
				setModels(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<h1 className="text-4xl font-bold text-center my-8">
				Featured AI Models
			</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{models.map(model => (
					<Model key={model._id} model={model}></Model>
				))}
			</div>
		</div>
	);
};

export default FeaturedAiModels;
