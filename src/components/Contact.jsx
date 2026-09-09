import { useState } from 'react';
import { BadgeCheck, Github, Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const inputClass =
  'w-full rounded-xl border border-line/15 bg-ink/[0.04] px-4 py-3 text-sm text-ink placeholder:text-soft outline-none transition duration-200 focus:border-accent/60 focus:ring-2 focus:ring-accent/25';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.');
      setSent(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("That email address doesn't look right — mind double-checking?");
      setSent(false);
      return;
    }

    const subject = `Portfolio inquiry from ${name}`;
    const body = `Hi Luthando,\n\n${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setError('');
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            step="04"
            label="Contact"
            title={
              <>
                Let's build something <span className="text-gradient">great.</span>
              </>
            }
            sub="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-14">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                  <Mail size={19} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1.5 block break-all text-lg font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                  <MapPin size={19} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                    Location
                  </p>
                  <p className="mt-1.5 text-lg text-ink">{profile.location}</p>
                  <p className="mt-1 text-sm text-soft">Working remotely worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line/10 bg-ink/[0.04] text-accent">
                  <BadgeCheck size={19} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-soft">
                    Availability
                  </p>
                  <p className="mt-1.5 text-lg text-accent">
                    Open to freelance & full-time
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
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
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn btn-ghost gap-2 px-5 py-2.5 text-xs"
                >
                  Résumé
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={110} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-9" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-soft"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-soft"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-soft"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-6 space-y-4">
                {error && (
                  <p className="rounded-xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-500">
                    {error}
                  </p>
                )}
                {sent && (
                  <p className="flex items-center gap-2 rounded-xl border border-accent/25 bg-accent/10 px-4 py-3 text-sm text-accent">
                    <Sparkles size={16} />
                    Thanks {form.name.trim()}! Your email app should open — just hit send and I'll
                    reply soon.
                  </p>
                )}

                <button type="submit" className="btn btn-primary w-full py-4 text-sm">
                  Send message <Send size={16} />
                </button>
                <p className="text-center text-xs text-soft">Usually replies within 48 hours.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

