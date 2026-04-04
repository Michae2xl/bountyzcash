"use client";

import { useEffect, useRef } from "react";

const GOLD = "#F4B728";
const GREEN = "#23F4B7";
const RED = "#f87171";

const BUG_LABELS = [
  "CRITICAL",
  "NULL_PTR",
  "STACK_OVF",
  "USE_AFTER_FREE",
  "HEAP_CORR",
  "CVE-2020",
  "fChecked=0",
  "VULN_FOUND",
  "PATCH_OK",
  "EXPLOIT?",
  "RCE",
  "SPROUT_DRAIN",
  "PROOF_SKIP",
  "200 ZEC",
  "DISCLOSURE",
  "FIXED \u2713",
] as const;

const CRIT_LABELS = new Set(["CRITICAL", "CVE-2020", "EXPLOIT?", "RCE"]);
const OK_LABELS = new Set(["PATCH_OK", "FIXED \u2713", "DISCLOSURE"]);

interface Coin {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  alpha: number;
  pulse: number;
}

interface BugSprite {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  alpha: number;
  pulse: number;
}

interface TextLabel {
  label: string;
  x: number;
  y: number;
  vy: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  r: number;
  alpha: number;
  vy: number;
  vx: number;
  life: number;
  maxLife: number;
}

function makeCoin(w: number, h: number): Coin {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: 34 + Math.random() * 38,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    rot: Math.random() * Math.PI * 2,
    vrot: (Math.random() - 0.5) * 0.009,
    alpha: 0.1 + Math.random() * 0.16,
    pulse: Math.random() * Math.PI * 2,
  };
}

function makeBugSprite(w: number, h: number): BugSprite {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: 20 + Math.random() * 24,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    rot: Math.random() * Math.PI * 2,
    vrot: (Math.random() - 0.5) * 0.015,
    alpha: 0.08 + Math.random() * 0.14,
    pulse: Math.random() * Math.PI * 2,
  };
}

function makeTextLabel(w: number, h: number): TextLabel {
  const label = BUG_LABELS[Math.floor(Math.random() * BUG_LABELS.length)];
  const isCrit = CRIT_LABELS.has(label);
  const isOk = OK_LABELS.has(label);
  return {
    label,
    x: Math.random() * w,
    y: Math.random() * h + h * 0.2,
    vy: 0.12 + Math.random() * 0.2,
    alpha: 0,
    life: 0,
    maxLife: 160 + Math.random() * 80,
    color: isCrit ? RED : isOk ? GREEN : GOLD,
    size: 8 + Math.random() * 4,
  };
}

function makeParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: 0.5 + Math.random() * 1,
    alpha: 0.03 + Math.random() * 0.08,
    vy: -0.04 - Math.random() * 0.08,
    vx: (Math.random() - 0.5) * 0.04,
    life: 0,
    maxLife: 220 + Math.random() * 180,
  };
}

