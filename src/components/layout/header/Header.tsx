'use client';

import { ThemeToggleButton } from '@/components/common';
import { NavMain, NavSub, UserActions } from '@/components/layout';
import { toggleCart, useAppDispatch } from '@/RTK';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';

export default function Header() {
  const dispatch = useAppDispatch();
  const handleCartClick = () => {
    dispatch(toggleCart());
  };
  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='header-gradation absolute inset-x-0 top-0 h-full'></div>
      <div className='relative z-20 mx-auto w-full px-4 text-xs font-extrabold lg:px-6 lg:text-sm'>
        <div className='flex h-14 items-center justify-between py-4'>
          <div className='flex max-w-4xl items-center gap-6'>
            <Link href='/' className='text-sm font-black lg:text-base'>
              C:ODE
            </Link>
            <div>search</div>
            <ThemeToggleButton />
            <NavMain className='hidden lg:flex' />
          </div>

          <div className='flex shrink-0 items-center gap-4'>
            <NavSub className='hidden lg:flex' />
            <UserActions onCartClick={handleCartClick} className='hidden sm:flex' />
            <button className='lg:hidden'>
              <IoMdMenu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
