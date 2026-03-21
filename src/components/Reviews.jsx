
import React from "react";
import Section from "./Section";
import { useMediaQuery } from "react-responsive";
import { useGetReview } from "../data/usegetReview";

const Reviews = () => {
  const { reviews = [], loading, error } = useGetReview();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <Section id="previousWorks" customPaddings="py-10 lg:py-14 xl:py-16" crosses>
      
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-3">
            It's not just us.
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Here's what others have to say about us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          
          {reviews
            .slice(0, isMobile ? 3 : undefined)
            .map((item) => (
              
              <div key={item._id} className="relative group rounded-xl overflow-hidden">
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-10 blur-sm group-hover:opacity-20 transition duration-300"></div>

                <div className="relative bg-conic-gradient rounded-xl p-1 border border-gray-400/10">
                  
                  {/* Responsive container that maintains 830:250 ratio (3.32:1 aspect ratio) */}
                  <div className="relative w-full aspect-[850/250] overflow-hidden rounded-lg">
                    <img
                      src={item.image?.url}
                      alt="Review"
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/830x250?text=Image+Not+Available';
                        e.target.onerror = null;
                      }}
                    />
                  </div>

                  {item.caption && (
                    <div className="mt-3 text-center text-gray-300 text-sm">
                      {item.caption}
                    </div>
                  )}
                  
                </div>
              </div>
            ))}
        </div> 

      </div>

    </Section>
  );
};

export default Reviews;