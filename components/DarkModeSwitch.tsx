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
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='fixed z-20 flex w-full justify-end items-end py-3 px-4'>
      <span className='label-text dark:text-orange-50'>
        <p>The current theme is {theme} </p>
      </span>
      <input
        type='checkbox'
        aria-label='Toggle theme'
        className='toggle opacity-75 bg-slate-600 dark:bg-cyan-700'
        onClick={toggleTheme}
      />
    </div>
  );
};
