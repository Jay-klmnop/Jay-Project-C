import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react';
import ExternalLink from '../../common/link/ExternalLink';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={`mt-6 flex flex-row items-center justify-center gap-4 lg:mt-10 lg:items-start ${className ?? ''}`}
    >
      <ExternalLink
        href='https://www.twitter.com/'
        icon={<TwitterLogoIcon size={24} color='#ffffff' />}
      />
      <ExternalLink
        href='https://www.facebook.com/'
        icon={<FacebookLogoIcon size={24} color='#ffffff' />}
      />
      <ExternalLink
        href='https://www.tiktok.com/'
        icon={<TiktokLogoIcon size={24} color='#ffffff' />}
      />
      <ExternalLink
        href='https://www.instagram.com/'
        icon={<InstagramLogoIcon size={24} color='#ffffff' />}
      />
    </div>
  );
}
