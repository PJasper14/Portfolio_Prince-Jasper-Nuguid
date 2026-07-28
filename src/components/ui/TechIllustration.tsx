import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Smartphone, CheckCircle, Sparkles } from 'lucide-react';

export const TechIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Glowing Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-brand-600/30 via-skyAccent-400/20 to-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl -z-10" />

      {/* Main Glass Workspace Graphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-full glass-panel rounded-3xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <Terminal className="w-3 h-3 text-brand-500" />
            <span>prince@developer:~$</span>
          </div>
          <Sparkles className="w-4 h-4 text-skyAccent-400 animate-pulse" />
        </div>

        {/* Code Snippet Box */}
        <div className="my-4 p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed overflow-hidden shadow-inner border border-slate-800/80">
          <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2 pb-1 border-b border-slate-800">
            <span>developerProfile.ts</span>
            <span className="text-emerald-400">● Live Status: Ready to Work</span>
          </div>
          <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
          <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">'Prince Jasper G. Nuguid'</span>,</p>
          <p className="pl-4"><span className="text-slate-400">education:</span> <span className="text-emerald-300">'BS Information Technology'</span>,</p>
          <p className="pl-4"><span className="text-slate-400">institution:</span> <span className="text-emerald-300">'Pamantasan ng Cabuyao'</span>,</p>
          <p className="pl-4"><span className="text-slate-400">skills:</span> [<span className="text-sky-300">'React'</span>, <span className="text-sky-300">'Laravel'</span>, <span className="text-sky-300">'TypeScript'</span>, <span className="text-sky-300">'MySQL'</span>],</p>
          <p className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-amber-300">'Building impactful software'</span></p>
          <p>&#125;;</p>
        </div>

        {/* Floating Mini Tech Cards */}
        <div className="grid grid-cols-3 gap-2 mt-auto">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center gap-2"
          >
            <Code className="w-4 h-4 text-brand-600 dark:text-skyAccent-400 shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Web</span>
              <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">React & TS</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-purple-500 shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Mobile</span>
              <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">React Native</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2"
          >
            <Database className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Backend</span>
              <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">Laravel</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Accent Badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl border border-brand-500/40"
        >
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>BSIT Grad 2026</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
