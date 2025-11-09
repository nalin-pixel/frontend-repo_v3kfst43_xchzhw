import { useState, useEffect } from 'react';
import { Rocket, Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem('kb-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    if (initial === 'dark') root.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('kb-theme', next);
    if (next === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
            <Rocket className="h-5 w-5 text-indigo-600" />
            <span>KnowBase AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Features</a>
            <a href="#security" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Security</a>
            <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Pricing</a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90">Get Started</a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            <a href="#features" className="block text-neutral-700 dark:text-neutral-300">Features</a>
            <a href="#security" className="block text-neutral-700 dark:text-neutral-300">Security</a>
            <a href="#pricing" className="block text-neutral-700 dark:text-neutral-300">Pricing</a>
            <a href="#contact" className="block text-neutral-700 dark:text-neutral-300">Contact</a>
            <a href="#get-started" className="block rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
