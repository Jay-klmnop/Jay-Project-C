import { SocialLinks, FooterLogo } from '@/components/layout';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex w-full flex-col items-start gap-2 bg-black px-4 py-4 text-xs font-semibold text-white'>
      <FooterLogo />
      <div className='flex w-full flex-row gap-4'>
        <Link href='/service'>service</Link>
        <Link href='/assistance'>assistance</Link>
      </div>
      <SocialLinks />
    </div>
  );
}
