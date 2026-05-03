import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-brand-neon font-mono text-[10px] tracking-[0.5em] uppercase font-black">Communication Hub</span>
            <h2 className="text-6xl font-display font-black text-white tracking-tighter">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Collaborate.</span></h2>
            <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
              Whether you have a technical question or an innovative project in mind, I'm just a transmission away.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-6 accent-card group hover:border-brand-neon">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,210,255,0.2)]">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Protocol</span>
                  <p className="text-white font-black tracking-tight uppercase text-xs">magarsunil2467@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 accent-card group hover:border-brand-neon">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,210,255,0.2)]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Voice Link</span>
                  <p className="text-white font-black tracking-tight uppercase text-xs italic opacity-80">Available on Request</p>
                </div>
              </div>
            </div>

            <div className="p-6 accent-card group hover:border-brand-neon">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,210,255,0.2)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Base Coordinates</span>
                  <p className="text-white font-black tracking-tight uppercase text-xs">Sitapaila, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>

           <div className="flex items-center gap-4">
            <a href="https://github.com/MgrSunil" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-neon hover:text-brand-neon transition-all text-slate-400">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/sunil-magarbb78793a2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-neon hover:text-brand-neon transition-all text-slate-400">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/mgr.baujaa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-neon hover:text-brand-neon transition-all text-slate-400">
              <Facebook size={18} />
            </a>
            <a href="https://wa.link/z9cdna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-neon hover:text-brand-neon transition-all text-slate-400">
              <MessageCircle size={18} />
            </a>
            <a href="https://www.instagram.com/_baujaa_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-brand-neon hover:text-brand-neon transition-all text-slate-400">
              <Instagram size={18} />
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
