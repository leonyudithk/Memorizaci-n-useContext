import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';
//useCallback es para memorizar una funcion callback que se va enviar a un componente Memorizado

const CallbackHooks = () => {
    const [counter, setCounter] =useState(9)
    console.log(counter)

        //Memorizar con useCallback para enviar al componente ShowIncrement que esta memorizadoPP
        const memoizedCallback = useCallback(
            (num) => {
              setCounter(c=> c + num);
            },
            [],
          );

        //desde una funcion para enviar al componente ShowIncrement
        // const incremet = (num) =>{
        //     setCounter(counter + num)
        // }
    return (
        <div>
            <h1>UseCallback:{counter} </h1>
            <ShowIncrement incremento ={memoizedCallback}/>
        </div>
    );
};

export default CallbackHooks;