import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon City Ad — 30s Cut',
    role: 'Editing • Color • Sound',
    video: 'https://interactive-examples.mdn.mozilla.org/media/cc0-videos/flower.mp4',
    tags: ['Commercial', '4K', 'HDR'],
  },
  {
    title: 'Fashion Editorial — Director’s Cut',
    role: 'Editing • Color • VFX',
    video: 'https://www.w3schools.com/html/movie.mp4',
    tags: ['Editorial', 'Cinematic', 'Dolby'],
  },
  {
    title: 'Auto Launch Film',
    role: 'Trailer • Titles • Mix',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    tags: ['Automotive', 'Motion', 'SFX'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">Selected Work</h2>
        <p className="text-sm text-white/60">Curated pieces showcasing pace, rhythm, and story.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, role, video, tags, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-3 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.15)]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <video
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
      </div>

      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white/95">{title}</h3>
          <p className="text-xs text-white/60">{role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
