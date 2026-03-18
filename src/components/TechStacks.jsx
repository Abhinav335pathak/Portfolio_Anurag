import { logoCircle, check, bg_light_pattern } from "../assets";
import { techStackContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/CurveLines";
import { useEffect, useRef, useState } from "react";
import useGetSkills from "../data/useGetSkill";

const TechStacks = () => {

  const { skills, loading, error } = useGetSkills();

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section customPaddings="pt-10 pb-14 lg:py-16 xl:py-20" crosses>
      <div className="container lg:flex pl-40">
        <div className="max-w-[25rem]">
          <h2 className="h1 mb-4 md:mb-8">
            Our Toolbox for Your Product Excellence
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {techStackContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={ref}
          className={`lg:ml-auto xl:w-[38rem] mt-4 transition-opacity duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative left-1/2 mt-12 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logoCircle}
                    width={66}
                    height={66}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <ul>
              {!loading &&
                skills?.map((app, index) => (
                  <li
                    key={app._id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                    >
                      <img
                        className="m-auto"
                        width={34}
                        height={36}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStacks;