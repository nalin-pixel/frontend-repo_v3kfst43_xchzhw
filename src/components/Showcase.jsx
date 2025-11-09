import { motion } from 'framer-motion';
import { Search, FileText, Sparkles, Link2 } from 'lucide-react';

const cards = [
  {
    icon: Search,
    title: 'Semantic Search',
    desc: 'Ask natural questions like “What changed in the Q2 report?” and get contextual answers.'
  },
  {
    icon: FileText,
    title: 'Rich Notes',
    desc: 'Markdown notes with backlinks and highlights linked to document passages.'
  },
  {
    icon: Link2,
    title: 'Knowledge Graph',
    desc: 'Interactive map of documents, entities, and topics with relationships.'
  },
  {
    icon: Sparkles,
    title: 'Smart Context',
    desc: 'Summaries, keyphrases, and entities surfaced as you search.'
  }
];

export default function Showcase() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Everything you need to think clearly</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Move from search to understanding with buttery‑smooth interactions and delightful details.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur group"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
                </div>
              </div>
              <motion.div
                aria-hidden
                className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25), transparent 60%)' }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
