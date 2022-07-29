import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../containers/Home'
import NavBars from '../components/NavBars'
import Memorize from '../components/Memorize';
import MemorizeHooks from '../components/MemorizeHooks';
import CallbackHooks from '../components/CallbackHooks';
import { Padre } from '../EjercicioInd/Padre';
import HomeP from '../Proyecto-useContext/components/HomeP';


const AppRouters = () => {
    return (
   
          <BrowserRouter>
          <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/memo" element={<Memorize/>}/>
                <Route path="/useMemo" element={<MemorizeHooks/>}/>
                <Route path="/useCallback" element={<CallbackHooks/>}/>
 
                {/* ejercicio Independiente */}
                 <Route path="/padre" element={<Padre/>}/>

                {/* Ejercicio con UseContex*/}
                <Route path="/homeProyecto" element={<HomeP/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            </BrowserRouter>
      
    );
};

export default AppRouters;