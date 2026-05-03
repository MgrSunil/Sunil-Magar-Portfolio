import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeOtherCategory, setActiveOtherCategory] = useState<string>("IoT");
  const featuredProjects = PROJECTS.filter(p => p.category === "Featured");
  const currentProject = featuredProjects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const filteredOtherProjects = PROJECTS.filter(p => p.category === activeOtherCategory);

  return (
    <section id="projects" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-[-5%] text-[200px] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-brand-neon font-mono text-[10px] tracking-[0.5em] uppercase font-black">Success Stories</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Projects.</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] bg-slate-900 rounded-sm overflow-hidden group">
                 <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                
                <div className="absolute top-6 right-6 flex gap-3">
                   {currentProject.github && (
                     <a href={currentProject.github} className="w-10 h-10 bg-brand-bg/80 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-neon hover:text-brand-bg transition-colors">
                       <Github size={18} />
                     </a>
                   )}
                   <a href={currentProject.demo || "#"} className="w-10 h-10 bg-brand-bg/80 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-neon hover:text-brand-bg transition-colors">
                     <ExternalLink size={18} />
                   </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-8">
                 <div>
                    <span className="text-brand-neon font-mono text-[10px] uppercase tracking-widest mb-4 block">Case Study {currentIndex + 1} of {featuredProjects.length}</span>
                    <h3 className="text-4xl font-display font-black text-white leading-tight mb-6">
                      {currentProject.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                      {currentProject.description}
                    </p>
                 </div>

                 {/* Components Section */}
                 <div className="accent-card border-none bg-white/[0.03] p-8">
                    <div className="flex items-center gap-3 mb-6">
                       <Cpu size={18} className="text-brand-neon" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">System Architecture</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                       {currentProject.components?.map((component, idx) => (
                         <div key={idx} className="px-4 py-2 bg-white/5 border border-white/5 rounded-sm text-[10px] font-mono text-slate-300">
                           {component}
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-3">
                    {currentProject.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1 rounded-sm">
                        #{tag}
                      </span>
                    ))}
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-12 lg:mt-20">
             <button 
                onClick={prevProject}
                className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-brand-neon hover:text-brand-neon transition-all"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={nextProject}
                className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-brand-neon hover:text-brand-neon transition-all"
             >
                <ChevronRight size={24} />
             </button>
             
             <div className="h-px flex-grow bg-white/10 mx-6" />
             
             <div className="flex gap-2">
                {featuredProjects.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "w-12 h-1 transition-all duration-500",
                      currentIndex === idx ? "bg-brand-neon w-20" : "bg-white/10"
                    )}
                  />
                ))}
             </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="mt-40 border-t border-white/5 pt-20">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-brand-neon font-mono text-[10px] tracking-[0.5em] uppercase font-black text-center">Repository</span>
            <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter text-center mb-12">
              Explore More <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Innovations.</span>
            </h3>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
               {["IoT", "Robotics", "Safety & Monitoring", "Miscellaneous"].map((category) => (
                 <button
                   key={category}
                   onClick={() => setActiveOtherCategory(category)}
                   className={cn(
                     "px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border",
                     activeOtherCategory === category 
                      ? "bg-brand-neon text-brand-bg border-brand-neon shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105" 
                      : "bg-white/[0.03] text-slate-400 border-white/5 hover:border-brand-neon/50 hover:text-white"
                   )}
                 >
                   {category}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredOtherProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  key={project.id}
                  className="accent-card border-white/5 hover:border-brand-neon/30 transition-all duration-500 group"
                >
                   <div className="flex flex-col h-full gap-6">
                      <div className="flex justify-between items-start">
                         <span className="text-[10px] font-mono text-brand-neon/60 uppercase tracking-widest">{project.category}</span>
                         <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Github size={14} className="text-slate-500 hover:text-brand-neon cursor-pointer" />
                            <ExternalLink size={14} className="text-slate-500 hover:text-brand-neon cursor-pointer" />
                         </div>
                      </div>
                      
                      <h4 className="text-lg font-display font-black text-white group-hover:text-brand-neon transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                         {project.tags.map(tag => (
                           <span key={tag} className="text-[8px] font-black uppercase tracking-tighter text-slate-500">
                             #{tag}
                           </span>
                         ))}
                      </div>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors relative group"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-neon" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h4 className="text-2xl font-display font-bold text-white mb-2">Technical Problem Solving</h4>
              <p className="text-slate-400 text-sm max-w-xl">
                I specialize in translating real-world challenges into high-performance engineering solutions. 
                Beyond this list, I possess the capability to design and implement complex, tailor-made systems for agriculture, security, and industrial automation.
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-brand-neon hover:text-brand-bg hover:border-brand-neon transition-all duration-300 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 whitespace-nowrap"
            >
              Solve a Problem <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
