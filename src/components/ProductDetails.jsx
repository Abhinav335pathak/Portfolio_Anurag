import { hero_banners, websiteName } from "../constants";
import Gallery from "./Gallery";
import MobileGallery from "./MobileGallery";
import Description from "./Description";
import React, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Section from "./Section";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";
import useGetProducts from "../data/useGetProduct";

const ProductDetails = () => {

  const { products, loading, error } = useGetProducts();
  const { id } = useParams();

  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    if (quant > 0) {
      setQuant(quant - 1);
    }
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };

  if (loading) {
    return (
      <div className="container">
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>Error loading products</p>
      </div>
    );
  }

  const item = products.find(
    (product) => product._id === id || product.id === id
  );

  if (!item) {
    return (
      <div className="container relative z-2">
        <section className="core">
          <div className="flex items-center justify-center h-full">
            <div>Product Not Found!</div>
          </div>
        </section>
      </div>
    );
  }

  // Extract image URLs from objects
  const imageUrls = item.images?.map((img) => img.url) || [];

  return (
    <div>
      <Helmet>
        <title>{item?.title || websiteName}</title>

        <meta
          name="description"
          content={
            item?.description
              ? item.description.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description
              : "Buy Now"
          }
        />

        <meta property="og:title" content={item?.title || websiteName} />

        <meta
          property="og:description"
          content={
            item?.description
              ? item.description.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description
              : "Buy Now"
          }
        />

        <meta
          property="og:image"
          content={item?.images?.[0]?.url || hero_banners[0]}
        />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="container relative z-2">

        <section className="core">
          <Gallery IMAGES={imageUrls} />
          <MobileGallery IMAGES={imageUrls} />

          <Description
            title={item.title}
            description={item.description}
            category={item.category}
            apk_link={item.apk_link}
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>

        <Section customPaddings="py-10 lg:py-16 xl:py-18" crosses>
          <div className="container">

            <span className="lg:text-2xl text-xl font-extrabold text-left">
              Tech Stack
            </span>

            <div className="flex flex-wrap gap-4 mt-4">

              {item.techstacks && item.techstacks.length > 0 ? (
                item.techstacks.map((stack) => (
                  <div
                    key={uuidv4()}
                    className="text-chip border rounded-full p-0.2 pb-1 bg-no-repeat bg-[length:100%_100%] bg-conic-gradient"
                    style={{
                      backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                      borderRadius: "0.5rem",
                    }}
                  >
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                        borderRadius: "0.5rem",
                      }}
                    >
                      <span className="lg:text-lg md:text-base text-sm">
                        {stack}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <span className="text-sm text-gray-400">
                  No tech stack listed
                </span>
              )}

            </div>
          </div>
        </Section>

        <Section customPaddings="py-10" crosses>
          <div id="description" className="container">

            <span className="lg:text-2xl text-xl font-extrabold text-left">
              Description
            </span>

            <div className="flex flex-wrap gap-4 mt-6">
              <p className="lg:text-base text-sm text-n-2">

                {item.description?.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}

              </p>
            </div>

          </div>
        </Section>

      </div>
    </div>
  );
};

export default ProductDetails;