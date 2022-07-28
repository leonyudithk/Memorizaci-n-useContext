import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home'
import NavBars from '../components/NavBars'
import Memorize from '../components/Memorize';
import MemorizeHooks from '../components/MemorizeHooks';
import CallbackHooks from '../components/CallbackHooks';
import { Padre } from '../EjercicioInd/Padre';


const AppRouters = () => {
    return (
   
          <BrowserRouter>
          <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/memo" element={<Memorize/>}/>
                <Route path="/useMemo" element={<MemorizeHooks/>}/>
                <Route path="/useCallback" element={<CallbackHooks/>}/>

                <Route path="/padre" element={<Padre/>}/>
            </Routes>
            </BrowserRouter>
      
    );
};

export default AppRouters;