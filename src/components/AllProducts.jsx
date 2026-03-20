import Heading from "./Heading";
import Section from "./Section";
import Carousel from "./Carousel";
import Button from "./Button";
import useGetProducts from "../data/useGetProduct";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products = [], loading, error } = useGetProducts();

  if (loading) {
    return (
      <Section id="products">
        <div className="container text-white text-center">
          Loading products...
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="products">
        <div className="container text-red-500 text-center">
          Failed to load products
        </div>
      </Section>
    );
  }

  return (
    <Section id="products" customPaddings="py-8 lg:py-14 xl:py-16">
      <div className="container relative z-2">

        {/* HEADING */}
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="All Products"
        />

        {/* GRID */}
        <div className="flex flex-wrap gap-8 justify-center">

          {products.map((item) => {
            const images =
              item.featured_images > 0
                ? item.images?.slice(0, item.featured_images)
                : item.images;

            return (
              <div
                key={item._id}
                className="relative w-full sm:w-[22rem] md:w-[24rem] p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-white/5"
              >
                <div className="bg-[rgb(21,19,29)] rounded-xl overflow-hidden">

                  {/* IMAGE CAROUSEL */}
                  <div className="h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden">
                    <Carousel autoSlide autoSlideInterval={4000}>
                      {images?.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                        />
                      ))}
                    </Carousel>
                  </div>

                  {/* PRODUCT TYPE BADGE */}
                  {item.type && (
                    <span className="absolute top-0 right-0 w-28 translate-y-4 translate-x-6 rotate-45 bg-red-500 text-center text-sm text-white shadow-md">
                      {item.type}
                    </span>
                  )}

                  {/* DETAILS */}
                  <div className="px-5 py-4">
                    <h5 className="text-lg font-semibold text-white line-clamp-1">
                      {item.title}
                    </h5>

                    <div className="mt-4 flex justify-between items-center">
                      <Link to={`/product/${item._id || item.id}`}>
                        <Button className="flex items-center" white>
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </Section>
  );
};

export default AllProducts;