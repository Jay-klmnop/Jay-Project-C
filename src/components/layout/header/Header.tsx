import { InternalLink, Logo, SearchInput } from '@/components/common';
import { NavMain, NavSub, UserActions } from '@/components/layout/header';
import { ListIcon } from '@phosphor-icons/react';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 w-full bg-white'>
      <div className='mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-16'>
        <div className='flex h-20 items-center justify-between py-4'>
          <div className='flex max-w-4xl grow items-center gap-6'>
            <InternalLink to='/'>
              <Logo className='shrink-0' />
            </InternalLink>
            <SearchInput containerClassName='w-full mr-15p hidden md:block' />
          </div>

          <div className='flex shrink-0 items-center gap-16 lg:max-w-xl'>
            <NavMain className='hidden lg:flex' />
            <UserActions className='hidden sm:flex' />
          </div>
          <button className='ml-5 lg:hidden'>
            <ListIcon size={36} />
          </button>
        </div>
      </div>
      <div className='hidden w-full 2xl:flex'>
        <NavSub />
      </div>
    </header>
  );
}
