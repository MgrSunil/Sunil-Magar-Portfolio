import { Cpu, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/5 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 bg-brand-cyan rounded-sm flex items-center justify-center rotate-45 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
            <div className="w-5 h-5 bg-brand-bg -rotate-45"></div>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tighter uppercase">Sunil Kumar Rana</h2>
          <p className="text-brand-cyan font-mono text-[10px] uppercase tracking-[0.5em]">Electronics Engineer</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <a href="#about" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Projects</a>
          <a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition-all"
          >
            <ArrowUp size={20} />
          </button>
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SUNIL KUMAR RANA. ALL MODULES OPERATIONAL.
          </p>
        </div>

      </div>
    </footer>
  );
}
