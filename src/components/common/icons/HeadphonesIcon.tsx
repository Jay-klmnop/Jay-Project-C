import HeadphoneSmallSvg from "../../../assets/figmaIcon/24px/Headphones.svg?react";
import HeadphoneLargeSvg from "../../../assets/figmaIcon/48px/Headphones.svg?react";

interface HeadphonesIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function HeadphonesIcon({
  variant,
  className,
}: HeadphonesIconProps) {
  if (variant === "small") {
    return (
      <div>
        <HeadphoneSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div>
        <HeadphoneLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  return null;
}
