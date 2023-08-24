import React, { useState } from 'react';
import './App.css';
import {  RouterProvider, Routes } from 'react-router-dom';

import { router } from './Connection/Router';





function App() {


  return (
    <div>
    
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
