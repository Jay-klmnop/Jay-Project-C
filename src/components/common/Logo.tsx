import LogoBlackSvg from "../../assets/Logo-bw.svg?react";
import LogoWhiteSvg from "../../assets/Logo-wb.svg?react";
import LogoBlankSvg from "../../assets/Logo-outline.svg?react";

interface LogoProps {
  variant: "black" | "white" | "blank";
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

  if (variant === "blank") {
    return (
      <div>
        <LogoBlankSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
