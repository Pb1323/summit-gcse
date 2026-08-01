import type { CurveDiagram, CurveColor } from "@/types/notes";

const WIDTH = 360;
const HEIGHT = 260;
const MARGIN = { top: 20, right: 24, bottom: 44, left: 56 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

function mapX(x: number) {
  return MARGIN.left + (x / 100) * PLOT_W;
}
function mapY(y: number) {
  return MARGIN.top + PLOT_H - (y / 100) * PLOT_H;
}

const STROKE: Record<CurveColor, { stroke: string; dash?: string }> = {
  navy: { stroke: "#0f1f3d" },
  gold: { stroke: "#c8952c" },
  muted: { stroke: "#9aa3b8" },
  "navy-dashed": { stroke: "#0f1f3d", dash: "5 4" },
  "gold-dashed": { stroke: "#c8952c", dash: "5 4" },
};

export function CurvesDiagram({ diagram }: { diagram: CurveDiagram }) {
  const { xLabel, yLabel, curves, equilibrium, shift } = diagram;

  const fromCurve = shift ? curves.find((c) => c.id === shift.fromCurveId) : undefined;
  const toCurve = shift ? curves.find((c) => c.id === shift.toCurveId) : undefined;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full max-w-md"
      role="img"
      aria-label={diagram.title}
    >
      {/* axes */}
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
      {/* arrowheads */}
      <path
        d={`M ${MARGIN.left - 4} ${MARGIN.top + 6} L ${MARGIN.left} ${MARGIN.top} L ${MARGIN.left + 4} ${MARGIN.top + 6}`}
        fill="none"
        stroke="#14213d"
        strokeWidth={1.5}
      />
      <path
        d={`M ${WIDTH - MARGIN.right - 6} ${HEIGHT - MARGIN.bottom - 4} L ${WIDTH - MARGIN.right} ${HEIGHT - MARGIN.bottom} L ${WIDTH - MARGIN.right - 6} ${HEIGHT - MARGIN.bottom + 4}`}
        fill="none"
        stroke="#14213d"
        strokeWidth={1.5}
      />

      {/* axis labels */}
      <text
        x={MARGIN.left}
        y={14}
        fontSize={11}
        fontWeight={600}
        fill="#14213d"
        textAnchor="start"
      >
        {yLabel}
      </text>
      <text
        x={WIDTH - MARGIN.right}
        y={HEIGHT - 10}
        fontSize={11}
        fontWeight={600}
        fill="#14213d"
        textAnchor="end"
      >
        {xLabel}
      </text>

      {/* equilibrium guide lines */}
      {equilibrium && (
        <>
          <line
            x1={mapX(equilibrium.x)}
            y1={mapY(equilibrium.y)}
            x2={mapX(equilibrium.x)}
            y2={HEIGHT - MARGIN.bottom}
            stroke="#c8952c"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <line
            x1={MARGIN.left}
            y1={mapY(equilibrium.y)}
            x2={mapX(equilibrium.x)}
            y2={mapY(equilibrium.y)}
            stroke="#c8952c"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <circle
            cx={mapX(equilibrium.x)}
            cy={mapY(equilibrium.y)}
            r={3.5}
            fill="#c8952c"
          />
          {equilibrium.label && (
            <text
              x={mapX(equilibrium.x) + 8}
              y={mapY(equilibrium.y) - 6}
              fontSize={10}
              fontWeight={700}
              fill="#c8952c"
            >
              {equilibrium.label}
            </text>
          )}
        </>
      )}

      {/* curves */}
      {curves.map((curve) => {
        const style = STROKE[curve.color];
        const d = curve.points
          .map((p, i) => `${i === 0 ? "M" : "L"} ${mapX(p[0])} ${mapY(p[1])}`)
          .join(" ");
        const last = curve.points[curve.points.length - 1];
        const first = curve.points[0];
        const labelPoint = curve.labelPos === "start" ? first : last;
        const anchor = curve.labelPos === "start" ? "end" : "start";
        const dx = curve.labelPos === "start" ? -6 : 6;
        return (
          <g key={curve.id}>
            <path
              d={d}
              fill="none"
              stroke={style.stroke}
              strokeWidth={2.25}
              strokeDasharray={style.dash}
              strokeLinecap="round"
            />
            <text
              x={mapX(labelPoint[0]) + dx}
              y={mapY(labelPoint[1]) + 4}
              fontSize={10.5}
              fontWeight={700}
              fill={style.stroke}
              textAnchor={anchor}
            >
              {curve.label}
            </text>
          </g>
        );
      })}

      {/* shift arrow */}
      {shift && fromCurve && toCurve && (() => {
        const fromMid = fromCurve.points[Math.floor(fromCurve.points.length / 2)];
        const toMid = toCurve.points[Math.floor(toCurve.points.length / 2)];
        const x1 = mapX(fromMid[0]);
        const y1 = mapY(fromMid[1]);
        const x2 = mapX(toMid[0]);
        const y2 = mapY(toMid[1]);
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 - 10;
        return (
          <g>
            <defs>
              <marker
                id={`arrow-${shift.fromCurveId}-${shift.toCurveId}`}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#c8952c" />
              </marker>
            </defs>
            <path
              d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
              fill="none"
              stroke="#c8952c"
              strokeWidth={1.75}
              markerEnd={`url(#arrow-${shift.fromCurveId}-${shift.toCurveId})`}
            />
            <text
              x={midX}
              y={midY - 4}
              fontSize={10}
              fontWeight={700}
              fill="#c8952c"
              textAnchor="middle"
            >
              {shift.label}
            </text>
          </g>
        );
      })()}
    </svg>
  );
}
