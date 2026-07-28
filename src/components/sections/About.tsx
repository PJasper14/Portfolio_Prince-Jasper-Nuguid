import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Lightbulb, Compass, Award, Heart } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const PILLARS = [
    {
      icon: BookOpen,
      title: 'Academic Foundation',
      desc: 'Graduated with a BS in Information Technology from Pamantasan ng Cabuyao, mastering full-stack web, mobile, and system design principles.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver Mindset',
      desc: 'Passionate about analyzing operational challenges and building intuitive, practical digital solutions that streamline workflows.'
    },
    {
      icon: Compass,
      title: 'Continuous Learner',
      desc: 'Consistently updating my skills across modern frameworks like React, TypeScript, Laravel, and React Native to stay ahead in tech.'
    },
    {
      icon: Target,
      title: 'Career Aspiration',
      desc: 'Eager to join an engineering team where I can contribute fresh perspectives, learn from senior mentors, and grow into a top-tier engineer.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="My Journey into Software Development"
          subtitle="Driven by curiosity, structured logic, and a passion for engineering practical digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed"
          >
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-600 dark:text-skyAccent-400" />
                The Story Behind the Code
              </h3>
              
              {PERSONAL_INFO.aboutNarrative.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-brand-600 dark:text-skyAccent-400">● Fresh IT Graduate 2026</span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Passionate & Adaptable
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-skyAccent-400 group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-skyAccent-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
