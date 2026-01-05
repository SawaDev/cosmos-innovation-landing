"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "normal" | "bright" | "distant";
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  delay: number;
}

const StarField = () => {
  const [mounted, setMounted] = useState(false);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo<Star[]>(() => {
    if (!mounted) return [];
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      type: Math.random() > 0.9 ? "bright" : Math.random() > 0.5 ? "normal" : "distant",
    }));
  }, [mounted]);

  // Generate shooting stars periodically
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 60,
        startY: Math.random() * 40,
        delay: 0,
      };
      setShootingStars(prev => [...prev.slice(-3), newStar]);
    }, 4000);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static stars with twinkle */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.type === "bright" ? 1 : star.type === "normal" ? 0.7 : 0.3,
            boxShadow: star.type === "bright" 
              ? `0 0 ${star.size * 4}px hsl(var(--primary) / 0.6)` 
              : "none",
          } as React.CSSProperties}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-24 h-0.5 rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
            rotate: -35,
            scale: 0.5 
          }}
          animate={{ 
            x: 400, 
            y: 300, 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.3]
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.1, 0.8, 1]
          }}
        />
      ))}

      {/* Nebula clouds */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full animate-nebula"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full animate-nebula"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "5s",
        }}
      />
    </div>
  );
};

export default StarField;
