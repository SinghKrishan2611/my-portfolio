'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FloatingDoodles from '@/components/ui/FloatingDoodles'
import { personalInfo } from '@/data/content'

export default function Footer() {
  return (
    <section id="contact" aria-label="Contact" className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-bg border-t border-border pt-16 lg:pt-0">
      <FloatingDoodles count={24} />
      {/* LEFT: Photo panel */}
      <div className="w-full lg:w-[38%] xl:w-[34%] relative flex flex-col items-center justify-center p-8 sm:p-12 lg:p-10 xl:p-14 bg-surface/30 border-b lg:border-b-0 lg:border-r border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 bg-card shadow-2xl group"
        >
          <Image
            src="/profile_pic.jpeg"
            alt={`${personalInfo.name} — ${personalInfo.role}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="footer-portrait footer-portrait-dark object-cover object-[center_10%] contrast-105 group-hover:scale-105 transition-transform duration-500"
          />
          <Image
            src="/profile_pic.jpeg"
            alt={`${personalInfo.name} — ${personalInfo.role}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="footer-portrait footer-portrait-light object-cover object-[center_10%] contrast-100 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-fg/10 rounded-2xl pointer-events-none" />
        </motion.div>

        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Mobile Projects</span>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative">
        {/* Giant name */}
        <motion.div
          data-animate
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex items-center py-6 lg:py-10"
        >
          <h2 className="font-display font-bold text-fg leading-none tracking-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-3">
              {personalInfo.logoName}
            </span>
            <span className="block font-mono text-lg sm:text-2xl lg:text-3xl text-fg/80 font-normal tracking-wide">
              {personalInfo.logoSub}
            </span>
          </h2>
        </motion.div>

        {/* SVG squiggle decoration */}
        <motion.svg
          className="absolute right-24 top-1/2 -translate-y-1/2 text-fg/20 pointer-events-none hidden md:block z-0"
          width="80" height="60" viewBox="0 0 80 60" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.path
            d="M10 30 C20 10, 30 50, 40 30 C50 10, 60 50, 70 30"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Floating Mobile Architecture Doodles */}
        {/* Doodle 1: Smartphone Device Frame */}
        <motion.svg
          className="absolute top-[12%] right-[18%] text-fg/5 pointer-events-none w-16 h-28 z-0 hidden md:block"
          viewBox="0 0 60 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="8" y="6" width="44" height="88" rx="8" />
          <line x1="22" y1="12" x2="38" y2="12" strokeLinecap="round" />
          <rect x="14" y="20" width="32" height="24" rx="3" strokeDasharray="2 2" />
          <rect x="14" y="50" width="32" height="12" rx="2" />
          <rect x="14" y="66" width="22" height="8" rx="2" />
          <circle cx="30" cy="86" r="2.5" fill="currentColor" />
        </motion.svg>

        {/* Doodle 2: Layered Clean Architecture Stack */}
        <motion.svg
          className="absolute top-[50%] left-[8%] text-fg/5 pointer-events-none w-20 h-20 z-0 hidden md:block"
          viewBox="0 0 80 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Top layer: Presentation */}
          <polygon points="40,10 70,22 40,34 10,22" />
          {/* Middle layer: Domain / BLoC */}
          <polygon points="40,28 70,40 40,52 10,40" />
          {/* Bottom layer: Data / Room / Sqflite */}
          <polygon points="40,46 70,58 40,70 10,58" />
        </motion.svg>

        {/* Doodle 3: GPS Differential Beacon & Location Rings */}
        <motion.svg
          className="absolute top-[28%] right-[8%] text-fg/5 pointer-events-none w-20 h-20 z-0 hidden md:block"
          viewBox="0 0 80 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="40" cy="40" r="32" strokeDasharray="3 3" />
          <circle cx="40" cy="40" r="20" />
          <circle cx="40" cy="40" r="8" fill="currentColor" fillOpacity="0.2" />
          <line x1="40" y1="4" x2="40" y2="16" />
          <line x1="40" y1="64" x2="40" y2="76" />
          <line x1="4" y1="40" x2="16" y2="40" />
          <line x1="64" y1="40" x2="76" y2="40" />
        </motion.svg>

        {/* Doodle 4: Distributed Real-Time Mobile Data Nodes */}
        <motion.svg
          className="absolute bottom-[35%] right-[14%] text-fg/5 pointer-events-none w-20 h-20 z-0 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="25" y1="30" x2="50" y2="20" />
          <line x1="50" y1="20" x2="75" y2="35" />
          <line x1="75" y1="35" x2="60" y2="75" />
          <line x1="60" y1="75" x2="25" y2="65" />
          <line x1="25" y1="65" x2="25" y2="30" />
          <circle cx="25" cy="30" r="5" fill="currentColor" />
          <circle cx="50" cy="20" r="5" fill="currentColor" />
          <circle cx="75" cy="35" r="5" fill="currentColor" />
          <circle cx="60" cy="75" r="5" fill="currentColor" />
          <circle cx="25" cy="65" r="5" fill="currentColor" />
        </motion.svg>

        {/* Contact info */}
        <div className="mt-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <a href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm text-muted hover:text-fg transition-colors">
              {personalInfo.email}
            </a>
            <a href="/resume.pdf" download
               className="inline-flex items-center gap-2 border border-fg/20 bg-fg/5 hover:bg-fg hover:text-bg font-mono text-xs text-fg px-4 py-2 transition-all duration-300 btn-glare animate-flicker-glow">
              <span>[ Download Resume ]</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            {personalInfo.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-fg transition-colors tracking-widest uppercase">
                {s.label}
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted/50 tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name} (@{personalInfo.handle}) · Built in India
          </p>
        </div>
      </div>
    </section>
  )
}
