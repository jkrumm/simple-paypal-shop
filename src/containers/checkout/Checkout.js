import React from 'react';
import { Button } from "antd";
import './Checkout.scss';
import PayPal from "../../components/paypal/PayPal";


export default function Cart() {
    return (
        <div>
            <h1>Moin</h1>
            <PayPal/>
        </div>
    );
}