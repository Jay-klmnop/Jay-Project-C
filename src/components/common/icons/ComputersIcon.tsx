import ComputerSmallSvg from "../../../assetS/header-nav-sub/computers.svg?react";

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

  /**if (variant === "large") {
    return (
      <div>
        <ComputerLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }*/

  return null;
}
