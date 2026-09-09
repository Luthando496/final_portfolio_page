import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-line/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-display text-lg font-bold text-ink">
            {profile.firstName}
            <span className="text-gradient">.</span>
          </a>
          <p className="mt-1.5 text-sm text-soft">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Designed & built
            with React + Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-btn">
            <Mail size={17} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="icon-btn"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="icon-btn"
          >
            <Linkedin size={17} />
          </a>
          <a href="#home" aria-label="Back to top" className="icon-btn ml-1">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
