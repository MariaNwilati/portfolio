import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const SpiderWebBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate dots with fixed positions
  const dots = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
  }, []);

  // Generate connections between nearby dots
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const distance = Math.sqrt(
          Math.pow(dots[i].x - dots[j].x, 2) + Math.pow(dots[i].y - dots[j].y, 2)
        );
        if (distance < 25) {
          lines.push({
            id: `${i}-${j}`,
            x1: dots[i].x,
            y1: dots[i].y,
            x2: dots[j].x,
            y2: dots[j].y,
            distance,
          });
        }
      }
    }
    return lines;
  }, [dots]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines */}
        {connections.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="currentColor"
            className="text-pink-500/10"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              pathLength: { duration: 2, delay: Math.random() * 2 },
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}

        {/* Dots */}
        {dots.map((dot) => (
          <motion.circle
            key={dot.id}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r={dot.size}
            className="fill-pink-500/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              cx: `${dot.x + (mousePosition.x - 0.5) * 2}%`,
              cy: `${dot.y + (mousePosition.y - 0.5) * 2}%`,
            }}
            transition={{
              scale: {
                duration: 3 + dot.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 3 + dot.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              cx: { duration: 0.3, ease: 'easeOut' },
              cy: { duration: 0.3, ease: 'easeOut' },
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default SpiderWebBackground;
