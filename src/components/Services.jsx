import { services } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/GradientLight";
import ClipPath from "../assets/svg/ClipPath";

const Services = () => {
  return (
    <Section id="services" customPaddings='pt-6 pb-12 lg:py-16 xl:pt-18 xl:pb-20' >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl font-extrabold text-white"
          title="Services We Provide"
        />

        <div className="flex flex-wrap gap-10 justify-center items-center">
          {services.map((item) => (
            <div className="group relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:bg-[hoverImageURL] bg-conic-gradient"
              style={{
                backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                borderRadius: '1.5rem',
              }}
              key={item.id}>
              <div style={{
                backgroundColor: `rgb(21 19 29 / var(--tw-bg-opacity))`,
                borderRadius: '1.5rem 6rem 1.5rem 1.5rem',
              }}>
                <a href="#readyToUse" className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none group-hover:pointer-events-auto">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img src={item.iconUrl} width={60} height={60} alt={item.title} />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore Projects
                    </p>
                    <Arrow />
                  </div>
                </a>

                {item.light && <GradientLight />}

                <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                    {item.imageUrl && (
                      <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
