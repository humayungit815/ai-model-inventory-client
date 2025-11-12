import React from "react";
import Slider from "../components/Slider";
import FeaturedAiModels from "../components/FeaturedAiModels";

const Home = () => {
	return (
		<div>
			<div className="">
				<Slider></Slider>
			</div>
			<div className="mt-10">
				<FeaturedAiModels></FeaturedAiModels>
			</div>
		</div>
	);
};

export default Home;
