import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./Slider.module.css";

const slides = [
  {
    title: "Лучшие туры по России",
    image: require("../assets/h1_hero.jpg"),
  },
  {
    title: "Лучшие отели по всей стране",
    image: require("..//assets/h2_hero.jpg"),
  },
  {
    title: "Лучшие достопримечательности",
    image: require("../assets/h3_hero.jpg"),
  },
];

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className={s.sliderArea}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={s.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={s.singleSlide}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div
                  className={`${s.caption} ${
                    index === activeIndex ? s.fadeIn : ""
                  }`}
                >
                  <h1>{slide.title}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };