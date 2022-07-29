import React from 'react';
import Login from './Login';
import Logout from './Logout';

const HomeP = () => {
    return (
        <div>
            <h1>Estoy usando el UseContex</h1>
            <Login/>
            <Logout/>
        </div>
    );
};

export default HomeP;