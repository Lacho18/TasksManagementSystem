import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TaskManager from './components/TaskManager';
import Users from './components/Users';
import TaskHistory from './components/TaskHistory';
import NavBar from './components/NavBar';

import "./styles/App.css"

function App() {
  return (
    <div className='app-root'>
      <NavBar />
      <Routes>
          <Route path='/' element={<TaskManager />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='taskHistory' element={<TaskHistory />}/>
      </Routes>
    </div>
  );
}

export default App;
