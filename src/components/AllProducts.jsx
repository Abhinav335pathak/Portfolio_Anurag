import { products } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/GradientLight";
import ClipPath from "../assets/svg/ClipPath";
import Carousel from "./Carousel";
import Button from "./Button";
import useGetProducts from "../data/useGetProduct";

const AllProducts = () => {
  const { products = [], loading, error } = useGetProducts();

  if (loading) {
    return (
      <Section id="products">
        <div className="container text-white text-center">Loading products...</div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="products">
        <div className="container text-red-500 text-center">Failed to load products</div>
      </Section>
    );
  }

  return (
    <Section id="products" customPaddings="py-8 lg:py-14 xl:py-16">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="All Products"
        />

        <div className="flex flex-wrap gap-10 justify-center">
          {products.map((item) => {
            const images =
              item.featured_images > 0
                ? item.images.slice(0, item.featured_images)
                : item.images;

            return (
              <div
                key={item._id}
                className="block relative p-0.5 md:max-w-[24rem] overflow-hidden"
                style={{
                  backgroundColor: "rgb(21 19 29)",
                  borderRadius: "1rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgb(21 19 29)",
                    borderRadius: "1rem",
                  }}
                >
                  {/* IMAGE CAROUSEL */}
                  <div className="rounded-t-xl">
                    <Carousel autoSlide autoSlideInterval={4000}>
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          alt={item.title}
                          className="w-full rounded-t-xl object-cover h-[220px]"
                        />
                      ))}
                    </Carousel>
                  </div>

                  {/* PRODUCT TYPE */}
                  <span className="absolute top-0 right-0 w-28 translate-y-4 translate-x-6 rotate-45 bg-red-500 text-center text-sm text-white">
                    {item.type}
                  </span>

                  {/* PRODUCT DETAILS */}
                  <div className="mt-4 px-5 pb-5">
                    <h5 className="text-lg font-semibold tracking-tight text-white">
                      {item.title}
                    </h5>

                    <div className="mt-5 flex items-center justify-between">
                     

                      <Button
                        className="flex items-center"
                        href={`/product/${item._id}`}
                        white
                      >
                        View
                      </Button>
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