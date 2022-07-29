import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { UsuarioContext } from '../context/UsuarioContext';

const Login = () => {

    const [form, setForm]= useState({
        nombre: "Geek F12",
        email:  "f12@gmail.com"
       
    })

    console.log(form)

        //llamo a los estados globales USUARIO
    const {user, setUser} = useContext(UsuarioContext)
    console.log(user, 'desde login')
    
    return (
        <div>
             <Button variant="success" onClick={() =>setUser(form)}>Login</Button>
             {JSON.stringify(user)}
        </div>
    );
};

export default Login;