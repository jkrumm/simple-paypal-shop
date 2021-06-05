import React from 'react';
import './Checkout.scss';
import PayPal from "../../components/paypal/PayPal";


export default function Cart() {
    return (
        <div>
            <h1>Hier werden Produkte aufgelistet die von Kunden in den Warenkorb gelegt wurden. Sie können gelöscht oder bezahlt werden.</h1>
            <PayPal/>
        </div>
    );
}