import Twitter from "../../../assets/footer-social-links/twitter.svg?react";

interface TwitterIconProps {
  className?: string;
}

export default function TwitterIcon({ className }: TwitterIconProps) {
  return <Twitter className={className} />;
}
