import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Layers, Code } from 'lucide-react';
import { ProjectItem } from '../../types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl glass-panel bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 text-slate-800 dark:text-slate-200 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable inner */}
          <div className="overflow-y-auto max-h-[90vh] modal-scroll">

          {/* Hero Image / Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-brand-600 text-white shadow-md">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Tagline & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
                {project.tagline}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-skyAccent-400 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Modules (if any) */}
            {project.modules && project.modules.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/50">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  <Layers className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                  System Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-500/5 border border-rose-500/20 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  The Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-skyAccent-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                <Code className="w-4 h-4 text-brand-600 dark:text-skyAccent-400" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    <TechIcon name={tech} size={12} colored />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Lessons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Technical Challenges
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
                  "{project.challenges}"
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-skyAccent-400 mb-1">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Key Takeaway & Growth
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {project.lessonsLearned}
                </p>
              </div>
            </div>

          </div>
          </div>{/* end modal-scroll inner */}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
