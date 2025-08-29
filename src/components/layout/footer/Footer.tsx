import { SocialLinks, FooterLogo } from '@/components/layout/footer';
import { InternalLink } from '@/components/common';

export default function Footer() {
  return (
    <div className='flex w-full flex-col items-start gap-2 bg-black px-4 py-4 text-xs font-semibold text-white'>
      <FooterLogo />
      <div className='flex w-full flex-row gap-4'>
        <InternalLink to='/service'>service</InternalLink>
        <InternalLink to='/assistance'>assistance</InternalLink>
      </div>
      <SocialLinks />
    </div>
  );
}
