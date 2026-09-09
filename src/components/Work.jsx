import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { profile, projects } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function trackPointer(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            step="02"
            label="Work"
            title={
              <>
                Selected <span className="text-gradient">work.</span>
              </>
            }
            sub="A handful of projects I designed and built — from first wireframe to deployed product."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {projects.map((project, index) => {
            const featured = index === projects.length - 1;
            return (
              <Reveal
                key={project.title}
                delay={(index % 2) * 90}
                className={featured ? 'md:col-span-2' : ''}
              >
                <article
                  onMouseMove={trackPointer}
                  className={`spotlight spotlight-card glass glass-card group flex h-full flex-col overflow-hidden rounded-3xl ${
                    featured ? 'md:flex-row' : ''
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      featured ? 'md:min-h-[24rem] md:w-1/2' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className={`w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045] ${
                        featured ? 'h-60 md:absolute md:inset-0 md:h-full' : 'h-60 sm:h-72'
                      }`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
                    <div
                      aria-hidden
                      className="glass absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ExternalLink size={16} />
                    </div>
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-6 sm:p-7 ${
                      featured ? 'md:w-1/2 md:justify-center' : ''
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/15 bg-accent/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent"
                    >
                      View live site
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-14 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-7 py-3.5 text-sm"
          >
            <Github size={16} /> Browse more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
