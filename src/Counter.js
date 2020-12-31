import React, {useState} from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = (num) => () => {
        console.log('+1');
        setNumber(num + 1);
    }
    const onDecrease = (num) => () => {
        console.log('-1');
        setNumber(num - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease(100)}>+1</button>
            <button onClick={onDecrease(-500)}>-1</button>
        </div>
    )
}

export default Counter;