import type { LineDiagram } from "@/types/notes";

const WIDTH = 360;
const HEIGHT = 240;
const MARGIN = { top: 20, right: 16, bottom: 40, left: 44 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

export function LineChart({ diagram }: { diagram: LineDiagram }) {
  const values = diagram.points.map((p) => p.value);
  const maxValue = Math.max(...values, 0);
  const minValue = Math.min(...values, 0);
  const range = maxValue - minValue || 1;
  const n = diagram.points.length;

  const coords = diagram.points.map((p, i) => {
    const x = MARGIN.left + (n === 1 ? 0 : (i / (n - 1)) * PLOT_W);
    const y = MARGIN.top + PLOT_H - ((p.value - minValue) / range) * PLOT_H;
    return { ...p, x, y };
  });

  const zeroY = MARGIN.top + PLOT_H - ((0 - minValue) / range) * PLOT_H;
  const path = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full max-w-md"
      role="img"
      aria-label={diagram.title}
    >
      <line
        x1={MARGIN.left}
        y1={MARGIN.top}
        x2={MARGIN.left}
        y2={HEIGHT - MARGIN.bottom}
        stroke="#14213d"
        strokeWidth={1.5}
      />
      <line
        x1={MARGIN.left}
        y1={zeroY}
        x2={WIDTH - MARGIN.right}
        y2={zeroY}
        stroke={minValue < 0 ? "#c9c2ad" : "#14213d"}
        strokeWidth={minValue < 0 ? 1 : 1.5}
      />
      <text x={MARGIN.left} y={14} fontSize={11} fontWeight={600} fill="#14213d">
        {diagram.yLabel}
      </text>

      <path d={path} fill="none" stroke="#0f1f3d" strokeWidth={2.25} strokeLinecap="round" />

      {coords.map((c) => (
        <g key={c.label}>
          <circle cx={c.x} cy={c.y} r={3.5} fill="#c8952c" />
          <text
            x={c.x}
            y={c.y - 9}
            fontSize={10}
            fontWeight={700}
            fill="#0f1f3d"
            textAnchor="middle"
          >
            {c.value}
          </text>
          <text
            x={c.x}
            y={HEIGHT - MARGIN.bottom + 16}
            fontSize={9.5}
            fill="#5b6478"
            textAnchor="middle"
          >
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
