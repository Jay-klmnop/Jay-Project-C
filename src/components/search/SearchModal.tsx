'use client';

import { closeSearchModal, useAppDispatch, useAppSelector } from '@/RTK';
import { SearchInput } from '@/components/search';
import { ErrorBoundary } from '@suspensive/react';

export function SearchModal() {
  const dispatch = useAppDispatch();
  const isSearchModalOpen = useAppSelector((state) => state.ui.isSearchModalOpen);

  if (!isSearchModalOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-30' onClick={() => dispatch(closeSearchModal())}>
      <div
        className='side-bar fixed top-0 left-0 w-96 p-4 pt-14 lg:w-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <ErrorBoundary fallback={<div className='m-4'>Unexpected error, please reload</div>}>
          <SearchInput />
        </ErrorBoundary>
      </div>
    </div>
  );
}
