import React from 'react';
import Login from './page/page-login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './page/dash-board/dash-board';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/dash-board" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
