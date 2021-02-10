import React from 'react';
import LeftSideNav from './Component/LeftSideNav/LeftSideNav';
import Dashboard from './Component/Dashboard/Dashboard';

import './App.css';
function App() {
  return (
    <div className='main'>
        <LeftSideNav/>
        <Dashboard /> 
    </div>
  );
}

export default App;
