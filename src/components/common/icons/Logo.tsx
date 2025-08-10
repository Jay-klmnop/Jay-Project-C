import LogoBlackSvg from "../../../assets/logo/black.svg?react";
import LogoWhiteSvg from "../../../assets/logo/white.svg?react";

interface LogoProps {
  variant: "black" | "white";
  className?: string;
}

export default function Logo({ variant, className }: LogoProps) {
  if (variant === "black") {
    return (
      <div>
        <LogoBlackSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "white") {
    return (
      <div>
        <LogoWhiteSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
