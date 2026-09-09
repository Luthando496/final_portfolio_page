import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile, technologies } from '../data/portfolio';
import Reveal from './Reveal';

function trackPointer(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export default function Hero() {
  const sequence = profile.roles.flatMap((role) => [role, 2200]);

  return (
    <section
      id="home"
      onMouseMove={trackPointer}
      className="spotlight relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-44 pt-36 sm:pt-44"
    >
      {/* Centre glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-[110px] sm:h-96 sm:w-[32rem]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            {profile.availability}
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            <span className="block">Luthando</span>
            <span className="text-gradient block">Didiza.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-7 flex h-9 items-center justify-center text-xl font-light text-ink/90 sm:text-3xl">
            <span className="font-semibold text-accent">
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                aria-label={profile.role}
              />
            </span>
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I craft fast, elegant web experiences for startups and businesses that want to stand
            out — clear design, clean code, and care in every detail.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a href="#work" className="btn btn-primary w-full px-8 py-4 text-sm sm:w-auto">
              View my work <ArrowRight size={17} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn btn-ghost w-full px-8 py-4 text-sm sm:w-auto"
            >
              <Download size={17} /> Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-btn h-11 w-11"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-btn h-11 w-11"
            >
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-btn h-11 w-11">
              <Mail size={18} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Tech marquee */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 border-t border-line/10 bg-page/70 py-5 backdrop-blur-md sm:py-6"
      >
        <div className="marquee">
          <div className="marquee-inner">
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee-track">
                {technologies.map((tech) => (
                  <span
                    key={`${copy}-${tech}`}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-soft sm:text-sm"
                  >
                    {tech}
                    <span className="text-accent/80">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
