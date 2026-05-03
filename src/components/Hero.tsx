import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg pcb-background">
      {/* Background Face - Full Screen Blended */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Gradients to blend image */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/50 z-10" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-brand-bg to-transparent z-10" />
        
        <motion.div
           initial={{ opacity: 0, scale: 1.2 }}
           animate={{ opacity: 0.65, scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="w-full h-full flex justify-center items-center"
        >
          <img 
            src="https://i.postimg.cc/Bvtd7ffw/Mr-Sunil-PP-removebg-preview.png" 
            alt="Background Portrait"
            className="h-full w-auto object-contain grayscale brightness-100 contrast-110"
          />
        </motion.div>
        
        {/* Glow effect centered on person */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-brand-neon/10 blur-[150px] rounded-full z-0" />
      </div>

      {/* Decorative PCB SVG behind everything but after base color */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="400" fill="url(#grad1)" opacity="0.1" />
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: '#00d2ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#05060a', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-20">
        
        {/* Left Side: Identity */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-brand-neon/10 border border-brand-neon/20 rounded-full w-fit backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse shadow-[0_0_8px_#00d2ff]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-neon">Available for Projects & Training</span>
            </div>
            
            <h1 className="text-[100px] md:text-[140px] font-display font-black leading-[0.8] tracking-tighter text-white">
              I AM <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-brand-neon to-brand-purple">SUNIL</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <button 
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Description */}
        <div className="flex flex-col gap-10 md:items-end text-left md:text-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 w-full max-w-lg"
          >
            <div className="space-y-3">
              <div className="font-mono text-[10px] text-brand-neon uppercase tracking-widest font-black">[ System Status: Fully Operational ]</div>
              <div className="h-0.5 w-full bg-white/5">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 1.5, delay: 1 }}
                   className="h-full bg-brand-neon shadow-[0_0_15px_#00d2ff]" 
                />
              </div>
            </div>

            <div className="h-12 flex items-center md:justify-end text-2xl md:text-3xl font-display font-bold text-brand-neon/80 italic">
                <TypeAnimation
                  sequence={[
                    'Initializing IoT Protocol...',
                    2000,
                    'Specializing in Embedded Systems...',
                    2000,
                    'Designing Robotics Solutions...',
                    2000,
                    'PCB Layout & Manufacturing...',
                    2000,
                    'AI & Machine Learning Support...',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] uppercase tracking-tighter">
               Electronics & <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-slate-700">Communication Engineer</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="accent-card">
                <div className="text-[10px] uppercase text-slate-500 font-black mb-2 tracking-widest">Hardware Architecture</div>
                <div className="text-sm text-slate-300 font-mono">ESP32, STM32, Altium</div>
              </div>
              <div className="accent-card border-brand-purple">
                <div className="text-[10px] uppercase text-slate-500 font-black mb-2 tracking-widest">Control Algorithms</div>
                <div className="text-sm text-slate-300 font-mono">RTOS, PID, AI/ML</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-slate-500">Scroll</span>
        <ChevronDown size={20} className="text-brand-neon" />
      </motion.div>
    </section>
  );
}
