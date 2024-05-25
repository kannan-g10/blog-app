import React from 'react';

const Header = ({ onClose }) => {
  return (
    <div className="w-full text-center p-2">
      <h1 className="text-5xl font-bold font-mono m-7">Blog App</h1>
      <button
        className="bg-rose-600 text-white font-bold px-4 py-2 my-4 rounded-md"
        onClick={onClose}
      >
        Add New
      </button>
      <hr className="border border-black/60 my-4 w-full" />
    </div>
  );
};

export default Header;
