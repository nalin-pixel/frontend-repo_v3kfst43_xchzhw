import { motion } from 'framer-motion';

const logos = [
  'Open‑source', 'FastAPI', 'MongoDB', 'FAISS', 'Chroma', 'spaCy', 'NLTK', 'Sentence‑Transformers', 'Redis', 'RQ/Celery'
];

export default function Marquee() {
  const base = 24; // speed
  return (
    <div className="py-8 border-y border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-10 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: base, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="text-sm text-neutral-600 dark:text-neutral-300">{name}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
