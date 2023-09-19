import Offices from "../components/Offices";
import error from "../assets/contact/desktop/icon-error.svg";

const Contact = () => {
  return (
    <div>
      <section className="contact-hero-bg mt-[96px] md:mt-0 md:w-container md:mx-auto md:rounded-[15px] pt-[105px] pb-[180px] md:pt-0 xl:flex xl:items-center xl:px-[95px] xl:pt-[55px] xl:pb-[130px]">
        <div className="w-container mx-auto text-white text-center mb-12 md:pt-[71px] md:mb-10 md:text-left xl:w-[50%] xl:mr-[95px]">
          <h1 className="heading1">Contact Us</h1>
          <p className="paragraph mt-[14px] md:mt-7">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital
            experiences that’s relatable to your users, drop us a line.
          </p>
        </div>

        <form className="w-container mx-auto text-center relative xl:w-[50%]">
          <label htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Name" required className="peer" />
            <p className="flex items-center   error peer-invalid-visible">
              Can't be empty <img src={error} alt="error" className="ml-[9px]" />
            </p>
          </label>

          <label htmlFor="email">
            <input type="email" name="email" id="email" placeholder="Email Address" required className="peer" />
            <p className="flex items-center   error">
              Can't be empty <img src={error} alt="error" className="ml-[9px]" />
            </p>
          </label>

          <label htmlFor="phone">
            <input type="tel" name="phone" id="phone" placeholder="Phone" className="peer" />
            <p className="flex items-center  error">
              Can't be empty <img src={error} alt="error" className="ml-[9px]" />
            </p>
          </label>

          <label htmlFor="message">
            <textarea name="message" id="message" cols="30" rows="4" placeholder="Your Message" className="peer"></textarea>
            <p className="flex items-center  error">
              Can't be empty <img src={error} alt="error" className="ml-[9px] " />
            </p>
          </label>

          <input
            type="submit"
            name="submit"
            id="submit"
            value="SUBMIT"
            className="cta cta-white border-none cursor-pointer absolute bottom-[-100px] left-0 right-0 mx-auto md:mr-0"
          />
        </form>
      </section>

      <Offices />
    </div>
  );
};

export default Contact;
