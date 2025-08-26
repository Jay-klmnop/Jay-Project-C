import CodeLogo from '@/assets/logo.svg?react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <CodeLogo className={`${className ?? ''}`} />;
}
