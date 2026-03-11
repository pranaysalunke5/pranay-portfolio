// import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
// import Photo from "../../assets/da.png";

// const Projects = () => {
//   const projectList = [
//     {
//       id: 1,
//       title: "UI/UX Dashboard",
//     image: Photo,
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "Website Development",
//          image: Photo,
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "Mobile App Design",
//         image: Photo,
//       link: "#"
//     }
//   ];

//   return (
//     <section id="projects" className="min-h-screen w-full bg-[#020617] py-20 px-6 md:px-20">
//       <div className="max-w-[1400px] mx-auto">
        
//         <motion.h2 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
//         >
//           Latest <span className="text-[#00eeff]">Project</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectList.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
//             >
//               <img 
//                 src={project.image} 
//                 alt={project.title}
//                 className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#00eeff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
//                 <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
//                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl">
//                   <ExternalLink size={24} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Photo from "../../assets/da.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "UI/UX Dashboard",
      image: Photo,
      link: "#",
    },
    {
      id: 2,
      title: "Website Development",
      image: Photo,
      link: "#",
    },
    {
      id: 3,
      title: "Mobile App Design",
      image: Photo,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#020617] py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16 text-center"
        >
          Latest <span className="text-[#00eeff]">Project</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#00eeff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;