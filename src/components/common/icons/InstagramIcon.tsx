import Instagram from "../../../assets/f-icon/16px/Instagram.svg?react";

interface InstagramIconProps {
  className?: string;
}

export default function InstagramIcon({ className }: InstagramIconProps) {
  return <Instagram className={className} />;
}
