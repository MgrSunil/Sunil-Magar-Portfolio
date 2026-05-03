import { motion } from 'motion/react';
import { Cpu, Zap, Globe, Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-1">
              <img 
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000" 
                alt="Electronics bench"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="flex flex-col">
                <span className="text-5xl font-display font-black text-brand-neon">5+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Years of Passion</span>
              </div>
            </div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-neon/20 rounded-full blur-[80px]" />
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-neon font-mono text-sm tracking-widest uppercase"
              >
                About the Engineer
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-display font-bold text-white"
              >
                Passionate about <span className="text-brand-neon">Hardware</span> & Innovation
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              I am an Electronics & Communication Engineering student with a deep fascination for the intersection of 
              <span className="text-white"> hardware and intelligence</span>. My journey spans from building remote-controlled 
              robots to developing complex IoT ecosystems that solve real-world problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 glass rounded-2xl flex gap-4 items-start">
                <div className="w-12 h-12 bg-brand-neon/10 rounded-xl flex items-center justify-center text-brand-neon">
                  <Cpu />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Embedded Systems</h4>
                  <p className="text-sm text-slate-500 italic leading-tight">Mastering microcontrollers & logic design</p>
                </div>
              </div>

              <div className="p-6 glass rounded-2xl flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">
                  <Globe />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">IoT Specialist</h4>
                  <p className="text-sm text-slate-500 italic leading-tight">Bridging devices with the cloud</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <a href="https://github.com/MgrSunil" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/sunil-magarbb78793a2" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:magarsunil2467@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all">
                <Mail size={24} />
              </a>
              <div className="h-px w-20 bg-white/10" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Connect</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
