import { webProjects } from "../constants";
import ProjectCard from "../components/ProjectCard";

import appMobile from "../assets/home/mobile/image-app-design.jpg";
import appTablet from "../assets/home/tablet/image-app-design.jpg";
import appDesktop from "../assets/home/desktop/image-app-design.jpg";
import graphicMobile from "../assets/home/mobile/image-graphic-design.jpg";
import graphicTablet from "../assets/home/tablet/image-graphic-design.jpg";
import graphicDesktop from "../assets/home/desktop/image-graphic-design.jpg";

const Web = () => {
  return (
    <div>
      {/* hero */}
      <section className="service-hero-bg relative overflow-hidden mt-[96px] md:mt-0 md:w-container md:mx-auto md:rounded-[15px]">
        <div className="w-container mx-auto text-white text-center py-[105px] md:py-[64px]">
          <h1 className="heading1">Web Design</h1>
          <p className="paragraph mt-[14px] md:mt-7 md:max-w-[445px] md:mx-auto">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
      </section>

      {/* projects */}
      <section className="py-[96px] md:py-[120px] service-projects-bg xl:pt-[250px] xl:mt-[-100px] xl:pb-[160px]">
        <div className="w-container mx-auto text-center space-y-10 md:space-y-8 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-[30px] xl:space-y-0">
          {webProjects.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* next services */}
      <section className="w-container mx-auto space-y-6 mb-[96px] md:mb-[120px] xl:mb-[160px] xl:flexBetween xl:space-y-0 xl:space-x-[30px]">
        {/* app design */}
        <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px] xl:py-[107px] xl:w-full">
          <picture className="w-full h-full absolute mix-blend-overlay hover:mix-blend-soft-light">
            <source media="(max-width: 680px)" srcSet={appMobile} />
            <source media="(max-width: 1200px)" srcSet={appTablet} />
            <source media="(min-width: 1201px)" srcSet={appDesktop} />
            <img src={appMobile} alt="laptop" className="w-full h-full object-cover rounded-[15px]" />
          </picture>
          <h2 className="heading2">APP DESIGN</h2>
          <a href="/app-design" className="flexCenter mt-3 text-[15px] tracking-[5px] arrow z-[2] md:mt-6">
            VIEW PROJECTS
          </a>
        </div>

        {/* graphic design */}
        <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px] xl:py-[107px] xl:w-full">
          <picture className="w-full h-full absolute mix-blend-overlay hover:mix-blend-soft-light">
            <source media="(max-width: 680px)" srcSet={graphicMobile} />
            <source media="(max-width: 1200px)" srcSet={graphicTablet} />
            <source media="(min-width: 1201px)" srcSet={graphicDesktop} />
            <img src={graphicMobile} alt="laptop" className="w-full h-full object-cover rounded-[15px]" />
          </picture>
          <h2 className="heading2">GRAPHIC DESIGN</h2>
          <a href="/graphic" className="flexCenter mt-3 text-[15px] tracking-[5px] arrow z-[2] md:mt-6">
            VIEW PROJECTS
          </a>
        </div>
      </section>
    </div>
  );
};

export default Web;
