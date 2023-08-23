import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, NavLink, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import Navbar from './View/Admin_tamplate/Navbar/Navbar';
import { router } from './Connection/Router';





function App() {


  return (
    <div>
    
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
