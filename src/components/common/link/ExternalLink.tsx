interface ExternalLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function ExternalLink({ href, label, className }: ExternalLinkProps) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
      {label}
    </a>
  );
}
