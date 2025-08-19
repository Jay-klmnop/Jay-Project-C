import { FooterLogo, FooterServices, FooterAssistance } from '@/components/layout/footer';

interface FooterContentProps {
  className?: string;
}

export default function FooterContent({ className }: FooterContentProps) {
  return (
    <div
      className={`flex w-full flex-col items-center text-white lg:flex-row lg:justify-between ${className ?? ''}`}
    >
      <FooterLogo />
      <FooterServices />
      <FooterAssistance />
    </div>
  );
}
