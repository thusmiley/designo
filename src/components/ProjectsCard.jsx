import arrow from "../assets/shared/desktop/icon-right-arrow.svg";

const ProjectsCard = ({ title, link, imgMobile, imgTablet, imgDesktop }) => {
  return (
    <div className={`bg-[url('${imgMobile}')] py-[90px] flexCenter flex-col`}>
      <h2 className="heading2">{title}</h2>
      <a href={link} className="flexCenter mt-3 text-[15px] tracking-[5px]">
        VIEW PROJECTS <img src={arrow} alt="arrow" className="ml-4"/>
      </a>
    </div>
  );
};

export default ProjectsCard;
