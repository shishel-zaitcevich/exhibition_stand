export type Target = { x: number; y: number; life: number };

export function createTarget(
  centerX: number,
  centerY: number,
  radius: number,
  targets: Target[]
) {
  if (Math.random() < 0.03 && targets.length < 8) {
    const r = Math.random() * radius;
    const a = Math.random() * 2 * Math.PI;
    targets.push({
      x: centerX + r * Math.cos(a),
      y: centerY + r * Math.sin(a),
      life: 120,
    });
  }
}

export function drawRadarFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  angle: number,
  targets: Target[],
  create: (cx: number, cy: number, r: number, t: Target[]) => void
) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2 - 20;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(3, 20, 87, 0.7)';
  ctx.lineWidth = 1;
  for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    ctx.arc(cx, cy, r * (i / 4), 0, 2 * Math.PI);
    ctx.stroke();
  }

  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    ctx.stroke();
  }

  const alpha = 0.3 + 0.5 * Math.cos(angle);
  const endX = cx + r * Math.cos(angle);
  const endY = cy + r * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = `rgba(41, 52, 255, ${alpha})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgba(41, 52, 255, ${alpha * 0.4})`;
  ctx.lineWidth = 4;
  ctx.stroke();

  create(cx, cy, r, targets);

  for (let i = targets.length - 1; i >= 0; i--) {
    const t = targets[i];
    t.life--;
    if (t.life <= 0) {
      targets.splice(i, 1);
      continue;
    }
    ctx.beginPath();
    ctx.arc(t.x, t.y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(41, 52, 255, ${t.life / 120})`;
    ctx.fill();
  }
}