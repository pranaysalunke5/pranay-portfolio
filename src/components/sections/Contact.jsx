import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full bg-[#020617] py-20 px-6 md:px-20 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Contact <span className="text-[#00eeff]">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorum nobis possimus tenetur 
            quidem fugit? Dolorum cupiditate deleniti perspiciatis ea soluta repellat dignissimos eum 
            assumenda, iusto quas nulla ullam. Quaerat, maiores!
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-[#00eeff]" size={24} />
              <span className="text-lg">contact@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Phone className="text-[#00eeff]" size={24} />
              <span className="text-lg">0123456789</span>
            </div>
          </div>

          <div className="flex gap-4">
            {[<Facebook />, <Twitter />, <Instagram />, <Linkedin />].map((icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#00eeff]"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <input 
            type="text" 
            placeholder="Enter Your Name" 
            className="w-full p-4 bg-[#1e293b] text-white rounded-lg outline-none border border-transparent focus:border-[#00eeff] transition-all"
          />
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="w-full p-4 bg-[#1e293b] text-white rounded-lg outline-none border border-transparent focus:border-[#00eeff] transition-all"
          />
          <input 
            type="text" 
            placeholder="Enter Your Subject" 
            className="w-full p-4 bg-[#1e293b] text-white rounded-lg outline-none border border-transparent focus:border-[#00eeff] transition-all"
          />
          <textarea 
            placeholder="Enter Your Message" 
            rows="6" 
            className="w-full p-4 bg-[#1e293b] text-white rounded-lg outline-none border border-transparent focus:border-[#00eeff] transition-all resize-none"
          ></textarea>
          
          <button className="w-full py-4 bg-[#00eeff] text-black font-bold rounded-full shadow-[0_0_20px_#00eeff] hover:shadow-[0_0_40px_#00eeff] transition-all duration-300 mt-4 text-lg">
            Submit
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;