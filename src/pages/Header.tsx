// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  const buttonStyle =
    'text-white px-4 py-2 rounded-full focus:outline-none transition-transform transform hover:scale-105';

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <header
      className="p-4 flex justify-between items-center"
      style={{
        position: 'relative',
        // Ensure the header appears above the background
      }}
    >
      <div>
        <img src="img/kle_logo.png" alt="Logo" className="h-11" />
      </div>
      <nav className="flex">
        <button onClick={handleBack} className={`${buttonStyle} bg-blue-500 hover:bg-blue-600 active:bg-blue-700`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleForward}
          className={`${buttonStyle} ml-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
