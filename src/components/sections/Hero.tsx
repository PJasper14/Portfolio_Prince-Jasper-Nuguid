import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA } from '../../data/portfolioData';
import { TechIllustration } from '../ui/TechIllustration';
import { TechIcon, TECH_ICON_MAP } from '../ui/TechIcon';

const ALL_HEADLINES = [PERSONAL_INFO.primaryHeadline];

const TYPING_SPEED = 55;
const DELETING_SPEED = 30;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

// Driven by SKILLS_DATA — pick the 6 most defining techs by name
const CORE_TECH_NAMES = ['React', 'Next.js', 'Laravel', 'React Native', 'MySQL'];
const CORE_TECHS = SKILLS_DATA.filter(s => CORE_TECH_NAMES.includes(s.name))
  .sort((a, b) => CORE_TECH_NAMES.indexOf(a.name) - CORE_TECH_NAMES.indexOf(b.name));

function useTypewriter(lines: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = lines[lineIndex];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout.current = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPE);
      }
    } else if (phase === 'pausing') {
      timeout.current = setTimeout(() => setPhase('deleting'), 0);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        timeout.current = setTimeout(() => {
          setLineIndex((i) => (i + 1) % lines.length);
          setPhase('waiting');
        }, PAUSE_AFTER_DELETE);
      }
    } else if (phase === 'waiting') {
      timeout.current = setTimeout(() => setPhase('typing'), 0);
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [displayed, phase, lineIndex, lines]);

  return { displayed, isTyping: phase === 'typing' || phase === 'pausing' };
}

export const Hero: React.FC = () => {
  const { displayed, isTyping } = useTypewriter(ALL_HEADLINES);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-skyAccent-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Typewriter Sub-headline */}
            <h2 className="mt-3 text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 min-h-[2rem]">
              <GraduationCap className="w-6 h-6 text-brand-600 dark:text-skyAccent-400 shrink-0" />
              <span>
                {displayed}
                {/* Blinking cursor */}
                <span
                  className={`inline-block w-0.5 h-5 ml-0.5 align-middle bg-brand-600 dark:bg-skyAccent-400 rounded-full ${
                    isTyping ? 'animate-pulse' : 'opacity-100'
                  }`}
                />
              </span>
            </h2>

            {/* Summary narrative */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Tech Tag Badges */}
            <div className="mt-6 flex flex-col gap-2">
              {/* Styled micro-label */}
              <div className="inline-flex items-center gap-1.5">
                <span className="w-3 h-px bg-brand-500 dark:bg-skyAccent-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 dark:text-skyAccent-400">
                  Core Tech
                </span>
                <span className="w-3 h-px bg-brand-500 dark:bg-skyAccent-400" />
              </div>

              {/* Badges row */}
              <div className="flex flex-wrap gap-2">
                {CORE_TECHS.map((skill, i) => {
                  const iconEntry = TECH_ICON_MAP[skill.name];
                  const accentColor = iconEntry?.color ?? '#6366f1';
                  return (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                      style={{ borderLeftColor: accentColor }}
                      className="inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 rounded-lg text-xs font-mono font-semibold
                        bg-white dark:bg-slate-900
                        border border-slate-200 dark:border-slate-700 border-l-2
                        text-slate-700 dark:text-slate-200
                        shadow-sm hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-200 cursor-default"
                    >
                      <TechIcon name={skill.name} size={13} colored />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-lg shadow-brand-600/25 hover:shadow-glow-primary transition-all duration-200 active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

          {/* Right Hero Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <TechIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
