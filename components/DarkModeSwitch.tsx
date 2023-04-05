'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='fixed z-20 flex w-full justify-end items-end py-3 px-4'>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
};
