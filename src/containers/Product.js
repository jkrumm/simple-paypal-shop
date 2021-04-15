import React, {useState, useEffect} from 'react';

const products = require('../products.json');

export default function Product() {
    const product = products.filter(item => item.id === parseInt(window.location.href.split("/").pop()))[0];
    console.log(product)

    return (
        <div>
            <h1>Welcome on Product!</h1>
            {product.title}
        </div>
    );
}