import React from 'react';
import { Button } from "antd";
import './Cart.scss';
import {Link} from "react-router-dom";


export default function Checkout() {
    return (
        <div>
            <h1>Produkte</h1>
            <Button><Link to="/cart">Zur Kasse</Link></Button>
        </div>
    );
}
