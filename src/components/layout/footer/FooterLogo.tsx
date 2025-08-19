import { Logo } from '@/components/common';

interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className }: FooterLogoProps) {
  return (
    <div
      className={`mb-4 flex max-w-96 flex-col items-center gap-2 lg:items-start ${className ?? ''}`}
    >
      <Logo variant='white' />
      <p className='text-center text-sm lg:text-left'>
        We are a residential interior design firm located in Portland. Our boutique-studio offers
        more than
      </p>
    </div>
  );
}
