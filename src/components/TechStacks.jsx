import { logoCircle, check } from "../assets";
import { techStackContent } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/CurveLines";
import { useEffect, useRef, useState } from "react";
import useGetSkills from "../data/useGetSkill";

const TechStacks = () => {
  const { skills = [], loading } = useGetSkills();

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section customPaddings="py-16 lg:py-20" crosses>
      
      {/* MAIN CONTAINER */}
      <div className="container grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg ml-0 md:ml-24 lg:ml-24">
          <h2 className="h1 mb-6">
            Our Toolbox for Your Product Excellence
          </h2>

          <ul className="space-y-4">
            {techStackContent.map((item) => (
              <li key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={20} height={20} alt="check" />
                  <h6 className="body-2 ml-4">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-2 text-n-4 ml-6">
                    {item.text}
                  </p>
                )}
                <br/>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CIRCLE */}
        <div
          ref={ref}
          className={`flex justify-center items-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative flex w-[20rem] md:w-[24rem] aspect-square border border-n-6 rounded-full">

            {/* INNER CIRCLE */}
            <div className="flex w-56 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[5rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={logoCircle} width={60} height={60} alt="logo" />
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <ul>
              {!loading &&
                skills.map((app, index) => (
                  <li
                    key={app._id}
                    className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                    style={{
                      transform: `rotate(${index * (360 / skills.length)}deg)`
                    }}
                  >
                    <div
                      className="relative -top-[1.6rem] flex w-[3rem] h-[3rem] bg-n-7 border border-white/10 rounded-xl"
                      style={{
                        transform: `rotate(-${index * (360 / skills.length)}deg)`
                      }}
                    >
                      <img
                        className="m-auto"
                        width={28}
                        height={28}
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