import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { education, experience, profile, skills } from '../data/portfolio';
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

function TimelineCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="glass glass-card rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg font-semibold text-ink">{item.role}</h4>
          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {item.period}
          </span>
        </div>
        <p className="text-gradient mt-1.5 text-sm font-semibold">{item.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
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
            <div className="space-y-5">
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
            <div className="space-y-5">
              {education.map((item, index) => (
                <TimelineCard key={item.period} item={item} delay={index * 90} />
              ))}
            </div>
          </div>
        </div>

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
            <SkillBars />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
