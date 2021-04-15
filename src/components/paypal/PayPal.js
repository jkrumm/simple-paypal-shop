import React from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "ASV75IqhGqclQSenVw4sFAuMQ88F8gYDKxJLVF-p77zTkSYBkMwI_FJqNy8y6sIrzQFA-DngSDo94vCl",
    currency: "EUR",
    intent: "capture",
    // "data-client-token": "access_token$sandbox$m2mfyrm5gt8rh3hs$b9047938f840619516eaf1deb4f054f1",
};

export default function PayPal() {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
    );
}