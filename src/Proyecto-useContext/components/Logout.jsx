import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import { UsuarioContext } from '../context/UsuarioContext';

const Logout = () => {
    const { user, setUser } = useContext(UsuarioContext)
    console.log('hol', user)
    return (
        <div>
            <h1>El estado que llego es:  {JSON.stringify(user)} </h1>
            <Button onClick={() =>
                setUser({
                    nombre: "Adios",
                    email: "Adios@gmail.com"
               
                })
            }>
                Logout
            </Button>

        </div>
    )
};

export default Logout;