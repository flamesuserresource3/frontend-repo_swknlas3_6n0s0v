import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">About</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-xl"
      >
        <p className="text-pretty leading-relaxed">
          I’m a senior video editor specializing in high-end commercials, fashion films, and cinematic short-form. My approach blends rhythm-driven storytelling with elegant visual polish — color, sound, and motion designed to feel alive. I craft bespoke reels and branded narratives that resonate with audiences and elevate modern brands.
        </p>
      </motion.div>
    </section>
  );
}
