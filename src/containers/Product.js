import React, { useState, useEffect } from 'react';

export default function Product() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h1>Welcome on Product!</h1>
            Counter: { count }
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}