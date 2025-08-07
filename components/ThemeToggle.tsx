
import React from 'react';
import { IconSun, IconMoon } from './Icons';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <IconSun className="w-6 h-6" />
      ) : (
        <IconMoon className="w-6 h-6" />
      )}
    </button>
  );
};
