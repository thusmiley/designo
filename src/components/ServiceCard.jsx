import arrow from "../assets/shared/desktop/icon-right-arrow.svg";

const ServiceCard = ({ title, link, imgMobile, imgTablet, imgDesktop }) => {
  return (
    <div className="py-[90px] flexCenter flex-col rounded-[15px] relative bg-black/60 text-white hover:bg-peach md:py-[53px]">
      <picture className="w-full h-full absolute mix-blend-overlay hover:mix-blend-soft-light">
        <source media="(max-width: 680px)" srcSet={imgMobile} />
        <source media="(max-width: 1200px)" srcSet={imgTablet} />
        <source media="(min-width: 1201px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="laptop" className="w-full h-full object-cover rounded-[15px]" />
      </picture>
      <h2 className="heading2">{title}</h2>
      <a href={link} className="flexCenter mt-3 text-[15px] tracking-[5px] after:content-[url('./src/assets/shared/desktop/icon-right-arrow.svg')] after:ml-4 z-[2] md:mt-6">
        VIEW PROJECTS
      </a>
    </div>
  );
};

export default ServiceCard;
