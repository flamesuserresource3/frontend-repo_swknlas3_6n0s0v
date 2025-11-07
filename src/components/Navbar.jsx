import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 w-full backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_0_rgba(34,211,238,0.9)]" />
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text font-semibold text-transparent">Nova Edit Studio</span>
        </motion.a>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { href: '#work', label: 'Work' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
