import React from 'react';
import Login from './page/page-login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './page/dash-board/dash-board';
import Store from './page/page-store/index';
import Register from './page/page-register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/dash-board" element={<Dashboard/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
