import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const glowShadow = 'shadow-[0_0_80px_0_rgba(56,189,248,0.35)]';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0E13]">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette + gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 pt-24 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-cyan-300" />
          Cinematic Video Editing • Futuristic Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Elevating Stories with Motion, Light, and Sound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-pretty text-base text-white/70 md:text-lg"
        >
          A premium showcase of editorial craft — blending glassmorphism, neon glows, and fluid motion for a modern, Apple-inspired experience.
        </motion.p>

        {/* Glass video frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8, type: 'spring', stiffness: 120, damping: 18 }}
          className={`group relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl ${glowShadow}`}
        >
          <div className="relative overflow-hidden rounded-[22px]">
            <video
              className="block h-full w-full object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Glow edge */}
            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/20" />

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10" />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
            >
              Demo Reel • 60s • 4K
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <Magnetic>
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.25)]">
              <span className="relative z-10 inline-flex items-center gap-2">
                Explore Portfolio
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </span>
              <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </Magnetic>
          <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Lightweight magnetic wrapper using framer-motion
function Magnetic({ children }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setPos({ x, y });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.3 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
