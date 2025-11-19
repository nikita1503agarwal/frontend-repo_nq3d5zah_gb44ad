import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-slate-300">
            I’m a product-focused engineer who blends design sensibility with strong engineering. I obsess over details, performance, and creating delightful user experiences.
          </p>
          <p className="mt-3 text-slate-300">
            From rapid prototypes to production systems, I partner with teams to ship. I value clear communication, thoughtful architecture, and maintainable code.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
