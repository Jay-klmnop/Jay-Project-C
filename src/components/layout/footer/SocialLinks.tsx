import { ExternalLink } from '@/components/common';
import { SOCIAL_LINKS } from '@/constants/footer';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-4 lg:items-start ${className ?? ''}`}
    >
      {SOCIAL_LINKS.map(({ href, label }) => (
        <ExternalLink key={href} href={href} label={label}></ExternalLink>
      ))}
    </div>
  );
}