function drawBugShape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number,
): void {
  const s = size / 100;
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;
  ctx.scale(s, s);
  ctx.translate(-50, -50);

  // antennae
  ctx.strokeStyle = RED;
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(38, 18);
  ctx.lineTo(26, 6);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(62, 18);
  ctx.lineTo(74, 6);
  ctx.stroke();
  ctx.fillStyle = RED;
  ctx.beginPath();
  ctx.arc(25, 5, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(75, 5, 3, 0, Math.PI * 2);
  ctx.fill();

  // head
  ctx.beginPath();
  ctx.ellipse(50, 22, 14, 11, 0, 0, Math.PI * 2);
  ctx.fillStyle = RED;
  ctx.globalAlpha = alpha * 0.9;
  ctx.fill();

  // body
  ctx.beginPath();
  ctx.ellipse(50, 60, 20, 30, 0, 0, Math.PI * 2);
  ctx.fillStyle = RED;
  ctx.globalAlpha = alpha * 0.85;
  ctx.fill();

  // wing split
  ctx.strokeStyle = "rgba(0,0,0,.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(50, 32);
  ctx.lineTo(50, 88);
  ctx.stroke();

  // spots
  ctx.fillStyle = "rgba(0,0,0,.35)";
  const spots: readonly [number, number, number][] = [
    [42, 52, 4],
    [58, 52, 4],
    [43, 65, 3],
    [57, 65, 3],
  ];
  for (const [cx, cy, r] of spots) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // legs
  ctx.strokeStyle = RED;
  ctx.lineWidth = 2;
  ctx.globalAlpha = alpha;
  const legs: readonly [number, number, number, number][] = [
    [31, 48, 14, 42],
    [31, 58, 12, 58],
    [31, 68, 14, 76],
    [69, 48, 86, 42],
    [69, 58, 88, 58],
    [69, 68, 86, 76],
  ];
  for (const [x1, y1, x2, y2] of legs) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.restore();
}

export function CanvasBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId = 0;

    const zcashPath = new Path2D(
      "m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Z" +
        "m366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z",
    );

    function resize(): void {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    resize();

    const coins: Coin[] = Array.from({ length: 12 }, () => makeCoin(W, H));
    const bugSprites: BugSprite[] = Array.from({ length: 6 }, () =>
      makeBugSprite(W, H),
    );
    const textLabels: TextLabel[] = Array.from({ length: 8 }, () =>
      makeTextLabel(W, H),
    );
    const particles: Particle[] = Array.from({ length: 50 }, () =>
      makeParticle(W, H),
    );

    function tick(): void {
      ctx!.clearRect(0, 0, W, H);

      // particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife) {
          particles[i] = makeParticle(W, H);
          continue;
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(244,183,40,${p.alpha})`;
        ctx!.fill();
      }

      // coins
      for (const c of coins) {
        c.x += c.vx;
        c.y += c.vy;
        c.rot += c.vrot;
        c.pulse += 0.018;
        if (c.x < -80) c.x = W + 80;
        if (c.x > W + 80) c.x = -80;
        if (c.y < -80) c.y = H + 80;
        if (c.y > H + 80) c.y = -80;
        ctx!.save();
        ctx!.translate(c.x, c.y);
        ctx!.rotate(c.rot);
        ctx!.globalAlpha = c.alpha + Math.sin(c.pulse) * 0.035;
        const sc = c.size / 1080;
        ctx!.scale(sc, sc);
        ctx!.translate(-540, -540);
        ctx!.fillStyle = GOLD;
        ctx!.fill(zcashPath, "evenodd");
        ctx!.restore();
      }

      // bug sprites
      for (const b of bugSprites) {
        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vrot;
        b.pulse += 0.022;
        if (b.x < -60) b.x = W + 60;
        if (b.x > W + 60) b.x = -60;
        if (b.y < -60) b.y = H + 60;
        if (b.y > H + 60) b.y = -60;
        drawBugShape(
          ctx!,
          b.x,
          b.y,
          b.size,
          b.alpha + Math.sin(b.pulse) * 0.03,
        );
      }

      // text labels
      for (let i = 0; i < textLabels.length; i++) {
        const b = textLabels[i];
        b.y -= b.vy;
        b.life++;
        if (b.alpha < 0.5) b.alpha += 0.018;
        if (b.life > b.maxLife) b.alpha -= 0.02;
        if (b.alpha <= 0 || b.y < -20) {
          textLabels[i] = makeTextLabel(W, H);
          textLabels[i].y = H + 20;
          continue;
        }
        ctx!.save();
        ctx!.globalAlpha = b.alpha;
        ctx!.font = `500 ${b.size}px 'JetBrains Mono',monospace`;
        ctx!.fillStyle = b.color;
        ctx!.fillText(b.label, b.x, b.y);
        ctx!.restore();
      }

      animId = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.45,
      }}
      aria-hidden="true"
    />
  );
}
