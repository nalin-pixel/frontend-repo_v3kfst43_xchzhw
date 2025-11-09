import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to accelerate your team’s intelligence?</h3>
            <p className="mt-3 text-white/90">Install the PWA, invite your team, and start searching semantically within minutes.</p>
            <div className="mt-6">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90">
                <Rocket className="mr-2 h-4 w-4" />
                Get Started Free
              </a>
            </div>
          </div>
          <motion.div
            aria-hidden
            className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.35), transparent 60%)' }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
