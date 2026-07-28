import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, Facebook, Download, MapPin, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Let's Connect"
          title="Get In Touch"
          subtitle="I am actively seeking entry-level software engineering and web development opportunities. Reach out directly via email or connect across my professional networks."
        />

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Availability Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-4 sm:p-6 rounded-2xl glass-card border border-brand-500/30 bg-gradient-to-r from-brand-600/10 via-skyAccent-400/5 to-purple-600/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-skyAccent-400">
                    Current Status
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Open for Hire
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Available for Entry-Level & Junior Roles
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-skyAccent-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-brand-600 dark:text-skyAccent-400 shrink-0" />
                <span>Fast response within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Main Direct Communication Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Direct Email Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-brand-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-skyAccent-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Primary Contact
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Send Direct Email
                  </h4>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-1 break-all">
                    {PERSONAL_INFO.email}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Have an open software developer role, internship opportunity, or technical inquiry? My inbox is directly monitored.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-95 relative"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"
                      >
                        <Check className="w-4 h-4" />
                        <span>Copied Address!</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {/* Open Email Client Button */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Entry-Level%20Opportunity%20-%20Prince%20Jasper%20Nuguid`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-600/25 transition-all active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Email App</span>
                </a>
              </div>
            </motion.div>

            {/* Resume Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-brand-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Download className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    PDF Resume
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Curriculum Vitae
                  </h4>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Download Résumé
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Get an offline copy detailing my BS Information Technology degree, technical skill set, certifications, and municipal internship accomplishments.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Résumé file download initialized. Contact Prince Jasper Nuguid for full document access!");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 border border-slate-800 dark:border-slate-700 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Résumé (PDF)</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Social Profiles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                Professional & Social Profiles
              </h4>
              <span className="text-xs text-slate-500 font-mono">Connect online</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Professional Network</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-skyAccent-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">GitHub</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Code Repositories</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-skyAccent-400 transition-colors" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-500/50 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">Facebook</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Social Connection</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-skyAccent-400 transition-colors" />
              </a>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
