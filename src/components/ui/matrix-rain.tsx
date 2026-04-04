"use client";

import { useEffect, useRef } from "react";

interface MatrixRainProps {
  color?: string;
  fontSize?: number;
  speed?: number;
  opacity?: number;
  className?: string;
}

const CHARACTERS =
  "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";

export function MatrixRain({
  color = "#F4B728",
  fontSize = 14,
  speed = 45,
  opacity = 0.12,
  className,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;

    const resize = () => {
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from(
      { length: columns },
      () => Math.random() * -100,
    );

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const charIndex = Math.floor(Math.random() * CHARACTERS.length);
        const char = CHARACTERS[charIndex];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.5 + Math.random() * 0.5;
      }
    };

    const interval = setInterval(draw, speed);

    const observer = new ResizeObserver(() => {
      resize();
      const newColumns = Math.floor(canvas.width / fontSize);
      while (drops.length < newColumns) {
        drops.push(Math.random() * -100);
      }
      drops.length = newColumns;
    });

    const target = parent ?? document.body;
    observer.observe(target);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [color, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
      }}
    />
  );
}
