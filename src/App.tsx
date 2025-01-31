import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './components/TaskManager';
import Users from './components/Users';
import TaskHistory from './components/TaskHistory';
import NavBar from './components/NavBar';

import "./styles/App.css";

import User from './data/User';
import SingleTaskPage from './components/SingleTaskPage';

function App() {
  let currentUser: User;
  currentUser = {
    id: 1,
    name: {
      firstName: "Lachezar",
      lastName: "Genov"
    },
    image: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=",
    age: 21,
    completedTasks: []
  }
  return (
    <div className='app-root'>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskManager currentUser={currentUser} />} />
        <Route path='/users' element={<Users />} />
        <Route path='taskHistory' element={<TaskHistory />} />
        <Route path='/tasks/:id' element={<SingleTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
