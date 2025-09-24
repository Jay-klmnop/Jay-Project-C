'use client';

import { THEMES } from '@/constants';
import { useTheme } from 'next-themes';
import { ToggleMenu } from './ToggleMenu';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ToggleMenu
      className='flex h-full flex-row items-center justify-center'
      trigger={
        <button className='p-2 text-center' data-state='active'>
          {theme}
        </button>
      }
    >
      <div className='flex p-2'>
        {THEMES.map((themeName) => (
          <button
            key={themeName}
            onClick={() => {
              setTheme(themeName);
            }}
            data-state={theme === themeName ? 'active' : 'inactive'}
            className='flex items-center justify-center p-2 text-center'
          >
            {themeName}
          </button>
        ))}
      </div>
    </ToggleMenu>
  );
}
