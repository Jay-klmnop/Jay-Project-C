import Facebook from "../../../assets/footer-social-links/facebook.svg?react";

interface FacebookIconProps {
  className?: string;
}

export default function FacebookIcon({ className }: FacebookIconProps) {
  return <Facebook className={className} />;
}
