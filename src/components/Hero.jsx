import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 overflow-hidden">
      {/* Floating ambient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 60%)' }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.28), transparent 60%)' }}
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
          >
            Next‑gen knowledge + semantic search
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            KnowBase AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed"
          >
            Organize, search, and discover insights across your team’s knowledge with local, open‑source AI. Fast, secure, and installable as a PWA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90">
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Play className="mr-2 h-4 w-4" />
              View Demo
            </a>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
            }}
            className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-300"
          >
            {['Local embeddings (sentence-transformers)', 'Vector search (FAISS/Chroma)', 'Offline-first PWA', 'Roles & workspaces'].map((item) => (
              <motion.li key={item} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>• {item}</motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[480px] sm:h-[560px] lg:h-[700px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-900"
        >
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-950/40"></div>
        </motion.div>
      </div>
    </section>
  );
}
