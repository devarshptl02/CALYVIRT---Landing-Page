import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  radius: number;
}

interface Props {
  isOrdered: boolean;
  mouseX: number;
  mouseY: number;
}

const CanvasParticles: React.FC<Props> = ({ isOrdered, mouseX, mouseY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const pCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 200);
      const cols = Math.ceil(Math.sqrt(pCount * (canvas.width / canvas.height)));
      const rows = Math.ceil(pCount / cols);
      
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      particlesRef.current = Array.from({ length: cols * rows }).map((_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          targetX: c * cellW + cellW / 2,
          targetY: r * cellH + cellH / 2,
          radius: Math.random() * 2 + 1,
        };
      });
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      
      // Update
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isOrdered) {
          // Snap to target
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * 0.1;
          p.y += dy * 0.1;
        } else {
          // Chaos
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          // Magnetic mouse pull
          const mx = mouseX;
          const my = mouseY;
          if (mx > 0 && my > 0) {
            const dx = mx - p.x;
            const dy = my - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              const force = (200 - dist) / 200;
              p.x += dx * force * 0.05;
              p.y += dy * force * 0.05;
            }
          }
        }
      }

      // Draw lines if ordered
      if (isOrdered) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)'; // Electric Cyan glowing lines
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dist = Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
            if (dist < 150) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw particles
      ctx.fillStyle = isOrdered ? '#00f0ff' : '#475569'; // Cyan if ordered, Slate if chaos
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        if (isOrdered) {
           ctx.shadowBlur = 10;
           ctx.shadowColor = '#00f0ff';
        } else {
           ctx.shadowBlur = 0;
        }
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOrdered, mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default CanvasParticles;
