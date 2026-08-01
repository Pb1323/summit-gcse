import type { Diagram } from "@/types/notes";
import { CurvesDiagram } from "@/components/diagrams/curves-diagram";
import { PieChart } from "@/components/diagrams/pie-chart";
import { BarChart } from "@/components/diagrams/bar-chart";
import { LineChart } from "@/components/diagrams/line-chart";

export function EconDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="not-prose my-2 rounded-2xl border border-sg-navy/10 bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
        {diagram.title}
      </p>
      <div className="mt-3">
        {diagram.kind === "curves" && <CurvesDiagram diagram={diagram} />}
        {diagram.kind === "pie" && <PieChart diagram={diagram} />}
        {diagram.kind === "bar" && <BarChart diagram={diagram} />}
        {diagram.kind === "line" && <LineChart diagram={diagram} />}
      </div>
      {diagram.note && (
        <figcaption className="mt-3 text-xs leading-relaxed text-sg-ink/55">
          {diagram.note}
        </figcaption>
      )}
    </figure>
  );
}
