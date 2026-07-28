import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Continuous Learning"
          title="Certifications & Training"
          subtitle="Verified technical credentials and industry training completed across networking, cybersecurity, web development, UX, and IT support."
        />

        {/* Grouped Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((group, groupIdx) => (
            <motion.div
              key={group.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="rounded-2xl glass-card border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Provider Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-skyAccent-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {group.provider}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {group.items.length} {group.items.length === 1 ? 'Cert' : 'Certs'}
                  </span>
                </div>

                {/* Items under Provider */}
                <div className="space-y-4">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Skills Tags */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pl-6 pt-1">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200/50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-300/30 dark:border-slate-700/40"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Provider Credential</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
