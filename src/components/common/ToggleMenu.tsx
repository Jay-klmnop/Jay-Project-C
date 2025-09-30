'use client';

import { type ReactNode, useState } from 'react';

interface ToggleMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  menuClassName?: string;
}

export function SideToggleMenu({ trigger, children, className }: ToggleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-full items-center'>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        data-state='active'
        data-open={isOpen}
      >
        {trigger}
      </div>
      {isOpen && <div className={`${className}`}>{children}</div>}
    </div>
  );
}

export function DropToggleMenu({ trigger, children, className, menuClassName }: ToggleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
        {trigger}
      </div>

      {isOpen && (
        <div className={`side-menu absolute top-full left-0 z-10 mt-2 w-full ${menuClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}
