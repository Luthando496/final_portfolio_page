import {
  Code,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MonitorSmartphone,
  Server,
  Sparkles,
} from 'lucide-react';
import { bio, focusAreas, profile, stats } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FOCUS_ICONS = {
  code: Code,
  ui: MonitorSmartphone,
  api: Server,
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            step="01"
            label="About"
            title={
              <>
                Nice to meet you — I'm <span className="text-gradient">Luthando.</span>
              </>
            }
            sub="Frontend-focused developer. I take ideas and turn them into clean, fast, and useful web experiences."
          />
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -left-8 -top-8 -z-10 h-44 w-44 rounded-full bg-teal-400/15 blur-[80px]" />
              <div aria-hidden className="absolute -bottom-10 -right-8 -z-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-[80px]" />

              <div className="glass rounded-3xl p-3">
                <img
                  src={profile.portrait}
                  alt="Portrait of Luthando Didiza"
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="glass absolute -bottom-6 right-5 flex items-center gap-3 rounded-2xl px-5 py-3 sm:right-8">
                <Sparkles size={20} className="text-accent" />
                <div>
                  <p className="font-display text-xl font-bold leading-none text-ink">3+</p>
                  <p className="mt-1.5 text-[10px] font-medium uppercase tracking-widest text-soft">
                    Years experience
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + focus */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="space-y-5">
                {bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-ink/[0.04] px-4 py-2 text-sm text-ink">
                  <MapPin size={14} className="text-accent" /> {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-ink/[0.04] px-4 py-2 text-sm text-ink transition hover:border-accent/40 hover:text-accent"
                >
                  <Mail size={14} className="text-accent" /> {profile.email}
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-ink/[0.04] px-4 py-2 text-sm text-ink">
                  <GraduationCap size={14} className="text-accent" /> Diploma · Software Engineering
                </span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-soft">
                What I focus on
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {focusAreas.map(({ icon, title, text }) => {
                  const Icon = FOCUS_ICONS[icon];
                  return (
                    <div key={title} className="glass glass-card rounded-2xl p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={20} />
                      </div>
                      <h4 className="mt-4 font-semibold text-ink">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <a href={profile.resumeUrl} download className="btn btn-ghost mt-10 px-6 py-3 text-sm">
                <Download size={16} /> Grab my résumé
              </a>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={100} className="mt-20">
          <div className="glass rounded-3xl p-4 sm:p-6">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line/10 bg-ink/[0.03] px-4 py-7 text-center"
                >
                  <dd className="text-gradient font-display text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 text-[11px] font-medium uppercase tracking-wider text-soft sm:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
