import {React,useState,useEffect} from 'react';
import axios from 'axios';

const MainContent = () => {

  const  [userCount, setUserCount] = useState(0)

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/count");
        setUserCount(response.data);
      }catch (error) {
        console.error('Error fetching user count:', error);
      }
    };
    fetchUserCount();
  },[]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome to the DataStore "Admin"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">User</h3>
          <p>{userCount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Product</h3>
          <p>13</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Order</h3>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
