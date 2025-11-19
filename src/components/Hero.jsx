import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.4)]">
            Designing and building modern web experiences
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg max-w-xl">
            I craft fast, accessible interfaces and robust backends. Let’s turn ideas into polished products.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
