import React from "react";
import dalleImg from "../assets/Dalle-3--scaled.jpg";
import clipImg from "../assets/clipai.jpg";
import deeplabImg from "../assets/deepLab.png";
import resnetImg from "../assets/resnet.png";

const Slider = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img src={dalleImg} className="w-full h-[400px] object-cover" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img src={clipImg} className="w-full h-[400px] object-cover" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img src={deeplabImg} className="w-full h-[400px] object-cover" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img src={resnetImg} className="w-full  h-[400px] object-cover" />
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Slider;
