"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const LINK_DISTANCE = 120;
const NODE_RADIUS = 2.5;
const MIN_SPEED = 0.3;
const MAX_SPEED = 0.45;
const PAN_SPEED_X = 0.018;
const PAN_SPEED_Y = 0.012;

function randomSpeed() {
  const magnitude = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
  const angle = Math.random() * Math.PI * 2;
  return {
    vx: Math.cos(angle) * magnitude,
    vy: Math.sin(angle) * magnitude,
  };
}

function getNodeCount(width: number) {
  return width < 768 ? 12 : 24;
}

function getThemeColors(isDark: boolean) {
  if (isDark) {
    return {
      node: "rgba(113, 113, 122, 0.4)",
      edgeRgb: "14, 165, 233",
      edgeAlpha: 0.2,
    };
  }
  return {
    node: "rgba(161, 161, 170, 0.34)",
    edgeRgb: "56, 189, 248",
    edgeAlpha: 0.15,
  };
}

function seedNodes(width: number, height: number, count: number): Node[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    ...randomSpeed(),
  }));
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const frameRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const panRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;

    const drawFrame = (ctx: CanvasRenderingContext2D, target: HTMLCanvasElement) => {
      const width = target.clientWidth;
      const height = target.clientHeight;
      const isDark = document.documentElement.classList.contains("dark");
      const colors = getThemeColors(isDark);
      const nodes = nodesRef.current;
      const { x: panX, y: panY } = panRef.current;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const ax = a.x + panX;
          const ay = a.y + panY;
          const bx = b.x + panX;
          const by = b.y + panY;
          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.hypot(dx, dy);

          if (distance < LINK_DISTANCE) {
            const fade = 1 - distance / LINK_DISTANCE;
            ctx.strokeStyle = `rgba(${colors.edgeRgb}, ${colors.edgeAlpha * fade})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = colors.node;
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x + panX, node.y + panY, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const nodes = nodesRef.current;

      if (!reducedMotionRef.current) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x <= 0 || node.x >= width) node.vx *= -1;
          if (node.y <= 0 || node.y >= height) node.vy *= -1;

          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        }

        panRef.current.x = (panRef.current.x + PAN_SPEED_X) % width;
        panRef.current.y = (panRef.current.y + PAN_SPEED_Y) % height;
      }

      drawFrame(context, canvas);
      frameRef.current = requestAnimationFrame(tick);
    };

    const redraw = () => {
      drawFrame(context, canvas);
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches) {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
        redraw();
      } else {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    const themeObserver = new MutationObserver(redraw);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    media.addEventListener("change", onMotionChange);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getNodeCount(width);
      nodesRef.current = seedNodes(width, height, count);
      panRef.current = { x: 0, y: 0 };

      if (reducedMotionRef.current) {
        redraw();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reducedMotionRef.current) {
      redraw();
    } else {
      frameRef.current = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      media.removeEventListener("change", onMotionChange);
      themeObserver.disconnect();
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div aria-hidden className="neural-bg-wash pointer-events-none fixed inset-0 -z-20" />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      />
    </>
  );
}
