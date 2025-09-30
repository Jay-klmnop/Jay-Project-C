import { SocialLinks, FooterLogo } from '@/components/layout';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <div className='footer-bg flex w-full flex-col items-start gap-2 px-4 py-4 text-xs font-semibold'>
      <FooterLogo />
      <div className='flex w-full flex-row gap-4'></div>
      <FooterNav />
      <SocialLinks />
      <span className='sub-text'>Copyright © 2025. All rights reserved.</span>
    </div>
  );
}
