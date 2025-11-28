import React from "react";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  mode?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({
  width = 300,
  height = 160,
  className,
  mode = "light",
}) => {
  const isDark = mode === "dark";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 300 160"
      aria-labelledby="logoTitle"
      role="img"
      className={className}
    >
      <title id="logoTitle">Adaptive Light/Dark Logo</title>

      {!isDark && (
        <defs>
          <linearGradient id="blueGrad" x1="0%" x2="100%" y1="50%" y2="50%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="darkGrad" x1="0%" x2="100%" y1="50%" y2="50%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
      )}

      <g transform="translate(20,0)">
        {/* Horizontal Bars */}
        <rect
          x="0"
          y="74"
          width="64"
          height="12"
          rx="6"
          ry="6"
          fill={isDark ? "#60a5fa" : "url(#blueGrad)"} // blue-400
        />

        {/* Biggest Vertical Bar */}
        <rect
          x="100"
          y="18"
          width="24"
          height="124"
          rx="12"
          ry="12"
          fill={isDark ? "#2563eb" : "url(#darkGrad)"} // blue-600
        />

        {/* Medium Vertical Bar */}
        <rect
          x="138"
          y="34"
          width="18"
          height="100"
          rx="9"
          ry="9"
          fill={isDark ? "#2563eb" : "url(#darkGrad)"}
        />

        {/* Smallest Vertical Bar */}
        <rect
          x="170"
          y="52"
          width="14"
          height="60"
          rx="6"
          ry="6"
          fill={isDark ? "#2563eb" : "url(#darkGrad)"}
        />

        {/* Bottom/Right Horizontal Bar */}
        <rect
          x="198"
          y="74"
          width="64"
          height="12"
          rx="6"
          ry="6"
          fill={isDark ? "#60a5fa" : "url(#blueGrad)"}
        />
      </g>
    </svg>
  );
};

export default Logo;
