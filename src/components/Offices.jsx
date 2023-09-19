import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg";

const Offices = () => {
  return (
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
  );
};

export default Offices;
