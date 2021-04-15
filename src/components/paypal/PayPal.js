import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {initialOptions} from '../../index';

export default function PayPal() {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
    );
}