import { Menu, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-slate-200"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-slate-200"><Linkedin size={18} /></a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-slate-200"><Mail size={18} /></a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  );
}
