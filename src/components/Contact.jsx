import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="text-slate-300 mt-2">Tell me about your project. I’ll get back within 24 hours.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea rows={5} className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="What are you building?" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100">
              <Send size={16}/> Send message
            </button>
          </div>
        </form>
        <p className="text-center text-slate-400 text-sm mt-4">
          Or email me directly at <a href="mailto:hello@example.com" className="underline decoration-dotted">hello@example.com</a>
        </p>
      </div>
    </section>
  );
}
