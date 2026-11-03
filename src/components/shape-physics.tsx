import { useEffect, useRef } from 'react';

type ShapePhysicsProps = {
  height?: string;
  count?: number;
  size?: number;
  sizeVariation?: number;
  spawnRate?: number;
  depth?: '2d' | '3d';
  seed?: number;
};

export function ShapePhysics({
  height = '260px',
  count = 6,
  size = 32,
  sizeVariation = 0.14,
  depth = '2d',
  seed = 1,
}: ShapePhysicsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let frame = 0;
    let animationFrame = 0;
    const random = (value: number) => {
      const next = Math.sin(value * 12.9898 + seed) * 43758.5453;
      return next - Math.floor(next);
    };
    const shapes = Array.from({ length: count }, (_, index) => ({
      x: 0.12 + random(index + 1) * 0.76,
      y: 0.2 + random(index + 8) * 0.55,
      vx: (random(index + 16) - 0.5) * 0.0012,
      vy: (random(index + 24) - 0.5) * 0.0007,
      size: size * (1 + (random(index + 32) - 0.5) * sizeVariation),
      hue: 28 + random(index + 40) * 35,
      rotation: random(index + 48) * Math.PI,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const render = (time: number) => {
      const bounds = canvas.getBoundingClientRect();
      context.clearRect(0, 0, bounds.width, bounds.height);
      shapes.forEach((shape, index) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += 0.002 + index * 0.0002;
        if (shape.x < 0.05 || shape.x > 0.95) shape.vx *= -1;
        if (shape.y < 0.12 || shape.y > 0.88) shape.vy *= -1;
        const x = shape.x * bounds.width;
        const y = shape.y * bounds.height;
        const scale = depth === '3d' ? 0.75 + (Math.sin(time / 1600 + index) + 1) * 0.12 : 1;
        const half = shape.size * scale;
        context.save();
        context.translate(x, y);
        context.rotate(shape.rotation);
        context.fillStyle = `hsla(${shape.hue}, 38%, 66%, .78)`;
        context.strokeStyle = 'rgba(238, 236, 230, .45)';
        context.lineWidth = 1;
        context.beginPath();
        context.roundRect(-half, -half, half * 2, half * 2, half * 0.22);
        context.fill();
        context.stroke();
        context.restore();
      });
      animationFrame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [count, depth, seed, size, sizeVariation]);

  return <canvas ref={canvasRef} className="shape-physics-canvas" style={{ width: '100%', height }} aria-label="Animated shape physics study" />;
}
