import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';
import { SiLaravel, SiReact, SiMysql } from 'react-icons/si';

// Code lines to type out one by one
const CODE_LINES = [
  { type: 'open',    text: "const softwareEngineer = {" },
  { type: 'field',   key: 'name',        value: "'Prince Jasper Nuguid'" },
  { type: 'field',   key: 'degree',      value: "'BSIT — Pamantasan ng Cabuyao'" },
  { type: 'field',   key: 'stack',       value: "['React', 'Next.js', 'Laravel', 'React Native', 'MySQL']" },
  { type: 'field',   key: 'focus',       value: "'Creating impact through code'" },
  { type: 'field',   key: 'status',      value: "'Open to Opportunities ✦'" },
  { type: 'close',   text: "};" },
];

const CHAR_SPEED = 28;   // ms per character
const LINE_PAUSE = 180;  // ms pause between lines
const END_PAUSE  = 2800; // ms hold before restarting

function useCodeTyper(lines: typeof CODE_LINES) {
  const [lineIdx, setLineIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [revealed, setRevealed]   = useState<string[]>([]);
  const [done, setDone]           = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fullLine = (l: typeof CODE_LINES[number]) => {
    if (l.type === 'open' || l.type === 'close') return l.text!;
    return `  ${l.key}: ${l.value},`;
  };

  useEffect(() => {
    if (done) {
      t.current = setTimeout(() => {
        setRevealed([]);
        setLineIdx(0);
        setCharIdx(0);
        setDone(false);
      }, END_PAUSE);
      return () => { if (t.current) clearTimeout(t.current); };
    }

    if (lineIdx >= lines.length) { setDone(true); return; }

    const target = fullLine(lines[lineIdx]);

    if (charIdx < target.length) {
      t.current = setTimeout(() => setCharIdx(c => c + 1), CHAR_SPEED);
    } else {
      // line complete — commit and move to next
      t.current = setTimeout(() => {
        setRevealed(r => [...r, target]);
        setLineIdx(i => i + 1);
        setCharIdx(0);
      }, LINE_PAUSE);
    }

    return () => { if (t.current) clearTimeout(t.current); };
  }, [lineIdx, charIdx, done, lines]);

  // Build display: committed lines + currently typing line
  const currentTarget = lineIdx < lines.length ? fullLine(lines[lineIdx]) : '';
  const typing = currentTarget.slice(0, charIdx);

  return { revealed, typing, lineIdx };
}

// Syntax-color a single code line
function ColoredLine({ text }: { text: string }) {
  // open / close braces
  if (text === 'const softwareEngineer = {') {
    return (
      <p>
        <span className="text-purple-400">const </span>
        <span className="text-blue-400">softwareEngineer</span>
        <span className="text-slate-300"> = &#123;</span>
      </p>
    );
  }
  if (text === '};') return <p><span className="text-slate-300">&#125;;</span></p>;

  // field lines:  "  key: value,"
  const match = text.match(/^(\s+)(\w+):\s(.+),$/);
  if (match) {
    const [, indent, key, val] = match;
    const isString  = val.startsWith("'");
    const isArray   = val.startsWith('[');
    return (
      <p>
        <span>{indent}</span>
        <span className="text-slate-400">{key}:</span>
        <span> </span>
        {isString && <span className="text-emerald-300">{val}</span>}
        {isArray  && (
          <span className="text-sky-300">{val}</span>
        )}
        <span className="text-slate-300">,</span>
      </p>
    );
  }

  return <p className="text-slate-300">{text}</p>;
}

export const TechIllustration: React.FC = () => {
  const { revealed, typing, lineIdx } = useCodeTyper(CODE_LINES);

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-brand-600/30 via-skyAccent-400/20 to-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl -z-10" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col gap-3 sm:gap-4 relative overflow-hidden"
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <Terminal className="w-3 h-3 text-brand-500" />
            <span>@PJasper14:~$</span>
          </div>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-skyAccent-400 animate-pulse" />
        </div>

        {/* Animated code snippet */}
        <div className="p-3 sm:p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-[10px] sm:text-xs leading-relaxed overflow-hidden shadow-inner border border-slate-800/80 min-h-[120px] sm:min-h-[160px]">
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 mb-2 pb-1 border-b border-slate-800">
            <span>developerProfile.ts</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>

          {/* Committed lines */}
          {revealed.map((line, i) => (
            <ColoredLine key={i} text={line} />
          ))}

          {/* Currently typing line with cursor */}
          {lineIdx < CODE_LINES.length && (
            <p className="text-slate-300">
              {typing}
              <span className="inline-block w-0.5 h-3 ml-px align-middle bg-brand-400 animate-pulse rounded-sm" />
            </p>
          )}
        </div>

        {/* Mini tech cards — 2x2 grid */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-2 sm:p-2.5 rounded-xl bg-brand-500/10 dark:bg-brand-500/10 border border-brand-500/30 flex items-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#61DAFB] shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Web</span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-white truncate">React</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-2 sm:p-2.5 rounded-xl bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 flex items-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#61DAFB] shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Mobile</span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-white truncate">React Native</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-2 sm:p-2.5 rounded-xl bg-red-500/10 dark:bg-red-500/10 border border-red-500/30 flex items-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <SiLaravel className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF2D20] shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Backend</span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-white truncate">Laravel</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-2 sm:p-2.5 rounded-xl bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 flex items-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <SiMysql className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4479A1] shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Database</span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-white truncate">MySQL</span>
            </div>
          </motion.div>
        </div>

        {/* Animated background orbs inside the card */}
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 right-8 w-24 h-24 rounded-full bg-brand-500/10 dark:bg-brand-500/15 blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -14, 0], y: [0, 16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-16 left-6 w-20 h-20 rounded-full bg-skyAccent-400/10 dark:bg-skyAccent-400/15 blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-xl pointer-events-none"
        />
      </motion.div>
    </div>
  );
};
