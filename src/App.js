import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Product from "./containers/product/Product";
import Checkout from "./containers/checkout/Checkout";
import Navigation from "./components/navigation/Navigation";
import './App.scss';

function App() {
    // const [cart, setCart] = useState([]);
    const [showShop, setShowShop] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const showShopParam = urlParams.get('showShop')
        setShowShop(showShopParam === "true");
    });

    const addToCart = () => {
        console.log('addToCart')
    }

    return (
        <div className="wrapper">
            <Navigation showShop={showShop}/>
            <main>
                <Switch>
                    <Route path="/" exact><Home addToCart={addToCart} showShop={showShop}/></Route>
                    <Route path="/product"><Product addToCart={addToCart} showShop={showShop}/></Route>
                    <Route path="/cart" component={Checkout} showShop={showShop}/>
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
