import { Github, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} KnowBase AI. All rights reserved.</p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">Open‑source friendly. Built with local AI and privacy by design.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#security" className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:underline">
              <ShieldCheck className="h-4 w-4" /> Security
            </a>
            <a href="mailto:hello@knowbase.ai" className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:underline">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 hover:underline">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
