"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import style from "./HomeSlider.module.css";
import bridge from "/slider/01.jpg";
import neck from "/slider/03.jpg";
import fhole from "/slider/02.jpg";
import head from "/slider/04.jpg";

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
                    src={bridge}
                    quality={95}
                    fill={true}
                    alt="violin's bridge"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={neck}
                    quality={95}
                    fill={true}
                    alt="violin's neck"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={fhole}
                    quality={95}
                    fill={true}
                    alt="violin's f-hole"
                />
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <Image
                    src={head}
                    quality={95}
                    fill={true}
                    alt="violin's head"
                />
            </SwiperSlide>
        </Swiper>
    );
}
