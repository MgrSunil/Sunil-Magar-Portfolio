import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-brand-cyan font-mono text-xs tracking-widest uppercase">Communication</span>
            <h2 className="text-6xl font-display font-bold text-white tracking-tighter">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple italic font-serif font-light">Collaborate</span></h2>
            <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
              Whether you have a technical question or an innovative project in mind, I'm just a circuit away.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-6 accent-card group hover:border-brand-purple">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Secure Link</span>
                  <p className="text-white font-medium tracking-tight">magarsunil2467@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 accent-card group hover:border-brand-purple">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Base Location</span>
                  <p className="text-white font-medium tracking-tight">Sitapaila, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>

           <div className="flex items-center gap-4">
            <a href="https://github.com/MgrSunil" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-all text-slate-400">
              <Github />
            </a>
            <a href="https://linkedin.com/in/sunil-magarbb78793a2" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-all text-slate-400">
              <Linkedin />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-1 glass rounded-sm"
        >
          <div className="p-10 bg-brand-bg/80 h-full flex flex-col gap-8">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-500 ml-1">Identity</label>
                  <input 
                    type="text" 
                    placeholder="Enter Name"
                    className="bg-white/5 border-l-2 border-brand-cyan/20 px-6 py-4 outline-none focus:border-brand-cyan text-white transition-all text-xs font-mono"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-500 ml-1">Protocol (Email)</label>
                  <input 
                    type="email" 
                    placeholder="name@server.com"
                    className="bg-white/5 border-l-2 border-brand-cyan/20 px-6 py-4 outline-none focus:border-brand-cyan text-white transition-all text-xs font-mono"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-500 ml-1">Input Stream (Message)</label>
                <textarea 
                  rows={5}
                  placeholder="Awaiting input..."
                  className="bg-white/5 border-l-2 border-brand-cyan/20 px-6 py-4 outline-none focus:border-brand-cyan text-white transition-all resize-none text-xs font-mono"
                ></textarea>
              </div>

              <button className="btn-primary flex items-center justify-center gap-4">
                Execute Transmission <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
