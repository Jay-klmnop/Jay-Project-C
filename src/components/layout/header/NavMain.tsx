import { InternalLink } from '@/components/common';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  return (
    <div className={`flex flex-row gap-10 ${className ?? ''}`}>
      <InternalLink to='/' className='text-black'>
        Home
      </InternalLink>
      <InternalLink to='/about' className='text-gray-400'>
        About
      </InternalLink>
      <InternalLink to='/contact' className='text-gray-400'>
        Contact Us
      </InternalLink>
      <InternalLink to='/blog' className='text-gray-400'>
        Blog
      </InternalLink>
    </div>
  );
}
