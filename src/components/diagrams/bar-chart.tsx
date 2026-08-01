import type { BarDiagram } from "@/types/notes";

const WIDTH = 360;
const HEIGHT = 240;
const MARGIN = { top: 20, right: 16, bottom: 44, left: 44 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

export function BarChart({ diagram }: { diagram: BarDiagram }) {
  const values = diagram.bars.map((b) => b.value);
  const maxValue = Math.max(...values, 1) * 1.15;
  const barCount = diagram.bars.length;
  const gap = PLOT_W * 0.04;
  const barWidth = (PLOT_W - gap * (barCount - 1)) / barCount;

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
        y1={HEIGHT - MARGIN.bottom}
        x2={WIDTH - MARGIN.right}
        y2={HEIGHT - MARGIN.bottom}
        stroke="#14213d"
        strokeWidth={1.5}
      />
      <text
        x={MARGIN.left}
        y={14}
        fontSize={11}
        fontWeight={600}
        fill="#14213d"
      >
        {diagram.yLabel}
      </text>

      {diagram.bars.map((bar, i) => {
        const barHeight = (bar.value / maxValue) * PLOT_H;
        const x = MARGIN.left + i * (barWidth + gap);
        const y = HEIGHT - MARGIN.bottom - barHeight;
        return (
          <g key={bar.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={3}
              fill={bar.highlight ? "#c8952c" : "#0f1f3d"}
            />
            <text
              x={x + barWidth / 2}
              y={y - 6}
              fontSize={10.5}
              fontWeight={700}
              fill="#14213d"
              textAnchor="middle"
            >
              {bar.value}
            </text>
            <text
              x={x + barWidth / 2}
              y={HEIGHT - MARGIN.bottom + 16}
              fontSize={9.5}
              fill="#5b6478"
              textAnchor="middle"
            >
              {bar.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
