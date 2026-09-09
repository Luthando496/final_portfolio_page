import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/portfolio';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  return 'dark';
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f9fd' : '#04060c');
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Backdrop for the mobile menu */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="pointer-events-auto fixed inset-0 z-0 bg-page/70 backdrop-blur-sm lg:hidden"
        />
      )}

      <div className="pointer-events-auto relative z-10 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-5xl sm:mt-4">
        <nav
          className={`nav-glass ${
            scrolled || open ? 'is-scrolled' : ''
          } flex h-14 items-center justify-between rounded-2xl pl-5 pr-2 sm:h-16 sm:pl-6 sm:pr-3`}
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
          >
            {profile.firstName}
            <span className="text-gradient">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === id ? 'bg-ink/10 text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="icon-btn"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-btn"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-btn"
            >
              <Linkedin size={16} />
            </a>
            <a href="#contact" className="btn btn-primary px-4 py-2 text-sm">
              Hire me
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-ink/10 hover:text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 lg:hidden">
            <div className="nav-glass is-scrolled overflow-hidden rounded-2xl p-3">
              <ul className="space-y-1">
                {LINKS.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active === id
                          ? 'bg-accent/10 text-accent'
                          : 'text-muted hover:bg-ink/5 hover:text-ink'
                      }`}
                    >
                      {label}
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          active === id ? 'bg-accent' : 'bg-soft/50'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 space-y-2 border-t border-line/10 pt-3">
                <div className="flex items-center gap-2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost flex-1 gap-2 py-2.5 text-xs"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost flex-1 gap-2 py-2.5 text-xs"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary flex-1 py-2.5 text-xs"
                  >
                    Hire me
                  </a>
                </div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="btn btn-ghost w-full gap-2 py-2.5 text-xs"
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

