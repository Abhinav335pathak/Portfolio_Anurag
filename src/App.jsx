import ButtonGradient from "./assets/svg/ButtonGradient";
import TechStacks from "./components/TechStacks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import ContactUsPage from "./components/ContactUsPage";
import ProductDetails from "./components/ProductDetails";
import PreviousWorks from "./components/PreviousWorks";
import AllProducts from "./components/AllProducts";
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { hero_banners, websiteName } from "./constants";
import NotFoundPage from './components/NotFoundPage'; // Import the NotFoundPage component
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import RefundPolicy from "./components/RefundPolicy";
// import ReactGA from 'react-ga4';
import { useEffect } from "react";

// ReactGA.initialize('G-YV809XJN6B');

const App = () => {
  // useEffect(() => {
  //   console.log(window.location.pathname + window.location.search);
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  // }, []);

  return (
    <>
      <HelmetProvider>

        <div className=" w-screen pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <div>
                  <Hero />
                  {/* <Services /> */}
                  <TechStacks />
                  <Products />
                  <PreviousWorks />
                  <Reviews />
                  <ContactUsPage crosses={`lg:py-32 xl:py-40`} />
                </div>
              </>
            } />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contactUs" element={<ContactUsPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>

          <Footer />

          <ButtonGradient />

        </div>
      </HelmetProvider>
    </>
  );
};

export default App;
