"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 p-2 rounded-full transition-all duration-200 z-50 border-2 shadow-md"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        borderColor: theme === 'dark' ? '#c4b5fd' : '#1e40af',
        backgroundColor: theme === 'dark' ? 'rgba(88, 28, 135, 0.3)' : 'rgba(219, 234, 254, 0.5)'
      }}
    >
      {theme === 'dark' ? (
        // Sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m-9-9h1m16 0h1m-1.414-8.414l-.707.707M5.636 18.364l-.707.707M16.95 7.05l-.707.707M7.05 16.95l-.707.707M12 12a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
} 