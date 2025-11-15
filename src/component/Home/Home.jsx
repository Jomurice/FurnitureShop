import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Banners } from "../../data/BannerData";
import ProductSlide from "../Product/ProductSlide";
const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-lg overflow-hidden shadow-md"
            >
                {Banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img
                            src={banner.img}
                            alt={`Slide ${banner.id}`}
                            className="w-full h-100 object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ProductSlide />
        </div>
    );
};

export default Home;
