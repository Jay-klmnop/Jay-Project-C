import { InternalLink } from '@/components/common';
import { SUB_NAV_ITEMS } from '@/constants/navigation';
import { toggleCart } from '@/RTK/slices/uiSlice';
import { useDispatch } from 'react-redux';

interface NavSubProps {
  className?: string;
}

export default function NavSub({ className }: NavSubProps) {
  const dispatch = useDispatch();
  return (
    <nav className={`flex h-6 w-full flex-row items-center justify-around px-4 ${className ?? ''}`}>
      {SUB_NAV_ITEMS.map(({ to, label }) => (
        <InternalLink
          key={to}
          to={to}
          className='flex h-full w-full flex-row flex-nowrap items-center justify-center gap-x-2 px-2 py-2 transition'
        >
          <button
            className='whitespace-nowrap'
            onClick={() => label === 'cart' && dispatch(toggleCart())}
          >
            {' '}
            {label}
          </button>
        </InternalLink>
      ))}
    </nav>
  );
}
