
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./Heading";
import Section from "./Section";
import { useGetPreviousWorks } from "../data/useGetPrevious";

const PreviousWorks = () => {

  const { previousWorks, loading, error } = useGetPreviousWorks();
  
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

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <Section id="previousWorks" customPaddings="pt-5 lg:py-16 xl:py-12" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="Previous Works!"
        />

        <Slider {...settings}>
          {previousWorks.map((item) => (
            <div key={item.id} className="px-4">
              <div 
                className="block relative p-0.5 bg-no-repeat m-auto overflow-hidden bg-conic-gradient rounded-2xl"
                style={{
                  maxWidth: "280px", // Smaller width
                  backgroundColor: "rgb(21 19 29 / var(--tw-bg-opacity))",
                }}
              >
                <div
                  className="rounded-2xl"
                  style={{
                    backgroundColor: "rgb(21 19 29 / var(--tw-bg-opacity))",
                  }}
                >
                  <div className="p-5 text-center">
                
                    {/* Image container with 1:1 aspect ratio */}
                    <div 
                      className="mb-4 flex justify-center cursor-pointer"
                      onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                    >
                      <div className="relative w-full max-w-[180px] aspect-square rounded-lg overflow-hidden bg-gray-800">
                        <img
                          src={item.image.url}
                          alt={item.title}
                          className="absolute top-0 left-0 w-full h-full object-cover object-center"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/180x180?text=No+Image';
                            e.target.onerror = null;
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h5 
                      className="mb-2 text-lg font-bold text-white cursor-pointer hover:text-purple-400 transition-colors"
                      onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                    >
                      {item.title}
                    </h5>
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