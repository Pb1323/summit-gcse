import type { PieDiagram } from "@/types/notes";

const COLORS = ["#0f1f3d", "#c8952c", "#5b6478", "#e8c477", "#1c3363", "#a98a4e"];
const SIZE = 220;
const CENTER = SIZE / 2;
const RADIUS = 82;

function polarToCartesian(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [CENTER + RADIUS * Math.cos(rad), CENTER + RADIUS * Math.sin(rad)];
}

export function PieChart({ diagram }: { diagram: PieDiagram }) {
  const total = diagram.slices.reduce((sum, s) => sum + s.value, 0);

  const angles = diagram.slices.reduce<{ start: number; end: number }[]>(
    (acc, slice) => {
      const prevEnd = acc.length > 0 ? acc[acc.length - 1].end : 0;
      const angle = (slice.value / total) * 360;
      return [...acc, { start: prevEnd, end: prevEnd + angle }];
    },
    []
  );

  const slices = diagram.slices.map((slice, i) => {
    const { start: startAngle, end: endAngle } = angles[i];
    const angle = endAngle - startAngle;
    const [x1, y1] = polarToCartesian(startAngle);
    const [x2, y2] = polarToCartesian(endAngle);
    const largeArc = angle > 180 ? 1 : 0;
    const path = `M ${CENTER} ${CENTER} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return { ...slice, path, color: COLORS[i % COLORS.length], pct: Math.round((slice.value / total) * 100) };
  });

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-52 w-52 shrink-0" role="img" aria-label={diagram.title}>
        {slices.map((s) => (
          <path key={s.label} d={s.path} fill={s.color} stroke="#faf7f0" strokeWidth={2} />
        ))}
      </svg>
      <ul className="grid grid-cols-1 gap-2 text-sm">
        {slices.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-sm"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-sg-ink/80">
              {s.label} <span className="font-semibold text-sg-navy">{s.pct}%</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
