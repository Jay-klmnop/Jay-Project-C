import FooterAssistance from '@/components/layout/footer/FooterAssistance';
import FooterLogo from '@/components/layout/footer/FooterLogo';
import FooterServices from '@/components/layout/footer/FooterServices';

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
