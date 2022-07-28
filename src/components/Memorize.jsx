import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import useCounter from '../hooks/useCounter';
import Small from './Small';

//-Memo - devuelve el componente Memorizado

const Memorize = () => {
    const { counter,handleSumar,handleRestar,handleReset} = useCounter()
    
    const [show, setShow]= useState(true)
    
    return (
        <div>
            <h1>Contador: <Small valor={counter}/> </h1>
            <Button variant="primary" onClick={handleSumar}>+ 1</Button>{' '}
            <Button variant="secondary" onClick={handleRestar}>- 1</Button>{' '}
            <Button variant="success" onClick={handleReset}>Reset</Button>
                        
            <Button variant="danger" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
    );
};

export default Memorize;