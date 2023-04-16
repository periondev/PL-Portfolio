'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  //toggle theme
  const toggleTheme = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  return (
    <div className='fixed z-20 flex w-full justify-end items-end py-3 px-4'>
      <input
        type='checkbox'
        aria-label='Toggle theme'
        className='toggle toggle-primary dark:opacity-60'
        onClick={() => {
          toggleTheme();
        }}
      />
    </div>
  );
};
