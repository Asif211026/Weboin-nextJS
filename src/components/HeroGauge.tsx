/**
 * The signature element: a kiln temperature gauge sweeping from "Raw" to
 * "Fired" on load. It's the one bold visual on the page — everything else
 * stays quiet so this carries the brief's central metaphor.
 */
export default function HeroGauge() {
  return (
    <svg
      viewBox="0 0 300 190"
      className="mx-auto w-full max-w-xs text-ink dark:text-clay-50"
      role="img"
      aria-label="A gauge sweeping from Raw to Fired"
    >
      <defs>
        <linearGradient id="gaugeArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C7A6B" />
          <stop offset="55%" stopColor="#C9622B" />
          <stop offset="100%" stopColor="#E8A23D" />
        </linearGradient>
      </defs>

      {/* Arc track */}
      <path
        d="M 20 160 A 130 130 0 0 1 280 160"
        fill="none"
        stroke="url(#gaugeArc)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Tick marks */}
      {[-90, -45, 0, 45, 90].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 150 + Math.sin(rad) * 118;
        const y1 = 160 - Math.cos(rad) * 118;
        const x2 = 150 + Math.sin(rad) * 132;
        const y2 = 160 - Math.cos(rad) * 132;
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={2}
          />
        );
      })}

      {/* Needle, sweeps in on load (see tailwind animate-needle-sweep) */}
      <g
        className="origin-[150px_160px] animate-needle-sweep"
        style={{ transformBox: "view-box" }}
      >
        <line
          x1="150"
          y1="160"
          x2="150"
          y2="46"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <circle cx="150" cy="160" r="7" fill="#E8A23D" />

      <text
        x="20"
        y="182"
        className="font-mono"
        fontSize="10"
        letterSpacing="0.15em"
        fill="currentColor"
        opacity={0.6}
      >
        RAW
      </text>
      <text
        x="245"
        y="182"
        className="font-mono"
        fontSize="10"
        letterSpacing="0.15em"
        fill="currentColor"
        opacity={0.6}
      >
        FIRED
      </text>
    </svg>
  );
}
