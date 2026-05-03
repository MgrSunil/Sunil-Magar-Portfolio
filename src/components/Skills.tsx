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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "accent-card border-white/5",
                idx === 1 && "lg:border-x-white/5"
              )}
            >
              <h3 className="text-sm font-display font-bold text-white uppercase tracking-[0.3em] mb-8 group-hover:text-brand-cyan transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
                  return (
                    <div 
                      key={skill.name}
                      className="px-4 py-3 bg-white/[0.02] rounded-sm border border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors group/skill"
                    >
                      <Icon size={16} className="text-brand-cyan group-hover/skill:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-slate-400 group-hover/skill:text-white transition-colors">{skill.name}</span>
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
