import { useEffect, useRef, useState } from "react"; 
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink, Twitter, X } from "lucide-react"; 
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heroRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
      gsap.from(".animate-right", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden bg-transparent"
    >
      {/* Left Side: Information */}
      <div className="flex-1 space-y-6 mt-12 lg:mt-0 text-left">
        <h3 className="animate-left text-2xl md:text-3xl font-medium text-white">
          Hi, It's <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Shariful</span>
        </h3>

        <h1 className="animate-left text-5xl md:text-7xl font-bold text-white leading-[1.1]">
          I'm a <br />
          <span className="text-[#00ffee] drop-shadow-[0_0_15px_#00ffee]">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Web Designer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="animate-left text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Welcome to my portfolio. I am a dedicated developer with a passion for building 
          dynamic, responsive, and user-centric web applications. I bridge the gap between 
          complex backend logic and elegant frontend design.
        </p>

        {/* Action Buttons */}
        <div className="animate-left flex flex-wrap gap-5 pt-4">
          {/* View Resume Button (Triggers Modal) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#00ffee] text-black font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,238,0.4)] hover:shadow-[0_0_40px_rgba(0,255,238,0.6)] hover:scale-105 transition-all duration-300"
          >
            <ExternalLink size={20} />
            View My Resume
          </button>
          
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="glass py-3.5 px-8 rounded-full border border-[#00ffee] text-[#00ffee] font-bold hover:bg-[#00ffee] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,238,0.1)] flex items-center gap-2"
          >
            Hire Me <ExternalLink size={18} />
          </button>
        </div>

        {/* Social Links */}
        <div className="animate-left flex items-center gap-5 pt-8">
          {[
            { Icon: Github, link: "https://github.com/sharifulNext" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/shariful-islam-30907b267/" },
            { Icon: Facebook, link: "https://www.facebook.com/shariful.islam.522169/" },
            { Icon: Mail, link: "mailto:sharifulislam242248@gmail.com" },
            { Icon: Twitter, link: "https://x.com/it_shariful" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 glass rounded-full text-[#00ffee] border border-[#00ffee]/20 hover:bg-[#00ffee] hover:text-black hover:shadow-[0_0_20px_#00ffee] transition-all duration-500 transform hover:-translate-y-2 active:scale-90"
            >
              <item.Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="animate-right relative flex justify-center items-center">
        <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-[#00ffee]/20 rounded-full blur-[80px] animate-pulse"></div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative z-10 w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full p-1.5 border-2 border-[#00ffee] shadow-[0_0_60px_rgba(0,255,238,0.3)] overflow-hidden"
        >
          <img
            src="https://i.ibb.co.com/chZCZh1Q/portfolio.jpg" 
            alt="Shariful Islam"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
          />
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -right-2 md:bottom-10 md:-right-8 glass px-5 py-3 rounded-2xl border border-white/10 shadow-xl hidden sm:block"
        >
          <p className="text-white text-sm font-medium">Available for</p>
          <p className="text-[#00ffee] font-bold text-lg">Job</p>
        </motion.div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl h-[90vh] bg-[#080808] rounded-2xl border border-[#00ffee]/30 shadow-[0_0_50px_rgba(0,255,238,0.2)] flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#00ffee]/20">
              <h3 className="text-[#00ffee] font-bold text-xl flex items-center gap-2">
                <ExternalLink size={20} /> Resume Preview
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-red-500/20 text-red-500 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body - PDF Viewer */}
            <div className="flex-1 bg-white/5">
              <iframe
                src="/public/Shariful Resume1.pdf" 
                className="w-full h-full"
                title="Shariful Islam Resume"
              ></iframe>
            </div>

            {/* Modal Footer - Download Button */}
            <div className="p-4 bg-[#0a0a0a] flex justify-center sm:justify-end gap-4 border-t border-[#00ffee]/10">
              <a
                href="/Shariful Resume.pdf"
                download="Shariful Resume.pdf"
                className="flex items-center gap-2 bg-[#00ffee] text-black px-6 py-2.5 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all"
              >
                <Download size={18} /> Download Copy
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;