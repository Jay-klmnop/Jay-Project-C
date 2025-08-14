import { Link } from 'react-router-dom';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function InternalLink({ to, children, className }: InternalLinkProps) {
  return (
    <Link to={to} className={`${className ?? ''}`}>
      {children}
    </Link>
  );
}
