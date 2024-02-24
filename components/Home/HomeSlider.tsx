"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import style from "./HomeSlider.module.css";
import bridge from "/public/01.jpg";
import neck from "/public/03.jpg";
import top from "/public/02.jpg";
import head from "/public/04.jpg";

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
                delay: 4500,
                disableOnInteraction: false,
            }}>
            <SwiperSlide className={style.slide}>
                <Image
                    className={style.image}
                    src={top}
                    quality={95}
                    alt="violin's bridge"
                    priority
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    className={style.image}
                    src={bridge}
                    quality={95}
                    alt="violin's neck"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    className={style.image}
                    src={neck}
                    quality={95}
                    alt="violin's f-hole"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    className={style.image}
                    src={head}
                    quality={95}
                    alt="violin's head"
                />
            </SwiperSlide>
        </Swiper>
    );
}
