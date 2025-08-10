import Liked from "../../../assets/header-user-actions/liked.svg?react";

interface LikedIconProps {
  className?: string;
}

export default function LikedIcon({ className }: LikedIconProps) {
  return <Liked className={className} />;
}
