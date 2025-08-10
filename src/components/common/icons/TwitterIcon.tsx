import Twitter from "../../../assets/figmaIcon/16px/Twitter.svg?react";

interface TwitterIconProps {
  className?: string;
}

export default function TwitterIcon({ className }: TwitterIconProps) {
  return <Twitter className={className} />;
}
