import SmartWatchSmallSvg from "../../../assets/f-icon/24px/SmartWatches.svg?react";
import SmartWatchLargeSvg from "../../../assets/f-icon/48px/SmartWatches.svg?react";

interface SmartWatchesIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function SmartWatchesIcon({
  variant,
  className,
}: SmartWatchesIconProps) {
  if (variant === "small") {
    return (
      <div>
        <SmartWatchSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div>
        <SmartWatchLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
