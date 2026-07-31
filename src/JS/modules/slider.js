import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slider = () => {
  try {
    new Swiper(".test", {
      modules: [Navigation, Pagination, Mousewheel],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination.slider__swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1440: { slidesPerView: 2, spaceBetween: 20 },
      },
    });
  } catch (e) {}

  try {
    new Swiper(".swiper__client", {
      modules: [Navigation, Pagination, Mousewheel],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination.client__swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 4, spaceBetween: 40 },
        1400: { slidesPerView: 6, spaceBetween: 40 },
        1920: { slidesPerView: 8, spaceBetween: 40 },
      },
    });
  } catch (e) {}
};

export default slider;
