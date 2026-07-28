import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Qualifications"
          title="Education & Academic Background"
          subtitle="Formal academic preparation in Information Technology at Pamantasan ng Cabuyao."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/30 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 mb-1 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {EDUCATION_DATA.status}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1 shrink-0">
                <span className="flex items-center gap-1.5 font-bold text-brand-600 dark:text-skyAccent-400">
                  <Calendar className="w-4 h-4" />
                  {EDUCATION_DATA.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {EDUCATION_DATA.location}
                </span>
              </div>
            </div>

            {/* Coursework & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Relevant Coursework */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Highlights */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  <Award className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                  Academic Highlights
                </h4>
                <div className="space-y-3">
                  {EDUCATION_DATA.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
