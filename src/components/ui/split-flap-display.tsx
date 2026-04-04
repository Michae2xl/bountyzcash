"use client";

import { useEffect, useRef, useState } from "react";

interface SplitFlapDisplayProps {
  value: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  staggerDelay?: number;
  accentColor?: string;
}

const CHAR_SET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\u00B7\u2014\u25CF";

const SIZE_STYLES = {
  sm: { width: "1.5rem", height: "2rem", fontSize: "1rem" },
  md: { width: "2.25rem", height: "3rem", fontSize: "1.5rem" },
  lg: { width: "3rem", height: "4rem", fontSize: "2rem" },
} as const;

function getCharIndex(char: string): number {
  const idx = CHAR_SET.indexOf(char.toUpperCase());
  return idx === -1 ? 0 : idx;
}

interface FlapCellProps {
  targetChar: string;
  delay: number;
  size: "sm" | "md" | "lg";
  accentColor: string;
}

function FlapCell({ targetChar, delay, size, accentColor }: FlapCellProps) {
  const [currentChar, setCurrentChar] = useState(" ");
  const [isFlipping, setIsFlipping] = useState(false);
  const animFrameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const targetIndex = getCharIndex(targetChar);
    let currentIndex = 0;

    const startTimeout = setTimeout(() => {
      const step = () => {
        if (currentIndex >= targetIndex) {
          setCurrentChar(CHAR_SET[targetIndex]);
          setIsFlipping(false);
          return;
        }

        currentIndex++;
        setCurrentChar(CHAR_SET[currentIndex]);
        setIsFlipping(true);

        animFrameRef.current = setTimeout(() => {
          setIsFlipping(false);
          setTimeout(step, 30);
        }, 40);
      };

      step();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (animFrameRef.current) clearTimeout(animFrameRef.current);
    };
  }, [targetChar, delay]);

  const sizeStyle = SIZE_STYLES[size];

  return (
    <div
      className="relative inline-flex flex-col overflow-hidden rounded-sm"
      style={{
        width: sizeStyle.width,
        height: sizeStyle.height,
        perspective: "200px",
      }}
    >
      {/* Top half */}
      <div
        className="relative flex items-end justify-center overflow-hidden"
        style={{
          height: "50%",
          background: "#1a1a1a",
          borderBottom: `1px solid ${accentColor}20`,
        }}
      >
        <span
          className="font-mono font-bold leading-none select-none"
          style={{
            fontSize: sizeStyle.fontSize,
            color: "#e8e8e8",
            transform: "translateY(50%)",
          }}
        >
          {currentChar}
        </span>
      </div>

      {/* Bottom half */}
      <div
        className="relative flex items-start justify-center overflow-hidden"
        style={{
          height: "50%",
          background: "#141414",
        }}
      >
        <span
          className="font-mono font-bold leading-none select-none"
          style={{
            fontSize: sizeStyle.fontSize,
            color: "#d0d0d0",
            transform: "translateY(-50%)",
          }}
        >
          {currentChar}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute left-0 right-0"
        style={{
          top: "50%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)`,
          transform: "translateY(-0.5px)",
        }}
      />

      {/* Flip overlay */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-sm"
        style={{
          transformOrigin: "center bottom",
          transform: isFlipping ? "rotateX(-30deg)" : "rotateX(0deg)",
          transition: "transform 40ms ease-in",
          backfaceVisibility: "hidden",
          height: "50%",
          background: isFlipping ? "#222" : "transparent",
          opacity: isFlipping ? 0.6 : 0,
        }}
      />
    </div>
  );
}

export function SplitFlapDisplay({
  value,
  className = "",
  size = "md",
  staggerDelay = 50,
  accentColor = "#F4B728",
}: SplitFlapDisplayProps) {
  const chars = value.toUpperCase().split("");

  return (
    <div
      className={`inline-flex gap-[3px] rounded-lg p-2 ${className}`}
      style={{ background: "#0a0a0a" }}
      role="text"
      aria-label={value}
    >
      {chars.map((char, i) => (
        <FlapCell
          key={`${i}-${char}`}
          targetChar={char}
          delay={i * staggerDelay}
          size={size}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
}
