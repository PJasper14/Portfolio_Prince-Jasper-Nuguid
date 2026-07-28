import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work Experience"
          title="Professional Internship Timeline"
          subtitle="Practical industry experience gained in municipal software development, IT operations, graphic design, and technical support."
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/40 dark:border-brand-500/30"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-600 ring-4 ring-slate-100 dark:ring-slate-900 shadow-md" />

              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 mb-1 text-[10px] uppercase font-bold tracking-wider rounded bg-brand-500/10 text-brand-600 dark:text-skyAccent-400">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-skyAccent-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Accomplishments */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Contributions & Impact:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-skyAccent-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Used */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">Utilized:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
