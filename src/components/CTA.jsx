import threecircles from "../assets/shared/desktop/bg-pattern-call-to-action.svg";

const CTA = () => {
  return (
    <div className="w-container mx-auto mt-[121px] relative bg-peach text-white text-center rounded-[15px] mb-[-190px] pt-[64px] pb-[120px] px-6 md:mt-[67px] md:mb-[-90px] md:py-[57px] md:pb-[110px]">
      <img src={threecircles} alt="pattern" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay" />
      <div>
        <h2 className="heading1 mt-[6px] mb-8 md:text-[40px] md:leading-[40px] md:max-w-[335px] md:mx-auto">Let’s talk about your project</h2>
        <p className="paragraph mb-[50px] md:max-w-[445px] md:mx-auto">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <a href="/contact" className="text-darkGrey cta cta-white z-[2] absolute left-0 right-0 mx-auto bottom-[70px]">
        GET IN TOUCH
      </a>
    </div>
  );
};

export default CTA;
