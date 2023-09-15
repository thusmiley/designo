import heroPhone from "../assets/home/desktop/image-hero-phone.png";
import arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import { serviceData } from "../constants";
import ServiceCard from "../components/ServiceCard";
import passionate from "../assets/home/desktop/passionate.svg";
import resourceful from "../assets/home/desktop/resourceful.svg";
import friendly from "../assets/home/desktop/friendly.svg";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <section>
      {/* hero */}
      <div className="home-hero-bg overflow-hidden mt-[96px] md:mt-[155px] md:w-container md:mx-auto md:rounded-[15px] ">
        <div className="w-container mx-auto text-white text-center pt-20 pb-[467px] flexCenter flex-col relative md:w-full md:pt-[60px] xl:py-[145px] xl:justify-start ">
          <div className="z-[2] max-w-[573px] xl:text-left ">
            <h1 className="heading1">Award-winning custom designs and digital branding solutions</h1>
            <p className="paragraph mt-[14px] mb-12 md:mb-10 md:mt-7 md:max-w-[445px] md:mx-auto">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our
              services.
            </p>
            <a href="/contact" className="cta cta-white">
              LEARN MORE
            </a>
          </div>
          <img src={heroPhone} alt="phone" className="object-cover w-[624px] h-[913px] absolute bottom-[-370px] " />
        </div>
      </div>

      {/* services */}
      <div className="w-container mx-auto space-y-6 my-[120px] cursor-pointer">
        {serviceData.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>

      {/* benefits */}
      <div className="w-container mx-auto space-y-20 md:space-y-8">
        <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12">
          <div className="w-[35%]">
            <img src={passionate} alt="passionate" className="object-contain w-[202px] h-[202px]" />
          </div>
          <div className="w-[65%]">
            <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4">PASSIONATE</h2>
            <p className="description">
              Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new
              solutions.
            </p>
          </div>
        </div>

        <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12">
          <div className="w-[35%]">
            <img src={resourceful} alt="resourceful" className="object-contain w-[202px] h-[202px]" />
          </div>
          <div className="w-[65%]">
            <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4">RESOURCEFUL</h2>
            <p className="description">
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that
              fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div className="flexCenter flex-col text-center md:flex-row md:text-left md:space-x-12">
          <div className="w-[35%]">
            <img src={friendly} alt="friendly" className="object-contain w-[202px] h-[202px]" />
          </div>
          <div className="w-[65%]">
            <h2 className="heading3 mt-12 mb-8 md:mt-0 md:mb-4">FRIENDLY</h2>
            <p className="description">
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company
              can provide.
            </p>
          </div>
        </div>
      </div>

      {/* CTA  */}
      <CTA />
    </section>
  );
};

export default Home;
