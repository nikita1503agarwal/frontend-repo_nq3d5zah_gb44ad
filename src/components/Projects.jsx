import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'End-to-end product with auth, billing, and interactive charts.',
    tags: ['React', 'FastAPI', 'Tailwind'],
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive landing with 3D scenes and micro-interactions.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
  },
  {
    title: 'E-commerce Starter',
    desc: 'Headless storefront with cart, payments, and CMS integration.',
    tags: ['React', 'Stripe', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured work</h2>
          <p className="text-slate-300 mt-2">A selection of projects focused on craft and performance.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/5 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 mb-4" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
