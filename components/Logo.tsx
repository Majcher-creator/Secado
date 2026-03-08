/**
 * SeCaDo brand logo component.
 *
 * Variants:
 *  - "full"    : complete vertical logo (house illustration + SeCaDo + tagline)
 *  - "compact" : horizontal logo for the navigation header
 */

const BROWN = "#9b7445";
const BROWN_DARK = "#7a5a32";
const GREEN = "#2c4a1e";

/** Small house-roof illustration shared across variants */
function HouseIcon({ width = 120, height = 90 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 120 90"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left rafter */}
      <line
        x1="60" y1="8" x2="4" y2="70"
        stroke={BROWN} strokeWidth="9" strokeLinecap="round"
      />
      {/* Right rafter */}
      <line
        x1="60" y1="8" x2="116" y2="70"
        stroke={BROWN} strokeWidth="9" strokeLinecap="round"
      />

      {/* Chimney body - positioned ~30 % along the right rafter */}
      <rect x="73" y="2" width="16" height="28" rx="2" fill={BROWN} />
      {/* Chimney cap (slightly wider, darker) */}
      <rect x="70" y="2" width="22" height="6" rx="2" fill={BROWN_DARK} />

      {/* Attic window – 2 × 2 grid of panes, centered below peak */}
      <rect x="44" y="36" width="12" height="12" rx="2" fill="none" stroke={BROWN} strokeWidth="2.5" />
      <rect x="59" y="36" width="12" height="12" rx="2" fill="none" stroke={BROWN} strokeWidth="2.5" />
      <rect x="44" y="51" width="12" height="12" rx="2" fill="none" stroke={BROWN} strokeWidth="2.5" />
      <rect x="59" y="51" width="12" height="12" rx="2" fill="none" stroke={BROWN} strokeWidth="2.5" />
    </svg>
  );
}

export default function Logo({
  variant = "full",
  dark = false,
  className = "",
}: {
  variant?: "full" | "compact";
  dark?: boolean;
  className?: string;
}) {
  const textColor = dark ? "#ffffff" : GREEN;
  const taglineColor = dark ? "#d1c4b0" : GREEN;
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <HouseIcon width={56} height={42} />
        <div>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: textColor,
              fontWeight: "bold",
              fontSize: "1.6rem",
              lineHeight: "1.1",
              letterSpacing: "0.02em",
            }}
          >
            SeCaDo
          </div>
          <div
            style={{
              color: taglineColor,
              fontSize: "0.55rem",
              letterSpacing: "0.14em",
              fontWeight: "700",
              marginTop: "1px",
            }}
          >
            ŚLĄSKIE CENTRUM DACHOWE
          </div>
        </div>
      </div>
    );
  }

  /* ── Full vertical logo ── */
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <HouseIcon width={180} height={135} />

      {/* Brand name */}
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: textColor,
          fontWeight: "bold",
          fontSize: "3.6rem",
          lineHeight: "1",
          letterSpacing: "0.02em",
          marginTop: "-6px",
        }}
      >
        SeCaDo
      </div>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "6px 0 4px",
          width: "220px",
        }}
      >
        <span style={{ flex: 1, height: "1.5px", background: BROWN }} />
        <span style={{ flex: 1, height: "1.5px", background: BROWN }} />
      </div>

      {/* Tagline */}
      <div
        style={{
          color: taglineColor,
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color: BROWN }}>—</span>
        ŚLĄSKIE CENTRUM DACHOWE
        <span style={{ color: BROWN }}>—</span>
      </div>
    </div>
  );
}
