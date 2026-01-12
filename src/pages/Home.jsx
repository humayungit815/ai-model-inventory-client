import React from "react";
import Slider from "../components/Slider";
import FeaturedAiModels from "../components/FeaturedAiModels";
import AboutAiModels from "../components/AboutAiModels";
import GetStarted from "../components/GetStarted";
import KeyFeatures from "../components/KeyFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import EcoSystem from "../components/EcoSystem";
import ModelLine from "../components/ModelLine";
import CodePreview from "../components/CodePreview";

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
			<div>
				<KeyFeatures></KeyFeatures>
			</div>
			<div>
				<WhyChooseUs></WhyChooseUs>
			</div>
			<div>
				<EcoSystem></EcoSystem>
			</div>
			<div>
				<ModelLine></ModelLine>
			</div>
			<div>
				<CodePreview></CodePreview>
			</div>
		</div>
	);
};

export default Home;
