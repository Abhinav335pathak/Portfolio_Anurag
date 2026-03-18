import useGetProducts from "../data/useGetProduct";
import Heading from "./Heading";
import Section from "./Section";
import Carousel from "./Carousel";
import Button from "./Button";

const Products = () => {

  const { products, loading, error } = useGetProducts();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <Section id="readyToUse" customPaddings="py-10 lg:py-16 xl:py-18" crosses>
        <div className="container relative z-2">
          <div className="text-center py-10 text-red-500">
            <p className="text-lg font-semibold">Unable to load projects</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="readyToUse" customPaddings="py-10 lg:py-16 xl:py-18" crosses>
      <div className="container relative z-2">

        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="Ready-to-Use Solutions"
        />

        <div className="flex flex-wrap gap-10 justify-center">

          {products.slice(0, 6).map((item, index) => {

            // decide how many images to show
            const images =
              item.featured_images > 0
                ? item.images?.slice(0, item.featured_images)
                : item.images;

            return (
              <div
                key={item._id || item.id || index}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] overflow-hidden bg-conic-gradient"
                style={{
                  backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                  borderRadius: "1rem",
                }}
              >

                <div
                  style={{
                    backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                    borderRadius: "1rem",
                  }}
                >

                  {/* Image Carousel */}
                  <div className="rounded-t-xl">

                    <Carousel autoSlide={true} autoSlideInterval={4000}>

                      {images?.map((image, i) => (
                        <img
                          key={image._id || i}
                          src={image.url}
                          alt={`Product ${item.title} ${i + 1}`}
                          className="w-full rounded-t-xl object-cover"
                          style={{ objectFit: "fill" }}
                          loading="lazy"
                        />
                      ))}

                    </Carousel>

                  </div>

                  {/* Product Type Badge */}
                  {item.type && (
                    <span className="absolute top-0 right-0 w-28 translate-y-4 translate-x-6 rotate-45 bg-red-500 text-center text-sm text-white">
                      {item.type}
                    </span>
                  )}

                  {/* Product Info */}
                  <div className="mt-4 px-5 pb-5">

                    <h5 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h5>

                    <div className="mt-5 flex items-center justify-between">

                      <Button
                        className="flex items-center"
                        href={`/product/${item._id || item.id}`}
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

        {/* See More Button */}
        <div className="w-full flex justify-center mt-10">
          <Button className="w-full max-w-xs text-white" href="/products">
            See More
          </Button>
        </div>

      </div>
    </Section>
  );
};

export default Products;