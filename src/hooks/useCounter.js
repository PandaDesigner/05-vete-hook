import { useState } from 'react';

export const useCounter = (starState = 10) => {

    const [counter, setState] = useState(starState);

    const increment = (factor = 1) => {
        setState(counter + factor);
    }

    const decrement = (factor = 1) => {
        setState( counter - factor);
    }

    const reset = () => {
        setState( starState );
    }

    return{
        state: counter,
        increment,
        decrement,
        reset
    }
}
