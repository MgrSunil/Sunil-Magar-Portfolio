import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

const categories = ["All", "Featured", "IoT", "Robotics", "Safety"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-brand-cyan font-mono text-xs tracking-widest uppercase">Portfolio</span>
            <h2 className="text-5xl font-display font-bold text-white tracking-tighter">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Works</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? "bg-brand-cyan text-brand-bg shadow-[0_0_15px_rgba(0,210,255,0.3)]" 
                    : "bg-transparent text-slate-500 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative bg-transparent overflow-hidden border border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900/50 flex items-center justify-center">
                      <span className="text-brand-cyan font-mono text-[10px] opacity-20 tracking-[0.5em] uppercase">Engineering</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.github && (
                      <a href={project.github} className="p-2 glass rounded-sm hover:bg-brand-cyan hover:text-brand-bg transition-all text-white">
                        <Github size={14} />
                      </a>
                    )}
                    <a href={project.demo || "#"} className="p-2 glass rounded-sm hover:bg-brand-cyan hover:text-brand-bg transition-all text-white">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="absolute top-0 left-8 w-12 h-0.5 bg-brand-cyan" />
                  <span className="text-[10px] font-mono text-brand-cyan/60 uppercase tracking-widest mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded-sm border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 glass rounded-[40px] text-center bg-brand-neon/5 border-dashed border-2 border-brand-neon/20"
        >
          <h4 className="text-2xl font-display font-bold text-white mb-4 italic">And many more projects...</h4>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            From smart waste management to patient health monitoring and air quality indexing using GSM/LoRa. 
            I build systems that solve real-world problems.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-brand-neon font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
            Enquire for custom projects <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
