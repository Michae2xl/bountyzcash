"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(244,183,40,0.15)",
  borderColor = "rgba(244,183,40,0.26)",
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        border: `1px solid ${isHovered ? borderColor : "rgba(255,255,255,0.08)"}`,
        transition: "border-color 0.3s ease",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
