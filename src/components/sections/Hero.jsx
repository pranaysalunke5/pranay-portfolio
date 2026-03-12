import { AnimatePresence, motion } from "framer-motion";
import { SiIndeed } from "react-icons/si";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Photo from "../../assets/myimg.png";

const Hero = () => {
  const resumeUrl = "../resume.pdf";
  const titles = [
    "Full Stack Developer (MERN)",
    "React & Next.js Developer",
    "Node.js Backend Developer",
    "React Native Mobile Developer",
    "Modern Web Application Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-90px)] w-full bg-[#101b4d] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white z-10 text-center lg:text-left"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Hi, I'm
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Pranay Salunke
          </h1>

          <h3 className="text-[16px] sm:text-xl md:text-2xl lg:text-[26px] font-bold mb-4 flex flex-wrap justify-center lg:justify-start items-center gap-2">
            <span>I am a</span>

            <div className="relative h-[1.2em] overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#00eeff] drop-shadow-[0_0_10px_#00eeff]"
                  // className="text-[#00eeff]"
                >
                  {titles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-[20px] leading-relaxed mb-8">
            I am a Full Stack MERN Developer specializing in building scalable,
            high-performance web and mobile applications. I have hands-on
            experience developing modern user interfaces with React and building
            robust backend systems using Node.js, Express, and MongoDB. I focus
            on writing clean, maintainable code and delivering responsive,
            user-friendly applications..
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-5 w-full">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {[
                {
                  icon: <Github size={20} />,
                  link: "https://github.com/pranaysalunke5",
                },
                {
                  icon: <Linkedin size={20} />,
                  link: "https://www.linkedin.com/in/pranay-salunke-807063233/",
                },
                {
                  icon: <SiIndeed size={20} />,
                  link: "https://profile.indeed.com/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-black hover:shadow-[0_0_20px_#00eeff] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-2.5 bg-transparent border-2 border-[#00eeff] text-[#00eeff] font-bold rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_30px_#00eeff] hover:bg-[#00eeff] hover:text-black transition-all duration-300 whitespace-nowrap inline-block text-center"
              // className="px-8 py-2.5 bg-[#00eeff] text-black font-bold rounded-full shadow-[0_0_20px_#00eeff] hover:shadow-[0_0_40px_#00eeff] transition-all duration-300 whitespace-nowrap inline-block text-center"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center pt-4"
        >
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full flex justify-center items-center">
            <div className="absolute inset-0 rounded-full border-[5px] border-[#00eeff] shadow-[0_0_40px_#00eeff,inset_0_0_40px_#00eeff] animate-pulse"></div>

            <div className="w-[92%] h-[92%] rounded-full overflow-hidden border-4 border-[#020617] z-10">
              <img
                src={Photo}
                alt="Pranay Salunke"
                className="w-full h-full object-cover object-[50%_6%] scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
