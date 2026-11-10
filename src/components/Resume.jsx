import { useEffect, useRef, useState } from 'react';
import { Award, BadgeCheck, Briefcase, ExternalLink, GraduationCap, MapPin, Server } from 'lucide-react';
import { achievements, certifications, education, experience, itSkills, profile, skills } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function SkillBars() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="mb-3 flex items-baseline justify-between gap-4 text-sm">
            <span className="font-medium text-ink">{skill.name}</span>
            <span className="tabular-nums text-soft">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink/5 ring-1 ring-inset ring-line/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-[0_0_14px_rgba(20,184,166,0.45)] transition-[width] duration-[1300ms] ease-out"
              style={{ width: inView ? `${skill.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineCard({ item, delay, last }) {
  return (
    <Reveal delay={delay} className="relative pl-8">
      {!last && (
        <span aria-hidden className="absolute -bottom-6 left-[7px] top-6 w-px bg-gradient-to-b from-accent/40 to-line/10" />
      )}
      <span
        aria-hidden
        className={`absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-2 ${
          item.current
            ? 'border-accent bg-accent shadow-[0_0_0_5px_rgb(var(--accent)/0.18)]'
            : 'border-accent/60 bg-page'
        }`}
      />
      <article className={`glass glass-card rounded-2xl p-6 ${item.current ? 'border-accent/30' : ''}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg font-semibold text-ink">{item.role}</h4>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {item.current && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
            {item.current ? 'Present' : item.period}
          </span>
        </div>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="text-gradient font-semibold">{item.company}</span>
          {item.location && (
            <span className="inline-flex items-center gap-1 text-soft">
              <MapPin size={12} /> {item.location}
            </span>
          )}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line/10 bg-ink/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            step="03"
            label="Resume"
            title={
              <>
                Experience & <span className="text-gradient">skills.</span>
              </>
            }
            sub="Where I've worked, what I've learned, and the tools I reach for every day."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:mt-20 lg:gap-14">
          {/* Experience */}
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                  <Briefcase size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Experience</h3>
              </div>
            </Reveal>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <TimelineCard key={item.period} item={item} delay={index * 90} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal delay={60}>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Education</h3>
              </div>
            </Reveal>
            <div className="space-y-6">
              {education.map((item, index) => (
                <TimelineCard key={item.period} item={item} delay={index * 90} />
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={100} className="mt-14">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Recognition</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">Achievements &amp; certifications</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group flex items-center gap-4 rounded-2xl border border-line/10 bg-ink/[0.03] p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <BadgeCheck size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-soft">Certificate</p>
                    <h4 className="mt-0.5 font-semibold text-ink transition-colors group-hover:text-accent">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <ExternalLink size={16} className="shrink-0 text-soft transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>

            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line/10 bg-ink/[0.02] p-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
                  <span className="text-sm leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={80} className="mt-14">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">Core toolkit</h3>
                <p className="mt-2 text-sm text-muted">
                  Everyday technologies I use to ship products.
                </p>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="btn btn-ghost self-start px-5 py-2.5 text-xs sm:self-auto"
              >
                Download full CV
              </a>
            </div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-soft">Frontend development</h4>
            <SkillBars />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
