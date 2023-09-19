import caMobile from "../assets/locations/desktop/image-map-canada.png";
import caTablet from "../assets/locations/tablet/image-map-canada.png";
import auMobile from "../assets/locations/desktop/image-map-australia.png";
import auTablet from "../assets/locations/tablet/image-map-australia.png";
import ukMobile from "../assets/locations/desktop/image-map-united-kingdom.png";
import ukTablet from "../assets/locations/tablet/image-map-uk.png";

const Locations = () => {
  return (
    <div>
      {/* hero */}
      <section className="overflow-hidden mt-[96px] mb-[120px] space-y-10 md:mt-0 md:w-container md:mx-auto md:space-y-[120px] xl:mb-[160px]">
        {/* canada */}
        <div className="md:space-y-[31px] xl:flex xl:flex-row-reverse xl:justify-between xl:space-y-0">
          <picture className="xl:w-[35%]">
            <source media="(max-width: 680px)" srcset={caMobile} />
            <source media="(max-width: 1200px)" srcset={caTablet} />
            <source media="(min-width: 1201px)" srcset={caMobile} />
            <img src={caMobile} alt="canada office" className="w-full h-[320px] object-cover object-center md:h-[326px] md:rounded-[15px]" />
          </picture>
          <div className="about-world-class-bg  text-darkGrey text-center py-[105px] md:h-[326px] md:text-left md:rounded-[15px] md:py-[88px] md:pl-[75px] xl:w-[65%] xl:text-left xl:px-[94px] xl:mr-[30px]">
            <h1 className="heading1 text-peach">Canada</h1>
            <div className="mt-6 w-container mx-auto space-y-6 md:mt-7 md:space-y-0 md:space-x-[120px] md:flex md:ml-0 xl:space-x-[60px]">
              <p className="paragraph">
                <span className="font-bold">Designo Central Office</span> <br />
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </p>
              <p>
                <span className="font-bold">Contact</span>
                <br />P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            </div>
          </div>
        </div>

        {/* australia */}
        <div className="md:space-y-[31px] xl:flex xl:flex-row xl:justify-between xl:space-y-0">
          <picture className="xl:w-[35%]">
            <source media="(max-width: 680px)" srcset={auMobile} />
            <source media="(max-width: 1200px)" srcset={auTablet} />
            <source media="(min-width: 1201px)" srcset={auMobile} />
            <img src={auMobile} alt="australia office" className="w-full h-[320px] object-cover object-center md:h-[326px] md:rounded-[15px]" />
          </picture>
          <div className="about-world-class-bg  text-darkGrey text-center py-[105px] md:h-[326px] md:text-left md:rounded-[15px] md:py-[88px] md:pl-[75px] xl:w-[65%] xl:text-left xl:px-[94px] xl:ml-[30px]">
            <h1 className="heading1 text-peach">Australia</h1>
            <div className="mt-6 w-container mx-auto space-y-6 md:mt-7 md:space-y-0 md:space-x-[120px] md:flex md:ml-0 xl:ml-0 xl:space-x-[60px]">
              <p className="paragraph">
                <span className="font-bold">Designo AU Office</span> <br />
                19 Balonne Street <br />
                New South Wales 2443
              </p>
              <p>
                <span className="font-bold">Contact</span>
                <br />P : (02) 6720 9092 <br />M : contact@designo.au
              </p>
            </div>
          </div>
        </div>

        {/* uk  */}
        <div className="md:space-y-[31px] xl:flex xl:flex-row-reverse xl:justify-between xl:space-y-0">
          <picture className="xl:w-[35%]">
            <source media="(max-width: 680px)" srcset={ukMobile} />
            <source media="(max-width: 1200px)" srcset={ukTablet} />
            <source media="(min-width: 1201px)" srcset={ukMobile} />
            <img src={ukMobile} alt="uk office" className="w-full h-[320px] object-cover object-center md:h-[326px] md:rounded-[15px]" />
          </picture>
          <div className="about-world-class-bg  text-darkGrey text-center py-[105px] md:h-[326px] md:text-left md:rounded-[15px] md:py-[88px] md:pl-[75px] xl:w-[65%] xl:text-left xl:px-[94px] xl:mr-[30px]">
            <h1 className="heading1 text-peach">United Kingdom</h1>
            <div className="mt-6 w-container mx-auto space-y-6 md:mt-7 md:space-y-0 md:space-x-[120px] md:flex md:ml-0 xl:space-x-[60px]">
              <p className="paragraph">
                <span className="font-bold">Designo UK Office</span> <br />
                13 Colorado Way <br />
                Rhyd-y-fro SA8 9GA
              </p>
              <p>
                <span className="font-bold">Contact</span>
                <br />P : 078 3115 1400 <br />M : contact@designo.uk
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
