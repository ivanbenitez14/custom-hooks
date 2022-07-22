import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
  
    const [counter, setcounter] = useState(initialValue)
    
    const sumar = () => {
        setcounter( counter + 1 );
    }

    const restar = () => {
        //if ( counter === 0) return; para que al restar el valor no disminuya de 0

        setcounter( counter - 1 );
    }

    const resetear = () => {
        setcounter( initialValue );
    }
  
    return {
        counter,
        sumar,
        restar,
        resetear,
    }
}
