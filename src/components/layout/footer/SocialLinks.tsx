import { ExternalLink } from '@/components/common';
import { SOCIAL_LINKS } from '@/constants/footer';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={`mt-6 flex flex-row items-center justify-center gap-4 lg:mt-10 lg:items-start ${className ?? ''}`}
    >
      {SOCIAL_LINKS.map(({ href, IconComponent }) => (
        <ExternalLink
          key={href}
          href={href}
          icon={<IconComponent size={24} color='white' />}
        ></ExternalLink>
      ))}
    </div>
  );
}
