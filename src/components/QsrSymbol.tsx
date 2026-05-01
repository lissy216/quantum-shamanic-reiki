type Props = {
  size?: number;
  className?: string;
  /** "gold" (warm flame on dark) or "crimson" (red on parchment) */
  variant?: "gold" | "crimson";
  /** Hide decorative star + sparkle for compact use */
  minimal?: boolean;
};

export default function QsrSymbol({
  size = 96,
  className,
  variant = "gold",
  minimal = false,
}: Props) {
  const isGold = variant === "gold";
  const stroke = isGold ? "url(#qsr-gold)" : "url(#qsr-crimson)";
  const flame = isGold ? "url(#qsr-flame-gold)" : "url(#qsr-flame-crimson)";
  const root = isGold ? "#7a0d1b" : "#7a0d1b";

  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={(size * 240) / 200}
      role="img"
      aria-label="Quantum Shamanic Reiki sigil"
      className={className}
    >
      <defs>
        <linearGradient id="qsr-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c977" />
          <stop offset="55%" stopColor="#c8a24a" />
          <stop offset="100%" stopColor="#9c7a2c" />
        </linearGradient>
        <linearGradient id="qsr-crimson" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a01825" />
          <stop offset="100%" stopColor="#5d0813" />
        </linearGradient>
        <radialGradient id="qsr-flame-gold" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff1c2" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#f4c75e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7a0d1b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="qsr-flame-crimson" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f7d6a3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7a0d1b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer halo */}
      {!minimal && (
        <circle cx="100" cy="100" r="78" fill={flame} />
      )}

      {/* Outer ring */}
      <ellipse
        cx="100"
        cy="100"
        rx="62"
        ry="56"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        opacity="0.85"
      />
      {/* Inner ring */}
      <ellipse
        cx="100"
        cy="100"
        rx="48"
        ry="42"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.55"
      />

      {/* Spiral (Cho-Ku-Rei inspired, drawn as growing arc) */}
      <path
        d="M100 100
           m -28 0
           a 28 28 0 1 0 56 0
           a 22 22 0 1 0 -44 0
           a 16 16 0 1 0 32 0
           a 10 10 0 1 0 -20 0
           a 6 6 0 1 0 12 0"
        fill="none"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Vertical light shaft */}
      {!minimal && (
        <line
          x1="100"
          y1="14"
          x2="100"
          y2="40"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      )}

      {/* Horizontal cross (sparkle arms) */}
      {!minimal && (
        <>
          <line x1="22" y1="100" x2="50" y2="100" stroke={stroke} strokeWidth="1" opacity="0.7" />
          <line x1="150" y1="100" x2="178" y2="100" stroke={stroke} strokeWidth="1" opacity="0.7" />
        </>
      )}

      {/* Roots reaching down */}
      <g fill="none" stroke={root} strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
        <path d="M100 156 C 96 178, 92 196, 86 218" />
        <path d="M100 156 C 100 180, 100 200, 100 222" />
        <path d="M100 156 C 104 178, 108 196, 114 218" />
        <path d="M100 156 C 92 172, 84 184, 74 196" />
        <path d="M100 156 C 108 172, 116 184, 126 196" />
      </g>

      {/* Center ember dot */}
      <circle cx="100" cy="100" r="3" fill={stroke} />
    </svg>
  );
}
