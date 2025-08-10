import Profile from "../../../assets/header-user-actions/user.svg?react";

interface ProfileIconProps {
  className?: string;
}

export default function ProfileIcon({ className }: ProfileIconProps) {
  return <Profile className={className} />;
}
