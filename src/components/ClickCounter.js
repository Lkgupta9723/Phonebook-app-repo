import React, { useState } from 'react'

const ClickCounter = () => {
    // var count = 0;
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)

    };
    return (
        <div>
            <h2>Click counter example</h2>
            <h3>Value of count is {count}</h3>
            <button  onClick={incrementCount} className='btn btn-primary'>
                Click me!
            </button>
        </div>
    );
};

export default ClickCounter;