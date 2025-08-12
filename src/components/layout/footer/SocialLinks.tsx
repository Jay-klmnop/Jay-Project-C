import FacebookIcon from "../../common/icons/FacebookIcon";
import InstagramIcon from "../../common/icons/InstagramIcon";
import TikTokIcon from "../../common/icons/TikTokIcon";
import TwitterIcon from "../../common/icons/TwitterIcon";
import ExternalLink from "../../common/link/ExternalLink";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={`flex flex-row gap-4 items-center justify-center mt-6 lg:items-start lg:mt-10 ${className ?? ""}`}
    >
      <ExternalLink href="https://www.twitter.com/" icon={<TwitterIcon />} />
      <ExternalLink href="https://www.facebook.com/" icon={<FacebookIcon />} />
      <ExternalLink href="https://www.tiktok.com/" icon={<TikTokIcon />} />
      <ExternalLink
        href="https://www.instagram.com/"
        icon={<InstagramIcon />}
      />
    </div>
  );
}
