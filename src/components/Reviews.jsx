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
      
      {/* 🔥 Wider container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-3">
            It's not just us.
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Here's what others have to say about us.
          </p>
        </div>

        {/* 🔥 Grid (bigger cards on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
  
  {reviews
    .slice(0, isMobile ? 3 : undefined)
    .map((item) => (
      
      <div
        key={item._id}
        className="relative group rounded-xl overflow-hidden"
      >
        
        {/* Glow (unchanged, just softer) */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-10 blur-sm group-hover:opacity-20 transition duration-300"></div>

        {/* Card */}
        <div className="relative  bg-conic-gradient rounded-xl p-0.25 
                        border border-gray-400/10">  {/* ✅ lighter + thinner feel */}
          
          <img
            src={item.image?.url}
            alt="Review"
            className="w-full h-52 sm:h-56 md:h-60 lg:h-60 object-cover rounded-lg"
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