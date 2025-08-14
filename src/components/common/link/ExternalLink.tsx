interface ExternalLinkProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, icon, className }: ExternalLinkProps) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
      {icon}
    </a>
  );
}
