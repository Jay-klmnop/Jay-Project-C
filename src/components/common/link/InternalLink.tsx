import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function InternalLink({ href, children, className }: InternalLinkProps) {
  return (
    <Link href={href} className={`${className ?? ''}`}>
      {children}
    </Link>
  );
}
