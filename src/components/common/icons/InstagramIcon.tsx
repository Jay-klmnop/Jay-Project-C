import Instagram from "../../../assets/footer-social-links/instagram.svg?react";

interface InstagramIconProps {
  className?: string;
}

export default function InstagramIcon({ className }: InstagramIconProps) {
  return <Instagram className={className} />;
}
