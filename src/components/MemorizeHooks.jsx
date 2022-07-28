import React, { useMemo, useState } from 'react';
import useCounter from '../hooks/useCounter';
import Small from './Small';
import Button from 'react-bootstrap/Button'
import { procesoPesado } from '../helpers/procesoPesado';

//useMemo - devuelve a valor memorizado

const MemorizeHooks = () => {
    const { counter,handleSumar,handleRestar,handleReset} = useCounter()
    
    const [show, setShow]= useState(true)

    //Vamos a llamar al proceso peesado
    const memorizadoPP= useMemo(() => procesoPesado(550), [])


    return (
        <div>
            <h1>Contador: <Small valor={counter}/> </h1>
            <p>Proceso Pesado: {memorizadoPP}</p>
            <Button variant="primary" onClick={handleSumar}>+ 1</Button>{' '}
            <Button variant="secondary" onClick={handleRestar}>- 1</Button>{' '}
            <Button variant="success" onClick={handleReset}>Reset</Button>
                        
            <Button variant="danger" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
    );
};

export default MemorizeHooks;