import Photo from "../../assets/secimg.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#020617] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex justify-center">
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]">
            <img
              src={Photo}
              alt="Pranay Salunke"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-[#00eeff]">Me</span>
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#00eeff]">
            Full Stack MERN Developer
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify lg:text-left">
            I am a skilled Full Stack Developer with over 3 years of experience
            in the industry. My passion lies in creating captivating website
            designs and implementing them through frontend development. I take
            pride in staying up-to-date with current design trends and
            leveraging my creativity to produce visually appealing and
            user-friendly websites.
            <br />
            <br />
            Throughout my career, I have developed a deep understanding of user
            experience (UX) and user interface (UI) principles. By putting
            myself in the shoes of the end-users, I strive to create intuitive
            and seamless browsing experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
