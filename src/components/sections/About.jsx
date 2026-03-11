import Photo from "../../assets/secimg.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#020617] flex items-center px-6 md:px-20 py-20"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
            <img
              src={Photo}
              alt="Pranay Salunke"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-white">
          <h2 className="text-4xl md:text-3xl font-bold mb-2">
            About <span className="text-[#00eeff]">Me</span>
          </h2>

          <h3 className="text-xl md:text-3xl font-bold mb-3">
            Full Stack Developer!
          </h3>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-10 text-justify lg:text-left">
            I am a skilled Full Stack Developer with over 3 years of experience in the industry.
            My passion lies in creating captivating website designs and implementing them
            through frontend development. I take pride in staying up-to-date with current
            design trends and leveraging my creativity to produce visually appealing and
            user-friendly websites.

            <br /><br />

            Throughout my career, I have developed a deep understanding of user experience (UX)
            and user interface (UI) principles. By putting myself in the shoes of the end-users,
            I strive to create intuitive and seamless browsing experiences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;