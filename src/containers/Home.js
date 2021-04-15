import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const products = require('../products.json');

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h1>Welcome on Home!</h1>
            Counter: {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <div>
                <ul>
                    {products.map(item => <Link key={item.id} to={"/product/" + item.id}><li>{item.title}</li></Link>)}
                </ul>
            </div>
        </div>
    );
}