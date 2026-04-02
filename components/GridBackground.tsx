"use client";

import React, { useEffect, useRef } from "react";

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Cores do design system
    const backgroundColor = "#000000";
    const accentColor = "52, 211, 153"; // #34D399 (brand.accent)
    
    const isMobile = width < 768;
    const speed = isMobile ? 0.2 : 0.3;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Atualizar animação se não houver restrição de movimento
    if (!prefersReducedMotion) {
      offsetRef.current = (offsetRef.current + speed) % 100;
    }

    ctx.clearRect(0, 0, width, height);

    // 1. Brilho sutil no ponto de fuga (horizonte)
    const horizonY = height * 0.4;
    const radialGradient = ctx.createRadialGradient(
      width / 2, horizonY, 0,
      width / 2, horizonY, 400
    );
    radialGradient.addColorStop(0, `rgba(${accentColor}, 0.06)`);
    radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.fillStyle = radialGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Linhas Verticais (Convergentes)
    const verticalLinesCount = isMobile ? 8 : 14;
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i <= verticalLinesCount; i++) {
      const xRatio = i / verticalLinesCount;
      const xStart = width / 2; // Ponto de fuga horizontal central
      const yStart = horizonY; // Horizonte
      
      // Espalhar as linhas na base do canvas
      const xEnd = (xRatio - 0.5) * width * 3 + width / 2;
      const yEnd = height;

      const gradient = ctx.createLinearGradient(0, yStart, 0, yEnd);
      gradient.addColorStop(0, `rgba(${accentColor}, 0.02)`);
      gradient.addColorStop(1, `rgba(${accentColor}, 0.12)`);
      
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();
    }

    // 3. Linhas Horizontais (Perspectiva)
    const horizontalLinesCount = isMobile ? 6 : 10;
    for (let i = 0; i <= horizontalLinesCount; i++) {
      // Cálculo de perspectiva: as linhas ficam mais próximas no horizonte
      const normalizedPos = (i + (offsetRef.current / 100)) / horizontalLinesCount;
      const perspectivePos = Math.pow(normalizedPos, 2); // Exponencial para simular profundidade
      const y = horizonY + perspectivePos * (height - horizonY);

      if (y < horizonY) continue;

      const opacity = Math.min(perspectivePos * 0.15, 0.12);
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
      ctx.lineWidth = 0.5 + perspectivePos * 0.5; // Engrossa conforme se aproxima da base
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 4. Efeito de Fade (Gradiente Vertical Global)
    const fadeGradient = ctx.createLinearGradient(0, 0, 0, height);
    fadeGradient.addColorStop(0, backgroundColor); // Topo opaco
    fadeGradient.addColorStop(0.3, "rgba(0, 0, 0, 0)"); // Centro transparente
    fadeGradient.addColorStop(0.7, "rgba(0, 0, 0, 0)");
    fadeGradient.addColorStop(1, "rgba(0, 0, 0, 0.6)"); // Base sutilmente opaca

    ctx.fillStyle = fadeGradient;
    ctx.fillRect(0, 0, width, height);

    requestRef.current = requestAnimationFrame(() => draw(ctx, width, height));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    requestRef.current = requestAnimationFrame(() => draw(ctx, canvas.width, canvas.height));

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

export default GridBackground;
