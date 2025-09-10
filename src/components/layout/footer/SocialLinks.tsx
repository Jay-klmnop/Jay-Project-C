import { SOCIAL_LINKS } from '@/constants';
import Link from 'next/link';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-4 lg:items-start ${className ?? ''}`}
    >
      {SOCIAL_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='your-link-styles'
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
