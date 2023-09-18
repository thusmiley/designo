
const ProjectCard = ({ title, description, img }) => {
  return (
    <div className="md:flex xl:flex-col">
      <div className="md:w-[50%] xl:w-full">
        <img
          src={img}
          alt={title}
          className="w-full h-[320px] object-cover object-top rounded-t-[15px] md:h-[310px] md:rounded-none md:rounded-l-[15px] xl:h-[320px] xl:rounded-t-[15px] xl:rounded-none"
        />
      </div>

      <div className="py-8 px-[28px] bg-[#FDF3F0] rounded-b-[15px] cursor-default group duration-150 ease-in hover:bg-peach hover:text-white md:w-[50%] md:rounded-none md:rounded-r-[15px] md:flexCenter md:flex-col xl:w-full xl:rounded-b-[15px] xl:rounded-none">
        <h2 className="heading3 text-peach group-hover:text-white duration-150 ease-in">{title}</h2>
        <p className="description mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
