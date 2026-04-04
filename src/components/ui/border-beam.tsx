"use client";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  delay?: number;
  className?: string;
}

export function BorderBeam({
  size = 16,
  duration = 6,
  colorFrom = "#F4B728",
  delay = 0,
  className = "",
}: BorderBeamProps) {
  const half = size / 2;

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ overflow: "visible" }}
    >
      <svg
        className="border-beam-zcash"
        width={size}
        height={size}
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
        style={
          {
            position: "absolute",
            "--bb-dur": `${duration}s`,
            "--bb-delay": `${delay}s`,
            "--bb-half": `${half}px`,
          } as React.CSSProperties
        }
      >
        <path
          d="m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z"
          fill={colorFrom}
          fillRule="evenodd"
          opacity="0.65"
        />
      </svg>

      <style jsx>{`
        @keyframes bb-loop {
          0% {
            top: calc(-1 * var(--bb-half));
            left: calc(-1 * var(--bb-half));
          }
          25% {
            top: calc(-1 * var(--bb-half));
            left: calc(100% - var(--bb-half));
          }
          50% {
            top: calc(100% - var(--bb-half));
            left: calc(100% - var(--bb-half));
          }
          75% {
            top: calc(100% - var(--bb-half));
            left: calc(-1 * var(--bb-half));
          }
          100% {
            top: calc(-1 * var(--bb-half));
            left: calc(-1 * var(--bb-half));
          }
        }
        .border-beam-zcash {
          animation: bb-loop var(--bb-dur) linear var(--bb-delay) infinite;
        }
      `}</style>
    </div>
  );
}
