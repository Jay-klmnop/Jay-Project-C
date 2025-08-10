import PhoneSmallSvg from "../../../assets/header-nav-sub/phones.svg?react";

interface PhonesIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function PhonesIcon({ variant, className }: PhonesIconProps) {
  if (variant === "small") {
    return (
      <div>
        <PhoneSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  /*if (variant === "large") {
    return (
      <div>
        <PhoneLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }*/

  return null;
}
