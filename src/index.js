import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
import App from './App';

export const initialOptions = {
    "client-id": "ASV75IqhGqclQSenVw4sFAuMQ88F8gYDKxJLVF-p77zTkSYBkMwI_FJqNy8y6sIrzQFA-DngSDo94vCl",
    currency: "EUR",
    intent: "capture",
    // "data-client-token": "access_token$sandbox$m2mfyrm5gt8rh3hs$b9047938f840619516eaf1deb4f054f1",
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

