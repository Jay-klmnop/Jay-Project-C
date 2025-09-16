'use client';

import { THEMES } from '@/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className='flex flex-row'>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className='toggle-button'
        data-state='active'
        data-open={isOpen}
      >
        {theme === 'system' ? `system (${resolvedTheme})` : theme}
      </button>
      {isOpen && (
        <div className='flex p-2'>
          {THEMES.map((themeName) => (
            <button
              key={themeName}
              onClick={() => {
                setTheme(themeName);
                setIsOpen(false);
              }}
              data-state={theme === themeName ? 'active' : 'inactive'}
              className='toggle-button p-2 text-center'
            >
              {themeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
