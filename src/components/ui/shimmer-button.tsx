"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className = "",
  shimmerColor = "#F4B728",
  background = "rgba(244,183,40,1)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{ background, color: "#000000" }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-lg"
        aria-hidden="true"
      >
        <div
          className="absolute inset-[-100%] animate-shimmer-sweep"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${shimmerColor} 10%, transparent 20%)`,
            opacity: 0.4,
          }}
        />
      </div>

      <div className="absolute inset-[1px] rounded-lg" style={{ background }} />

      <span className="relative z-10">{children}</span>

      <style jsx>{`
        @keyframes shimmer-sweep {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 3s linear infinite;
        }
      `}</style>
    </button>
  );
}
