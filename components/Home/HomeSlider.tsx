"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import style from "./HomeSlider.module.css";
export function HomeSlider() {
    return (
        <Swiper
            allowTouchMove={false}
            centeredSlides={true}
            modules={[Autoplay, EffectFade]}
            loop={true}
            className={style.slider}
            effect='fade'
            speed={1500}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}>
            <SwiperSlide className={style.slide}>
                <Image
                    src={"/01.jpg"}
                    quality={95}
                    fill={true}
                    alt="violin's bridge"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={"/03.jpg"}
                    quality={95}
                    fill={true}
                    alt="violin's neck"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={"/02.jpg"}
                    quality={95}
                    fill={true}
                    alt="violin's f-hole"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={"/04.jpg"}
                    quality={95}
                    fill={true}
                    alt="violin's head"
                />
            </SwiperSlide>
        </Swiper>
    );
}
