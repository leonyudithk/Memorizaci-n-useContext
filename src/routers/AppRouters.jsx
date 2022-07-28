import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home'
import NavBars from '../components/NavBars'


const AppRouters = () => {
    return (
   
          <BrowserRouter>
          <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                
            </Routes>
            </BrowserRouter>
      
    );
};

export default AppRouters;