import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Marquee from './components/Marquee';
import CTA from './components/CTA';
import Footer from './components/Footer';

function GradientBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 blur-3xl opacity-40 dark:opacity-30"
        style={{ width: 900, height: 900, background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <GradientBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        {/* Security + CTA Section */}
        <section id="security" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Security first, offline capable</h2>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">We prioritize privacy with encryption at rest and role‑based access. Works offline as an installable PWA with seamless sync when you’re back online.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• AES‑256 encryption</li>
                <li>• JWT with httpOnly cookies</li>
                <li>• Rate limiting & IP filtering</li>
                <li>• GDPR tools for export and deletion</li>
              </ul>
              <a id="get-started" href="#" className="mt-6 inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90">Get Started</a>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <p className="font-semibold">Local AI</p>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300">Run embeddings and summarization with open models.</p>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <p className="font-semibold">Vector DB</p>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300">FAISS or Chroma for lightning‑fast semantic search.</p>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <p className="font-semibold">Collaboration</p>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300">Real‑time notes, comments, and knowledge graphs.</p>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <p className="font-semibold">PWA</p>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300">Offline access, push notifications, one‑click install.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
