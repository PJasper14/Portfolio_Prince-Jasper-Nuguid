import { useEffect, useRef, useCallback } from 'react';

const TRAIL_LENGTH = 40;
const DOT_LIFETIME = 500;
const MIN_DIST = 4;

// Color stops that shift as the trail ages — brand palette
const COLORS = [
  '#38bdf8', // skyAccent — newest (brightest)
  '#60a5fa', // blue-400
  '#2563eb', // brand-600
  '#818cf8', // indigo-400
  '#a78bfa', // violet-400 — oldest (fades to purple)
];

export const CursorTrail = () => {
  const dotsRef = useRef<{ id: number; el: HTMLDivElement }[]>([]);
  const counterRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spawnDot = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;

    const id = counterRef.current++;

    // Randomise size slightly for organic feel
    const size = 5 + Math.random() * 6;

    // Pick color based on position in cycle
    const color = COLORS[id % COLORS.length];

    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      background: transparent;
      box-shadow: 0 0 ${size * 2}px ${size}px ${color}33, 0 0 ${size * 4}px ${size * 2}px ${color}18;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
      transition: opacity ${DOT_LIFETIME}ms cubic-bezier(0.4, 0, 1, 1),
                  transform ${DOT_LIFETIME}ms cubic-bezier(0.4, 0, 1, 1);
      z-index: 9999;
      will-change: opacity, transform;
    `;

    containerRef.current.appendChild(el);
    dotsRef.current.push({ id, el });

    // Trigger fade + shrink on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '0';
        el.style.transform = 'translate(-50%, -50%) scale(0)';
      });
    });

    // Remove from DOM after fade
    setTimeout(() => {
      el.remove();
      dotsRef.current = dotsRef.current.filter(d => d.id !== id);
    }, DOT_LIFETIME + 50);

    // Keep trail length in check
    while (dotsRef.current.length > TRAIL_LENGTH) {
      const oldest = dotsRef.current.shift();
      oldest?.el.remove();
    }
  }, []);

  useEffect(() => {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;';
    document.body.appendChild(container);
    containerRef.current = container;

    let lastX = -999;
    let lastY = -999;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) return;
      lastX = e.clientX;
      lastY = e.clientY;
      spawnDot(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      container.remove();
    };
  }, [spawnDot]);

  return null;
};
