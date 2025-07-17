import { RefObject, useEffect } from 'react';
import { Target, drawRadarFrame, createTarget } from '../lib/radarUtils';


export default function useRadar(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  containerRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const targets: Target[] = [];
    let angle = 0;
    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const render = () => {
      drawRadarFrame(ctx, canvas.width, canvas.height, angle, targets, createTarget);
      angle = (angle + 0.05) % (2 * Math.PI);
      animationId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId); // ✅ чистим при размонтировании
    };
  }, [canvasRef, containerRef]);
}