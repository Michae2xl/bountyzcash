"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
  animateOnLoad?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function HyperText({
  text,
  className = "",
  duration = 800,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimatingRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animate = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const totalChars = text.length;
    const staggerMs = duration / totalChars;
    let resolvedCount = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      resolvedCount++;

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolvedCount) return char;
            return getRandomChar();
          })
          .join(""),
      );

      if (resolvedCount >= totalChars) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        isAnimatingRef.current = false;
      }
    }, staggerMs);
  }, [text, duration]);

  useEffect(() => {
    if (animateOnLoad) {
      setDisplayText(
        text
          .split("")
          .map((c) => (c === " " ? " " : getRandomChar()))
          .join(""),
      );

      const timeout = setTimeout(animate, 100);
      return () => clearTimeout(timeout);
    }
  }, [animate, animateOnLoad, text]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={animate}
      aria-label={text}
    >
      {displayText.split("").map((char, i) => (
        <span
          key={`${i}-${char}`}
          className="inline transition-opacity duration-75"
          style={
            char === " "
              ? { width: "0.3em", display: "inline-block" }
              : undefined
          }
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
