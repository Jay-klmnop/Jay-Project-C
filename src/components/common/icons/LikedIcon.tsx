import Liked from "../../../assets/f-icon/32px/Favorites.svg?react";

interface LikedIconProps {
  className?: string;
}

export default function LikedIcon({ className }: LikedIconProps) {
  return <Liked className={className} />;
}
