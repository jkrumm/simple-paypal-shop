import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Product from "./containers/product/Product";
import Checkout from "./containers/checkout/Checkout";
import Navigation from "./components/navigation/Navigation";
import './App.scss';

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {

    });

    const addToCart = () => {
        console.log('addToCart')
    }

    return (
        <div className="wrapper">
            <Navigation/>
            <main>
                <Switch>
                    <Route path="/" exact><Home addToCart={addToCart}/></Route>
                    <Route path="/product"><Product addToCart={addToCart}/></Route>
                    <Route path="/cart" component={Checkout}/>
                    {/*<Route path="/about" component={About} />*/}
                    {/*<Route path="/shop" component={Shop} />*/}
                    {/*<Route component={Error} />*/}
                </Switch>
            </main>
            <footer>
                {/*<PayPalScriptProvider options={initialOptions}>*/}
                {/*<PayPalMarks fundingSource={FUNDING.PAYPAL}/>*/}
                {/*</PayPalScriptProvider>*/}
            </footer>
        </div>
    )
}

export default App;
