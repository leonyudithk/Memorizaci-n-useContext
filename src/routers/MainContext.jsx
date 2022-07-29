import React, { useState } from 'react';
import { UsuarioContext } from '../Proyecto-useContext/context/UsuarioContext';
import AppRouters from './AppRouters';


//2do paso indicar cuales seran los estados globales. inicializarlos

const MainContext = () => {

console.log('dentro de main')

    const [user, setUser] = useState({
       nombre: "Yudith",
       email:  "yudith@gmail.com"
    
    })

    console.log('estoy en MainContext y mi usuario es: ', user)

    //3er paso indicar a quien quiero proveer con estos estados
    return (
        <div>
           <UsuarioContext.Provider value={{user, setUser}}>
            <AppRouters/>
           </UsuarioContext.Provider>
        </div>
    );
};

export default MainContext;