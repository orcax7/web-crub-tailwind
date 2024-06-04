import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <button className="text-gray-700">Profile</button>
      </div>
    </header>
  );
};

export default Header;
