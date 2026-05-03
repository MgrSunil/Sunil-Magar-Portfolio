import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants';
import { cn } from '../lib/utils';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-cyan font-mono text-xs tracking-widest uppercase"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-white tracking-tighter"
          >
            Technical <span className="italic font-serif font-light text-slate-500">Toolkit</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="accent-card border-white/5 h-full group"
            >
              <h3 className="text-sm font-display font-black text-white uppercase tracking-[0.4em] mb-10 group-hover:text-brand-neon transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => {
                  const Icon = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
                  return (
                    <div 
                      key={skill.name}
                      className="p-4 bg-white/[0.03] rounded-sm border border-white/5 flex items-center gap-4 hover:bg-brand-neon/10 hover:border-brand-neon hover:translate-x-2 transition-all duration-300 group/skill shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]"
                    >
                      <div className="p-2 bg-brand-neon/10 rounded-sm">
                        <Icon size={20} strokeWidth={3} className="text-brand-neon group-hover/skill:scale-110 transition-transform shadow-[0_0_10px_rgba(0,242,255,0.3)]" />
                      </div>
                      <span className="text-xs font-black text-slate-300 group-hover/skill:text-white transition-colors uppercase tracking-widest">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
