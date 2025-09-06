import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">AM Inc</h1>
        {/* Placeholder for hamburger menu icon */}
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div className="bg-[--color-gold] p-6 text-center">
        <h2 className="text-4xl font-extrabold text-black">Amana Industries</h2>
      </div>
    </header>
  );
};

export default Header;