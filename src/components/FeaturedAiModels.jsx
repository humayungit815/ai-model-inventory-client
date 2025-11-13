import React, {useEffect, useState} from "react";
import Model from "./Model";
import Loader from "./Loader";

const FeaturedAiModels = () => {
	const [models, setModels] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/latest-models")
			.then(res => res.json())
			.then(data => {
				setModels(data);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader></Loader>;
	}

	return (
		<div className="mt-20">
			<h1 className="text-4xl text-base-content font-bold text-center my-10">
				Featured AI Models
			</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{models?.map(model => (
					<Model key={model._id} model={model}></Model>
				))}
			</div>
		</div>
	);
};

export default FeaturedAiModels;
