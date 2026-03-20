import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";
import { useMediaQuery } from 'react-responsive';
import {useGetReview } from "../data/usegetReview";

const Reviews = () => {

 const { reviews, loading, error } = useGetReview();


  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="preivousWorks" customPaddings="pt-5 lg:py-16 xl:py-12" crosses>

      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">

            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
         {reviews.slice(0, isMobile ? 3 : undefined).map((item) => (
  <div key={item._id} className="relative group">
    <div className="absolute transition rounded-lg opacity-25 -inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

    <div className="relative space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
      <img
        className="rounded w-full m-4 h-60 object-cover"
        src={item.image?.url}
        alt="Review"
      />
    </div>
  </div>
))}
        </div>

      </div>

    </Section>
  );
};

export default Reviews;
