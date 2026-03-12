import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-[#101b4d] py-5 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            PRANAY<span className="text-[#00eeff]">.</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`text-[17px] font-medium transition-all duration-300 ${
                  active === link.name
                    ? "text-[#00eeff]"
                    : "text-white hover:text-[#00eeff]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden text-white z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-[90] lg:hidden flex items-center justify-center
        bg-black/70 backdrop-blur-md transition-all duration-500
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      >
        <div className="flex flex-col items-center text-2xl font-semibold w-full max-w-xs">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full flex flex-col items-center">
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className={`py-4 transition-all duration-300 ${
                  active === link.name
                    ? "text-[#00eeff]"
                    : "text-white hover:text-[#00eeff]"
                }`}
              >
                {link.name}
              </a>
              <div className="w-full h-[1px] bg-[#00eeff]/50 shadow-[0_0_6px_#00eeff]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
