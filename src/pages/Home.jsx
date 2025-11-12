import React from "react";
import Slider from "../components/Slider";
import FeaturedAiModels from "../components/FeaturedAiModels";
import AboutAiModels from "../components/AboutAiModels";
import GetStarted from "../components/GetStarted";

const Home = () => {
	return (
		<div>
			<div className="">
				<Slider></Slider>
			</div>
			<div className="mt-10">
				<FeaturedAiModels></FeaturedAiModels>
			</div>
			<div className="mt-15">
				<AboutAiModels></AboutAiModels>
			</div>
			<div className="mt-15">
				<GetStarted></GetStarted>
			</div>
		</div>
	);
};

export default Home;
