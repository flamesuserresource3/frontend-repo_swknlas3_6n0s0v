import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">Let’s collaborate</h2>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Name" type="text" placeholder="Your name" />
          <Input label="Email" type="email" placeholder="you@studio.com" />
        </div>
        <Input label="Subject" type="text" placeholder="Project or brief" />
        <div>
          <label className="mb-2 block text-sm text-white/70">Message</label>
          <textarea className="h-32 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-500/40" placeholder="Tell me about your goals, timeline, and vision" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/50">Typically replies within 24 hours</p>
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.25)]">
            Send message
          </button>
        </div>
      </motion.form>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">{label}</label>
      <input {...props} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-500/40" />
    </div>
  );
}
