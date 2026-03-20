import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { previousWorks } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";
import { useGetPreviousWorks } from "../data/useGetPrevious";

const PreviousWorks = () => {

const { previousWorks, loading, error } = useGetPreviousWorks();
  
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1200,
  //   pauseOnHover: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const total = previousWorks?.length || 0;
  const settings = {
  dots: false,
  infinite: total > 4,
  speed: 1000,
  slidesToShow: total > 0 ? Math.min(4, total) : 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: total > 1 ? Math.min(2, total) : 1,
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
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="Previous Works!"
        />

        <Slider {...settings}>
          {previousWorks.map((item) => (
            <div key={item.id} className="px-4">
              <div className="block relative p-0.5 bg-no-repeat m-auto bg-[length:100%_100%] max-w-[28rem] md:max-w-[24rem] overflow-hidden bg-conic-gradient" style={{
                backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                borderRadius: "1rem",
              }}>
                <div
                  style={{
                    backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                    borderRadius: "1rem",
                  }}
                >
                  <div className="mb-2 p-4 text-center">
                    <a href={item.link} target={'_blank'}>
                      <div className="mb-6 flex justify-center">
                      <img
                        src={item.image.url}
                        alt={item.title}
                        className="w-32 rounded shadow-lg dark:shadow-black/20" />
                    </div>
                      <h5 className="mb-2 text-lg font-bold">{item.title}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </Section>
  );
};

export default PreviousWorks;