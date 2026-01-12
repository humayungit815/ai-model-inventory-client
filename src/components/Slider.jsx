import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

const Slider = () => {
	return (
		<div className="flex justify-center">
			<Swiper
				pagination={{dynamicBullets: true}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper w-full overflow-hidden"
			>
				{[banner2, banner1, banner3, banner4].map((img, i) => (
					<SwiperSlide key={i}>
						<img
							src={img}
							alt="Banner"
							className="w-[90%] rounded-2xl mx-auto h-[600px]"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
