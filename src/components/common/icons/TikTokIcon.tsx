import TikTok from "../../../assets/footer-social-links/tiktok.svg?react";

interface TikTokIconProps {
  className?: string;
}

export default function TikTokIcon({ className }: TikTokIconProps) {
  return <TikTok className={className} />;
}
