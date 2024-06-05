import {React} from 'react';

const Sidebar = () => {

  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <div className="p-4 text-2xl font-semibold">Dashboard</div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700"><a href="#">Home</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Profile</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Settings</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="/">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
