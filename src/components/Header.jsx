import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navigation } from "../constants";
import { websiteName } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
        {/* <div className="flex items-center">
          <a className="block w-[3.1rem] border-2 border-gray-200 rounded-full overflow-hidden" href="/">
            <img src={logo} width={50} height={50} alt={websiteName} className="w-full h-full object-cover" />
          </a>
          <span className="text-white ml-3 font-semibold text-xl lg:text-2xl xl:text-3xl">{websiteName}</span>
        </div> */}
        <div className="flex items-center px-2 lg:px-7.5 xl:px-10 max-lg:py-2">

  <div className="flex items-center gap-3">
    
    <a href="/" className="block w-[3.5rem] md:w-[4rem] lg:w-[4.5rem]">
      <img
        src={logo}
        alt={websiteName}
        className="w-full h-auto object-contain"
      />
    </a>

    <span className="text-white font-semibold text-xl lg:text-2xl xl:text-3xl">
      {websiteName}
    </span>

  </div>

</div>
        
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[4.2rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
         {navigation.map((item) => (
  <NavLink
    key={item.id}
    to={item.url}
    onClick={handleClick}
    className={({ isActive }) =>
      `block relative font-code text-2xl uppercase transition-colors hover:text-color-1 
      ${item.onlyMobile ? "lg:hidden" : ""} 
      px-6 py-6 md:py-8 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12
      ${isActive ? "z-2 lg:text-n-1" : "lg:text-n-1/50 lg:hover:text-n-1"}`
    }
  >
    {item.title}
  </NavLink>
))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button> */}

        <Button className="hidden lg:flex" href="https://www.linkedin.com/in/anurag-shrivastav-b7a616327" target={"_blank"}>
          Linkedin
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
