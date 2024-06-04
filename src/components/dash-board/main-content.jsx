import React from 'react';

const MainContent = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Card 1</h3>
          <p>This is some content.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Card 2</h3>
          <p>This is some content.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Card 3</h3>
          <p>This is some content.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
