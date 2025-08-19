import { FooterLogo, FooterLinkGroup } from '@/components/layout/footer';
import { ASSISTANCE_ITEMS, SERVICE_ITEMS } from '@/constants/footer';

interface FooterContentProps {
  className?: string;
}

export default function FooterContent({ className }: FooterContentProps) {
  return (
    <div
      className={`flex w-full flex-col items-center text-white lg:flex-row lg:justify-between ${className ?? ''}`}
    >
      <FooterLogo />
      <FooterLinkGroup title='Services' items={SERVICE_ITEMS} />
      <FooterLinkGroup title='Assistance' items={ASSISTANCE_ITEMS} />
    </div>
  );
}
