import heroMobile from "../assets/about/mobile/image-about-hero.jpg";
import heroTablet from "../assets/about/tablet/image-about-hero.jpg";
import heroDesktop from "../assets/about/desktop/image-about-hero.jpg";
import worldClassMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import worldClassTablet from "../assets/about/tablet/image-world-class-talent.jpg";
import worldClassDesktop from "../assets/about/desktop/image-world-class-talent.jpg";
import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg";
import realDealMobile from "../assets/about/mobile/image-real-deal.jpg";
import realDealTablet from "../assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "../assets/about/desktop/image-real-deal.jpg";
const About = () => {
  return (
    <div>
      {/* hero */}
      <section className="overflow-hidden mt-[96px] md:mt-0 md:w-container md:mx-auto md:rounded-[15px]">
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <picture className="xl:w-[40%]">
            <source media="(max-width: 680px)" srcset={heroMobile} />
            <source media="(max-width: 1200px)" srcset={heroTablet} />
            <source media="(min-width: 1201px)" srcset={heroDesktop} />
            <img src={heroMobile} alt="team image" className="w-full h-[320px] object-cover object-center xl:h-[480px]" />
          </picture>
          <div className="about-hero-bg  text-white text-center py-[105px] md:py-[64px] xl:text-left xl:h-[480px] xl:pl-[95px] xl:py-[135px] xl:w-[60%]">
            <h1 className="heading1">About Us</h1>
            <p className="paragraph mt-[14px] w-container mx-auto md:mt-7 md:max-w-[573px] md:mx-auto xl:ml-0 xl:max-w-[458px]">
              Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to
              craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </section>

      {/* world-class talent */}
      <section className="md:pt-[120px] xl:pt-[250px] xl:mt-[-100px] service-projects-bg">
        <div className="md:w-container md:mx-auto xl:flex">
          <picture className="">
            <source media="(max-width: 680px)" srcset={worldClassMobile} />
            <source media="(max-width: 1200px)" srcset={worldClassTablet} />
            <source media="(min-width: 1201px)" srcset={worldClassDesktop} />
            <img
              src={worldClassMobile}
              alt="team image"
              className="w-full h-[320px] object-cover object-center md:rounded-t-[15px] xl:h-[640px] xl:rounded-none xl:rounded-l-[15px]"
            />
          </picture>
          <div className="about-world-class-bg  text-darkGrey text-center py-[105px] md:py-[68px] md:rounded-b-[15px] xl:rounded-none xl:rounded-r-[15px] xl:py-[154px] xl:text-left xl:px-[94px]">
            <h2 className="heading1 text-peach">World-class talent</h2>
            <p className="paragraph mt-[14px] w-container mx-auto md:mt-7 md:max-w-[573px] md:mx-auto xl:ml-0 xl:w-auto">
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market.
              We are constantly updating our skills in a myriad of platforms.
              <br />
              <br /> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship,
              service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>

      {/* locations */}
      <section className="my-[120px] xl:my-[160px] home-benefits-bg xl:pb-[320px] xl:mb-[-150px]">
        <div className="w-container mx-auto text-center space-y-[64px] xl:flexBetween xl:space-y-0">
          <div className="">
            <img src={canada} alt="canada" className="w-full h-[202px] object-contain object-center" />
            <h2 className="heading3 mt-12 mb-[50px]">CANADA</h2>
            <a href="/locations" className="cta cta-peach text-white">
              SEE LOCATION
            </a>
          </div>
          <div>
            <img src={australia} alt="australia" className="w-full h-[202px] object-contain object-center" />
            <h2 className="heading3 mt-12 mb-[50px]">AUSTRALIA</h2>
            <a href="/locations" className="cta cta-peach text-white">
              SEE LOCATION
            </a>
          </div>
          <div>
            <img src={uk} alt="uk" className="w-full h-[202px] object-contain object-center" />
            <h2 className="heading3 mt-12 mb-[50px]">UNITED KINGDOM</h2>
            <a href="/locations" className="cta cta-peach text-white">
              SEE LOCATION
            </a>
          </div>
        </div>
      </section>

      {/* the real deal */}
      <section className="mb-[120px]">
        <div className="md:w-container md:mx-auto xl:flex xl:flex-row-reverse">
          <picture>
            <source media="(max-width: 680px)" srcset={realDealMobile} />
            <source media="(max-width: 1200px)" srcset={realDealTablet} />
            <source media="(min-width: 1201px)" srcset={realDealDesktop} />
            <img
              src={realDealMobile}
              alt="team image"
              className="w-full h-[320px] object-cover object-center md:rounded-t-[15px] xl:h-[640px] xl:rounded-none xl:rounded-r-[15px]"
            />
          </picture>
          <div className="about-world-class-bg  text-darkGrey text-center py-[105px] md:py-[68px] md:rounded-b-[15px] xl:rounded-none xl:rounded-l-[15px] xl:py-[154px] xl:text-left xl:px-[94px]">
            <h2 className="heading1 text-peach">The real deal</h2>
            <p className="paragraph mt-[14px] w-container mx-auto md:mt-7 md:max-w-[573px] md:mx-auto xl:ml-0">
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we
              strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real
              results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
