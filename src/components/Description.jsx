import React from "react";
import CartIcon from "./Icons/CartIcon";
import DownloadApk from "../assets/svg/DownloadApk";
import DescriptionWithMoreLink from "./DescriptionWithMoreLink";
import {
  phone_number,
} from "../constants";

const Description = ({ title, price, mrp, description, category, apk_link, onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <h2 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="pre">{category}</p>

      <DescriptionWithMoreLink classes={`lg:text-base text-sm text-n-3 line-clamp-4`} description={description} href={"#description"} />

      {/* <div className="price"> */}
        <div className="main-tag">
          {/* <h1 className="text-2xl font-bold text-n-1">₹{price}</h1> */}
          {/* <p style={{
            color: 'var(--orange)',
            backgroundColor: 'var(--pale-orange)',
            padding: '2px 8px',
            borderRadius: '5px',
            fontWeight: '700',
          }}
          >{parseInt(((mrp - price) / mrp) * 100)}% OFF</p> */}
        {/* </div> */}
        {/* <s>₹{mrp}</s> */}
        <br/>
      </div>
      <div className="buttons">
        <button
          className="add-to-cart text-base"
          onClick={() => {
            onSetOrderedQuant(onQuant);
            window.open(apk_link, "_blank");
          }}
        >
          <DownloadApk />
          Download APK
        </button>
        <button
          className="add-to-cart text-base"
          onClick={() => {
            window.fbq('track', 'Contact_SH');
            onSetOrderedQuant(onQuant);
            const currentUrl = encodeURIComponent(window.location.href);
            // const whatsappUrl = `https://wa.me/+91${phone_number}?text=Hello,%20I%20want%20to%20buy%20this%20product:%20${currentUrl}`;
            const whatsappUrl = `https://wa.me/+918433233662?text=Hello,%20I%20want%20to%20buy%20this%20product:%20${currentUrl}`;
            window.open(whatsappUrl, "_blank");
          }}
        >
          <CartIcon />Whatsapp Us
        </button>
      </div>
    </section >
  );
};

export default Description;
