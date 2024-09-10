import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setcounter] = useState(initialValue)

    const increment = (valor = 1) => {
        setcounter(counter + valor);
    }

    const decrement = (valor = 1) => {
        if (counter == 0) return;
        setcounter(counter - valor);
    }

    const reset = () => {
        setcounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
