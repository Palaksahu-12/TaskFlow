import { useState } from 'react'
import {  BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/profile" element={<Profile />} />
      
      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-10">
            404 -Page Not Found
          </h1>
        }
      />
    </Routes>
    </BrowserRouter>  
  )
}

export default App;
