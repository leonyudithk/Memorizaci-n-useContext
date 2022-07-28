import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter]= useState(10);
    console.log(counter)

    const handleSumar =()=>{
        setCounter(counter + 1)
    }

    const handleRestar =()=>{
        setCounter(counter - 1)
    }

    const handleReset =()=>{
        setCounter(0)
    }

    return {
        counter,
        handleSumar,
        handleRestar,
        handleReset
    }
       
    
};

export default useCounter;