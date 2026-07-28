import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Smartphone, Database, Wrench, Cpu, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SKILLS_DATA } from '../../data/portfolioData';

const CATEGORIES = [
  { name: 'All', icon: Code },
  { name: 'Programming', icon: Code },
  { name: 'Frontend', icon: Layout },
  { name: 'Backend', icon: Server },
  { name: 'Mobile', icon: Smartphone },
  { name: 'Database', icon: Database },
  { name: 'Tools', icon: Wrench },
  { name: 'Other', icon: Cpu },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Proficiency"
          title="Skills & Competencies"
          subtitle="A solid foundation across modern full-stack web, mobile app development, system tools, and technical operations."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-105'
                    : 'bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Badges / Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-mono font-semibold text-brand-600 dark:text-skyAccent-400">
                    {skill.category}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-skyAccent-400 transition-colors">
                  {skill.name}
                </div>
                {skill.level && (
                  <div className="mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    {skill.level}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
