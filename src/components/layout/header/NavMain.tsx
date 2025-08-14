import { Link } from 'react-router-dom';

interface NavMainProps {
  className?: string;
}

export default function NavMain({ className }: NavMainProps) {
  return (
    <div className={`flex flex-row gap-10 ${className ?? ''}`}>
      <Link to='/' className='text-black'>
        Home
      </Link>
      <Link to='/about' className='text-gray-400'>
        About
      </Link>
      <Link to='/contact' className='text-gray-400'>
        Contact Us
      </Link>
      <Link to='/blog' className='text-gray-400'>
        Blog
      </Link>
    </div>
  );
}
