import QsrSymbol from "./QsrSymbol";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "crimson";
  showSubtitle?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { sigil: 32, title: "text-lg", sub: "text-[0.6rem]", gap: "gap-2" },
  md: { sigil: 48, title: "text-2xl", sub: "text-[0.7rem]", gap: "gap-3" },
  lg: { sigil: 88, title: "text-4xl md:text-5xl", sub: "text-sm", gap: "gap-4" },
};

export default function Wordmark({
  size = "md",
  variant = "gold",
  showSubtitle = true,
  className,
}: Props) {
  const s = sizeMap[size];
  const titleColor = variant === "gold" ? "text-[var(--color-gold-light)]" : "text-[var(--color-crimson)]";
  const subColor = variant === "gold" ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]";

  return (
    <div className={`flex items-center ${s.gap} ${className ?? ""}`}>
      <QsrSymbol size={s.sigil} variant={variant} minimal={size === "sm"} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display ${s.title} ${titleColor}`}
          style={{ letterSpacing: "0.08em" }}
        >
          QUANTUM
        </span>
        {showSubtitle && (
          <span
            className={`font-display ${s.sub} ${subColor} mt-1`}
            style={{ letterSpacing: "0.32em" }}
          >
            SHAMANIC REIKI
          </span>
        )}
      </div>
    </div>
  );
}
