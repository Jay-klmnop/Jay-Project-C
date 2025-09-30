'use client';

import { useClickOutside } from '@/hooks';
import { type ReactNode, useRef, useState } from 'react';

interface ToggleMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  menuClassName?: string;
}

export function SideToggleMenu({ trigger, children, className }: ToggleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sideToggleRef = useRef<HTMLDivElement>(null);
  useClickOutside(sideToggleRef, () => setIsOpen(false));

  return (
    <div className='flex h-full items-center' ref={sideToggleRef}>
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
  const dropToggleRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropToggleRef, () => setIsOpen(false));

  return (
    <div className={`relative ${className}`} ref={dropToggleRef}>
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
