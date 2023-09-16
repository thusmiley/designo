import heroPhone from "../assets/home/desktop/image-hero-phone.png";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import webMobile from "../assets/home/mobile/image-web-design.jpg";
import webTablet from "../assets/home/tablet/image-web-design.jpg";
import webDesktop from "../assets/home/desktop/image-web-design-large.jpg";
import appMobile from "../assets/home/mobile/image-app-design.jpg";
import appTablet from "../assets/home/tablet/image-app-design.jpg";
import appDesktop from "../assets/home/desktop/image-app-design.jpg";
import graphicMobile from "../assets/home/mobile/image-graphic-design.jpg";
import graphicTablet from "../assets/home/tablet/image-graphic-design.jpg";
import graphicDesktop from "../assets/home/desktop/image-graphic-design.jpg";
import passionate from "../assets/home/desktop/passionate.svg";
import resourceful from "../assets/home/desktop/resourceful.svg";
import friendly from "../assets/home/desktop/friendly.svg";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <section>
      {/* hero */}
      <div className="home-hero-bg relative overflow-hidden mt-[96px] md:mt-0 md:w-container md:mx-auto md:rounded-[15px] ">
        <div className="w-container mx-auto text-white text-center pt-20 pb-[467px] flexCenter flex-col md:w-full md:pt-[60px] xl:pb-0 xl:pt-[-200px] xl:flex-row xl:pl-[95px] xl:justify-start xl:overflow-hidden">
          <div className="z-[2] max-w-[573px] xl:text-left xl:w-[70%] xl:mt-[-50px]">
            <h1 className="heading1">Award-winning custom designs and digital branding solutions</h1>
            <p className="paragraph mt-[14px] mb-12 md:mb-[58px] md:mt-7 md:max-w-[445px] md:mx-auto xl:ml-0">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our
              services.
            </p>
            <a href="/contact" className="cta cta-white">
              LEARN MORE
            </a>
          </div>
          <div className="absolute bottom-[-370px] xl:static xl:mb-[-220px] xl:mt-[-100px]">
            <img src={heroPhone} alt="phone" className="object-cover w-[624px] h-[913px] " />
          </div>
        </div>
      </div>

      {/* services */}
      <div className="w-container mx-auto space-y-6 my-[120px] cursor-pointer xl:grid xl:grid-rows-2 xl:grid-cols-2 xl:gap-[30px] xl:space-y-0 xl:my-[160px]">
        <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px] xl:py-[107px] xl:row-span-2">
          <picture className="w-full h-full absolute mix-blend-overlay hover:mix-blend-soft-light">
            <source media="(max-width: 680px)" srcSet={webMobile} />
            <source media="(max-width: 1200px)" srcSet={webTablet} />
            <source media="(min-width: 1201px)" srcSet={webDesktop} />
            <img src={webMobile} alt="laptop" className="w-full h-full object-cover rounded-[15px]" />
          </picture>
          <h2 className="heading2">WEB DESIGN</h2>
          <a href="/web" className="flexCenter mt-3 text-[15px] tracking-[5px] arrow z-[2] md:mt-6">
            VIEW PROJECTS
          </a>
        </div>

        <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px] xl:py-[107px]">
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

        <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px] xl:py-[107px]">
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
      </div>

      {/* benefits */}
      <div className="home-benefits-bg xl:pb-[320px] mb-[121px] md:mb-[67px] xl:mb-[-170px]">
        <div className="w-container mx-auto space-y-20 md:space-y-8 xl:flexBetween xl:space-y-0 xl:space-x-[30px]">
          <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12 xl:flex-col xl:text-center xl:space-x-0">
            <div className="md:w-[35%] xl:w-full">
              <img src={passionate} alt="passionate" className="object-contain w-[202px] h-[202px] xl:mx-auto" />
            </div>
            <div className="md:w-[65%] xl:w-full">
              <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4 xl:mt-12">PASSIONATE</h2>
              <p className="description">
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new
                solutions.
              </p>
            </div>
          </div>

          <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12 xl:flex-col xl:text-center xl:space-x-0">
            <div className="md:w-[35%] xl:w-full">
              <img src={resourceful} alt="resourceful" className="object-contain w-[202px] h-[202px] xl:mx-auto" />
            </div>
            <div className="md:w-[65%] xl:w-full">
              <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4 xl:mt-12">RESOURCEFUL</h2>
              <p className="description">
                Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that
                fulfill our clients’ needs.
              </p>
            </div>
          </div>

          <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12 xl:flex-col xl:text-center xl:space-x-0">
            <div className="md:w-[35%] xl:w-full">
              <img src={friendly} alt="friendly" className="object-contain w-[202px] h-[202px] xl:mx-auto" />
            </div>
            <div className="md:w-[65%] xl:w-full">
              <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4 xl:mt-12">FRIENDLY</h2>
              <p className="description">
                We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a
                company can provide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA  */}
      <CTA />
    </section>
  );
};

export default Home;
