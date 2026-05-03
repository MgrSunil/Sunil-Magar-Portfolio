import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EDUCATION, EXPERIENCE } from '../constants';

export default function Timeline() {
  return (
    <section className="py-32 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-neon/10 rounded-xl text-brand-neon">
                <Briefcase size={24} />
              </div>
              <h2 className="text-4xl font-display font-bold text-white">Experience</h2>
            </div>
            
            <div className="flex flex-col gap-8 border-l border-white/10 ml-6 pl-10 relative">
              {EXPERIENCE.map((item, idx) => (
                <motion.div 
                  key={item.role + item.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group pb-8"
                >
                  <div className="absolute -left-[45px] top-0 w-3 h-3 rounded-full bg-brand-neon ring-4 ring-black ring-offset-2 ring-offset-brand-neon/20 group-hover:scale-150 transition-transform" />
                  
                  <div className="p-8 glass rounded-3xl border-transparent hover:border-brand-neon/20 transition-all hover:translate-x-2">
                    <span className="text-xs font-mono text-brand-neon font-bold tracking-widest">{item.period}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-1">{item.role}</h3>
                    <p className="text-sm font-serif italic text-slate-400 mb-4">{item.company}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-4xl font-display font-bold text-white">Education</h2>
            </div>
            
            <div className="flex flex-col gap-8 border-l border-white/10 ml-6 pl-10 relative">
              {EDUCATION.map((item, idx) => (
                <motion.div 
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group pb-8"
                >
                  <div className="absolute -left-[45px] top-0 w-3 h-3 rounded-full bg-brand-purple ring-4 ring-black ring-offset-2 ring-offset-brand-purple/20 group-hover:scale-150 transition-transform" />
                  
                  <div className="p-8 glass rounded-3xl border-transparent hover:border-brand-purple/20 transition-all hover:translate-x-2">
                    <span className="text-xs font-mono text-brand-purple font-bold tracking-widest">{item.year}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-1">{item.degree}</h3>
                    <p className="text-sm font-serif italic text-slate-400">{item.institution}</p>
                    {item.description && (
                      <p className="text-slate-500 text-sm leading-relaxed mt-4">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
