import Facebook from "../../../assets/f-icon/16px/Facebook.svg?react";

interface FacebookIconProps {
  className?: string;
}

export default function FacebookIcon({ className }: FacebookIconProps) {
  return <Facebook className={className} />;
}
