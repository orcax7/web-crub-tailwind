import React from 'react';
import Sidebar from './../../components/dash-board/sidebar';
import Header from './../../components/dash-board/header';
import MainContent from './../../components/dash-board/main-content';


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex flex-col flex-grow">
        <Header/>
        <main className="flex-grow p-4">
          <MainContent/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
