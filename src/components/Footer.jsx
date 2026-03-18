import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { logo } from "../assets";
import { navigation } from "../constants";
import { websiteName } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white mt-6 lg:mt-0" style={{
      backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
    }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between justify-center items-center align-middle">
          <div className="hidden lg:block mb-6 md:mb-0">
            <a href="/" className="flex items-center justify-center">
              <div className="block w-[3.1rem] border-2 border-gray-200 rounded-full overflow-hidden">
                <img src={logo} width={50} height={50} alt={websiteName} className="w-full h-full object-cover" />
              </div>
              <div className="ml-3">
                <span className="text-white font-semibold text-xl lg:text-2xl xl:text-3xl">{websiteName}</span>
              </div>
            </a>
            {/* <div className="w-80 mt-4 ml-16">
              <p className="text-gray-500 text-sm">we bring ideas to life! We specialize in creating awesome apps and websites that make life easier and more fun. From designing cool interfaces to making sure everything works perfectly, we're here to help businesses and individuals shine online. Let's build something amazing together!</p>
              </div> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 justify-center">
            <div>
              <h2 className="mb-4 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.id} className="mb-2">
                    <a
                      href={item.url}
                      className="hover:underline text-sm lg:text-base">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/privacypolicy" className="hover:underline text-sm lg:text-base">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/terms" className="hover:underline text-sm lg:text-base">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/refundpolicy" className="hover:underline text-sm lg:text-base">
                    Refunds/Cancellations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
            <div className="flex mt-4 sm:justify-center sm:mt-0 justify-center">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {new Date().getFullYear()}{" "} All Rights Reserved.
              </span>
            </div>
            <div className="flex mt-4 sm:justify-center sm:mt-0 justify-center">
              <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                    >
                      <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;