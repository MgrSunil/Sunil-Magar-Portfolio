import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
       {/* Background Graphic */}
       <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-neon">
          <path d="M0,50 L20,50 L30,20 L50,80 L60,50 L100,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-neon font-mono text-xs tracking-widest uppercase"
          >
            Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-white"
          >
            Engineering <span className="text-brand-neon">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Layers;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 accent-card group hover:bg-brand-neon/5 transition-all flex flex-col items-center text-center border-white/5 hover:border-brand-neon/40 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon mb-8 group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-[0_0_15px_rgba(0,210,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,210,255,0.4)]">
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-display font-black text-white mb-4 group-hover:text-brand-neon transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
