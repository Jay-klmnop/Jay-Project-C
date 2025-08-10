import ComputerSmallSvg from "../../../assets/figmaIcon/24px/Computers.svg?react";
import ComputerLargeSvg from "../../../assets/figmaIcon/48px/Computers.svg?react";

interface ComputersIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function ComputersIcon({
  variant,
  className,
}: ComputersIconProps) {
  if (variant === "small") {
    return (
      <div>
        <ComputerSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div>
        <ComputerLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
