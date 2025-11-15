
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { products } from "../../data/ProductData";
import ProductCard from "../Product/ProductCard";

const ProductSlide = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <Swiper
                style={{ '--swiper-navigation-color': '#808080' }}
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3000 }}
                navigation
                loop={true}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard
                            id={product.id}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductSlide;