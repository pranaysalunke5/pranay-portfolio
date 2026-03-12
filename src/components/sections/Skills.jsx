// import { motion } from 'framer-motion';

// const Skills = () => {
//   const technicalSkills = [
//     { name: "HTML", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "Tailwind CSS", level: 85, icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
//     { name: "Javascript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "React / React Native", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     { name: "Node.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//     { name: "Express", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//     { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//     { name: "MySQL", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//   ];

//   const professionalSkills = [
//     { name: "Creativity", level: 90 },
//     { name: "Communication", level: 65 },
//     { name: "Problem Solving", level: 75 },
//     { name: "Teamwork", level: 85 },
//   ];

//   return (
//     <section id="skills" className="min-h-screen w-full bg-[#020617] py-20 px-6 md:px-20 text-white">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
//         <div>
//           <h2 className="text-3xl font-bold mb-12 border-b-4 border-white inline-block pb-2">Technical Skills</h2>
//           <div className="space-y-6">
//             {technicalSkills.map((skill, i) => (
//               <div key={i} className="relative group">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex items-center gap-3">
//                     <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain " />

//                     <span className="font-semibold uppercase text-sm tracking-wider">{skill.name}</span>
//                   </div>
//                   <span className="text-sm font-bold text-[#00eeff]">{skill.level}%</span>
//                 </div>
//                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1.2, ease: "circOut" }}
//                     viewport={{ once: true }}
//                     className="h-full bg-[#00eeff] shadow-[0_0_15px_#00eeff]"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold mb-12 border-b-4 border-white inline-block pb-2">Professional Skills</h2>
//           <div className="grid grid-cols-2 gap-y-12 gap-x-6">
//             {professionalSkills.map((skill, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
//                   <svg className="w-full h-full transform -rotate-90">
//                     <circle cx="50%" cy="50%" r="45%" stroke="#1e293b" strokeWidth="8" fill="transparent" />
//                     <motion.circle 
//                       cx="50%" cy="50%" r="45%" stroke="#00eeff" strokeWidth="8" fill="transparent"
//                       strokeDasharray="100 100"
//                       initial={{ pathLength: 0 }}
//                       whileInView={{ pathLength: skill.level / 100 }}
//                       transition={{ duration: 1.5, ease: "easeInOut" }}
//                       viewport={{ once: true }}
//                       strokeLinecap="round"
//                       style={{ filter: "drop-shadow(0 0 6px #00eeff)" }}
//                     />
//                   </svg>
//                   <span className="absolute text-xl font-bold">{skill.level}%</span>
//                 </div>
//                 <span className="mt-4 font-semibold text-center">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", level: 85, icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Javascript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React / React Native", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  const professionalSkills = [
    { name: "Creativity", level: 90 },
    { name: "Communication", level: 65 },
    { name: "Problem Solving", level: 75 },
    { name: "Teamwork", level: 85 },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#020617] py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-white"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">

        {/* TECHNICAL SKILLS */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 border-b-4 border-white inline-block pb-2">
            Technical<span className="text-[#00eeff]"> Skills</span>
          </h2>

          <div className="space-y-5">
            {technicalSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <span className="font-semibold uppercase text-xs sm:text-sm tracking-wider">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-[#00eeff]">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#00eeff] shadow-[0_0_15px_#00eeff]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL SKILLS */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 border-b-4 border-white inline-block pb-2">
            Professional Skills
          </h2>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6">
            {professionalSkills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">

                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">

                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="#1e293b"
                      strokeWidth="8"
                      fill="transparent"
                    />

                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="#00eeff"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="100 100"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: skill.level / 100 }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      strokeLinecap="round"
                      style={{ filter: "drop-shadow(0 0 6px #00eeff)" }}
                    />

                  </svg>

                  <span className="absolute text-sm sm:text-lg md:text-xl font-bold">
                    {skill.level}%
                  </span>
                </div>

                <span className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-center">
                  {skill.name}
                </span>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;