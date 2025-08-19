import FooterContent from '@/components/layout/footer/FooterContent';
import SocialLinks from '@/components/layout/footer/SocialLinks';

export default function Footer() {
  return (
    <div className='px-auto flex flex-col items-center bg-black py-10 lg:items-start lg:px-20 lg:py-24 xl:px-32 2xl:px-52'>
      <FooterContent className='lg:items-start' />
      <SocialLinks />
    </div>
  );
}
