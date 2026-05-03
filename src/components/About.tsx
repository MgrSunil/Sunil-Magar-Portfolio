import { motion } from 'motion/react';
import { Cpu, Globe, Github, Linkedin, Mail, Bot, CircuitBoard } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-bg">
      {/* Subtle PCB Background for this section */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
          alt="PCB Circuitry" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-brand-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 hidden lg:block"
          >
            {/* Decorative Element replacing the portrait */}
            <div className="p-12 accent-card border-none bg-white/[0.03] backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-neon to-transparent" />
              <div className="flex flex-col gap-6">
                 <div className="text-[120px] font-display font-black text-white/5 leading-none select-none">01</div>
                 <div className="font-mono text-[10px] text-brand-neon uppercase tracking-[0.5em] font-black">Core Architecture</div>
                 <div className="space-y-4">
                    <div className="h-1 shadow-[0_0_10px_#00d2ff] w-1/3 bg-brand-neon" />
                    <div className="h-0.5 w-full bg-white/5" />
                    <div className="h-0.5 w-2/3 bg-white/5" />
                 </div>
              </div>
              
              {/* Circuit line graphic */}
              <svg className="absolute bottom-10 right-10 w-32 h-32 text-brand-neon/20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
                <rect x="40" y="40" width="20" height="20" fill="currentColor" opacity="0.2" />
              </svg>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-neon font-mono text-[10px] tracking-[0.5em] uppercase font-black"
              >
                Engineer Profile
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter"
              >
                Bridging Knowledge <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">& Real-World Impact</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                I'm an <span className="text-white font-medium">Electronics & Communication Engineering student</span> with a deep passion for embedded systems, IoT, and robotics. I enjoy translating complex engineering concepts into tangible, real-world solutions.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                With hands-on experience in microcontrollers, sensors, and PCB design, I've built projects ranging from ECG monitoring systems to smart city prototypes. I'm also experienced in electronic circuit design and telecommunication fundamentals.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed italic border-l-2 border-brand-neon/30 pl-6 bg-white/[0.02] py-4">
                "I believe in continuous learning and adaptability — always exploring new technologies and sharing knowledge through mentoring and workshops. My goal is to leverage technology to solve pressing real-world problems."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: Bot, title: "Robotics", desc: "Autonomous & controlled systems" },
                { icon: Cpu, title: "Embedded Systems", desc: "Microcontrollers, sensors & firmware" },
                { icon: Globe, title: "IoT Solutions", desc: "Connected smart devices" },
                { icon: CircuitBoard, title: "PCB Design", desc: "Schematic to fabrication" }
              ].map((item, i) => (
                <div key={i} className="p-6 accent-card group">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <a href="https://github.com/MgrSunil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:border-brand-neon hover:text-brand-neon transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sunil-magarbb78793a2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:border-brand-neon hover:text-brand-neon transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:magarsunil2467@gmail.com" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:border-brand-neon hover:text-brand-neon transition-all">
                <Mail size={20} />
              </a>
              <div className="h-px flex-grow bg-white/10" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Communication Protocol</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
