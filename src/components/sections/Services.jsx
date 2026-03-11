import { motion } from 'framer-motion';
import { Code2, Crop, Apple } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 size={40} className="text-[#00eeff]" />,
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem?",
    },
    {
      icon: <Crop size={40} className="text-[#00eeff]" />,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem?",
    },
    {
      icon: <Apple size={40} className="text-[#00eeff]" />,
      title: "App Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem?",
    },
  ];

  return (
    <section id="services" className="min-h-screen w-full bg-[#020617] py-20 px-6 md:px-20 flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
      >
        My <span className="text-[#00eeff]">Services</span>
      </motion.h2>

      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f172a] p-10 rounded-3xl border-2 border-transparent hover:border-[#00eeff] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,238,255,0.3)] flex flex-col items-center text-center"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {service.desc}
            </p>

            <button className="px-8 py-2.5 bg-[#00eeff] text-black font-bold rounded-full shadow-[0_0_15px_#00eeff] hover:shadow-[0_0_30px_#00eeff] transition-all duration-300 transform active:scale-95">
              learn more
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;