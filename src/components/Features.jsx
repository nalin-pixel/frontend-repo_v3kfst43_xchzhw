import { Shield, Search, FileText, Users, Workflow, Network } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Semantic Search',
    desc: 'Natural‑language search with local embeddings for instant, relevant answers.'
  },
  {
    icon: FileText,
    title: 'Documents & Notes',
    desc: 'Upload PDF, DOCX, TXT, MD and capture rich notes with markdown support.'
  },
  {
    icon: Users,
    title: 'Workspaces & Roles',
    desc: 'Collaborate securely with Admin, Editor, Viewer, and Guest access.'
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade Security',
    desc: 'AES‑256 encryption at rest, JWT auth, rate limiting, GDPR controls.'
  },
  {
    icon: Workflow,
    title: 'Async Processing',
    desc: 'Background indexing with Redis workers for low‑latency search.'
  },
  {
    icon: Network,
    title: 'Knowledge Graph',
    desc: 'Visualize relationships between topics, tags, and documents.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Built for deep knowledge work</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">A modern toolkit that keeps your team in flow while AI brings context to everything.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:shadow-lg transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
