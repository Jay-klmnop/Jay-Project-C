import { Logo } from '@/components/common';

interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className }: FooterLogoProps) {
  return (
    <div
      className={`mb-4 flex max-w-96 flex-col items-center gap-2 lg:items-start ${className ?? ''}`}
    >
      <Logo />
      <p className='text-center text-sm lg:text-left'>
        At C:ODE, we believe great style is like great code: elegant, efficient, and built to last.
        We craft essential apparel that debugs your morning routine.
      </p>
    </div>
  );
}
