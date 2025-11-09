import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
            Next‑gen knowledge + semantic search
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            KnowBase AI
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
            Organize, search, and discover insights across your team’s knowledge with local, open‑source AI. Fast, secure, and installable as a PWA.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90">
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800">
              View Demo
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <li>• Local embeddings (sentence-transformers)</li>
            <li>• Vector search (FAISS/Chroma)</li>
            <li>• Offline-first PWA</li>
            <li>• Roles & workspaces</li>
          </ul>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-900">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-950/40"></div>
        </div>
      </div>
    </section>
  );
}
