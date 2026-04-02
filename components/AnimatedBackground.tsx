"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);

  const initParticles = (width: number, height: number) => {
    const isMobile = width < 768;
    const count = isMobile ? 30 : 60;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6, // Velocidade entre -0.3 e 0.3
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1, // Raio entre 1 e 2.5px
        opacity: Math.random() * 0.3 + 0.2, // Opacidade entre 0.2 e 0.5
      });
    }
    particlesRef.current = particles;
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    ctx.clearRect(0, 0, width, height);
    const isMobile = width < 768;
    const connectionDistance = isMobile ? 80 : 120;

    // Cores baseadas no design system (brand-accent ou fallback)
    const accentColor = "52, 211, 153"; // Equivalente ao #34D399 (brand.accent)

    particlesRef.current.forEach((p, i) => {
      // Atualizar posição
      p.x += p.vx;
      p.y += p.vy;

      // Ricochete
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Desenhar partícula
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${accentColor}, ${p.opacity})`;
      ctx.fill();

      // Desenhar conexões
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineOpacity = (1 - distance / connectionDistance) * 0.15;
          ctx.strokeStyle = `rgba(${accentColor}, ${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestRef.current = requestAnimationFrame(() => draw(ctx, width, height));
  };

  useEffect(() => {
    // Verificar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    requestRef.current = requestAnimationFrame(() =>
      draw(ctx, canvas.width, canvas.height),
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
};

export default AnimatedBackground;
