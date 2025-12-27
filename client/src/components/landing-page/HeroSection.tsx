import {HeroCardItems} from "../../constants";
import type {HeroCardItemInterface} from "../../types";
import {Swiper, SwiperSlide} from "swiper/react";
import {HeroCard} from "../index.ts";
import {Autoplay, Pagination} from "swiper/modules";


const HeroSection = () => {

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="h-full"
        >
            { HeroCardItems.map((item: HeroCardItemInterface) => (
                <SwiperSlide key={item.id}>
                    <HeroCard movie={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default HeroSection
