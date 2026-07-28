import React from 'react';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiLaravel,
  SiTailwindcss, SiBootstrap, SiVite, SiVuedotjs, SiAngular,
  SiPhp, SiPython, SiNodedotjs, SiGraphql,
  SiFlutter, SiDart, SiExpo,
  SiMysql, SiSqlite, SiMongodb,
  SiGit, SiGithub, SiFigma, SiCanva,
  SiHtml5, SiCss3,
} from 'react-icons/si';
import { FaMicrosoft, FaNetworkWired, FaTools, FaDesktop, FaDraftingCompass, FaJava } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

// Map skill name → { icon, color }
export const TECH_ICON_MAP: Record<string, { icon: IconType; color: string }> = {
  // Frontend — languages
  'HTML5':        { icon: SiHtml5,           color: '#E34F26' },
  'CSS3':         { icon: SiCss3,            color: '#1572B6' },
  'JavaScript':   { icon: SiJavascript,      color: '#F7DF1E' },
  'TypeScript':   { icon: SiTypescript,      color: '#3178C6' },

  // Frontend — frameworks & tools
  'React':        { icon: SiReact,           color: '#61DAFB' },
  'Angular':      { icon: SiAngular,         color: '#DD0031' },
  'Vue':          { icon: SiVuedotjs,        color: '#42B883' },
  'Next.js':      { icon: SiNextdotjs,       color: '#000000' },
  'Vite':         { icon: SiVite,            color: '#646CFF' },
  'Tailwind CSS': { icon: SiTailwindcss,     color: '#06B6D4' },
  'Bootstrap':    { icon: SiBootstrap,       color: '#7952B3' },

  // Backend
  'PHP':          { icon: SiPhp,             color: '#777BB4' },
  'Python':       { icon: SiPython,          color: '#3776AB' },
  'Java':         { icon: FaJava,            color: '#007396' },
  'Node.js':      { icon: SiNodedotjs,       color: '#339933' },
  'Laravel':      { icon: SiLaravel,         color: '#FF2D20' },
  'GraphQL':      { icon: SiGraphql,         color: '#E10098' },

  // Mobile
  'React Native': { icon: SiReact,           color: '#61DAFB' },
  'Flutter':      { icon: SiFlutter,         color: '#02569B' },
  'Dart':         { icon: SiDart,            color: '#0175C2' },
  'Expo':         { icon: SiExpo,            color: '#000020' },

  // Database
  'MySQL':        { icon: SiMysql,           color: '#4479A1' },
  'SQLite':       { icon: SiSqlite,          color: '#003B57' },
  'MongoDB':      { icon: SiMongodb,         color: '#47A248' },

  // Tools
  'Git':          { icon: SiGit,             color: '#F05032' },
  'GitHub':       { icon: SiGithub,          color: '#181717' },
  'VS Code':      { icon: VscVscode,         color: '#007ACC' },
  'Figma':        { icon: SiFigma,           color: '#F24E1E' },
  'Canva':        { icon: SiCanva,           color: '#00C4CC' },
  'Microsoft Office': { icon: FaMicrosoft,   color: '#D83B01' },

  // Other
  'Computer Networking':    { icon: FaNetworkWired, color: '#6366F1' },
  'Technical Troubleshooting': { icon: FaTools,    color: '#F59E0B' },
  'IT Support':             { icon: MdSupportAgent, color: '#10B981' },
  'Graphic Design':         { icon: FaDraftingCompass, color: '#EC4899' },
  'System Analysis & Design': { icon: FaDesktop,  color: '#8B5CF6' },
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  /** If true, uses the brand color; if false, uses slate/neutral */
  colored?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 16, className = '', colored = true }) => {
  const entry = TECH_ICON_MAP[name];
  if (!entry) return null;

  const Icon = entry.icon;
  const color = colored ? entry.color : 'currentColor';

  // Next.js icon is black — invert in dark mode
  const extraClass = name === 'Next.js' || name === 'GitHub' || name === 'Expo'
    ? 'dark:invert'
    : '';

  return (
    <Icon
      size={size}
      style={{ color }}
      className={`${extraClass} ${className} shrink-0`}
    />
  );
};
