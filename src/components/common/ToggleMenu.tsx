'use client';

import { type ReactNode, useState } from 'react';

interface ToggleMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  className: string;
}

export function ToggleMenu({ trigger, children, className }: ToggleMenuProps) {
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
