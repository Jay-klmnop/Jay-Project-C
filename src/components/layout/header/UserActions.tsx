import InternalLink from "../../common/link/InternalLink";
import LikedIcon from "../../common/icons/LikedIcon";
import CartIcon from "../../common/icons/CartIcon";
import ProfileIcon from "../../common/icons/ProfileIcon";

interface UserActionsProps {
  className?: string;
}

export default function UserActions({ className }: UserActionsProps) {
  return (
    <div className={`flex flex-row gap-4 ${className ?? ""}`}>
      <InternalLink to="/liked">
        <LikedIcon />
      </InternalLink>
      <InternalLink to="/cart">
        <CartIcon />
      </InternalLink>
      <InternalLink to="/profile">
        <ProfileIcon />
      </InternalLink>
    </div>
  );
}
