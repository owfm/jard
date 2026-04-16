/**
 * LawFairy logo icon - butterfly/wings motif.
 * Recreated from the brand system: 4 leaf/petal shapes
 * forming a butterfly silhouette.
 */
export function LawFairyIcon({
  className = "",
  size = 32,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LawFairy icon"
    >
      {/* Top-left wing (leaf shape pointing up-left) */}
      <path d="M48 48 C48 20, 36 2, 12 2 C2 2, 2 12, 2 20 C2 36, 20 48, 48 48 Z" />
      {/* Top-right wing (leaf shape pointing up-right) */}
      <path d="M52 48 C52 20, 64 2, 88 2 C98 2, 98 12, 98 20 C98 36, 80 48, 52 48 Z" />
      {/* Bottom-left petal (rounded) */}
      <path d="M48 52 C20 52, 8 60, 8 76 C8 92, 20 98, 32 98 C44 98, 48 88, 48 76 Z" />
      {/* Bottom-right petal (rounded) */}
      <path d="M52 52 C80 52, 92 60, 92 76 C92 92, 80 98, 68 98 C56 98, 52 88, 52 76 Z" />
    </svg>
  );
}

export function LawFairyWordmark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={{ color }}
    >
      <LawFairyIcon size={28} color={color} />
      <span className="font-sans text-xl font-bold tracking-tight">
        LawFairy
      </span>
    </span>
  );
}
