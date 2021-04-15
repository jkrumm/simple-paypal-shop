import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Home from './containers/Home';
import Product from "./containers/Product";
import Checkout from "./containers/checkout/Checkout";
import Navigation from "./components/navigation/Navigation";
import './App.scss';

function App() {
    return (
        <div className="wrapper">
            <Navigation/>
            <main>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/product" component={Product}/>
                    <Route path="/cart" component={Checkout}/>
                    {/*<Route path="/about" component={About} />*/}
                    {/*<Route path="/shop" component={Shop} />*/}
                    {/*<Route component={Error} />*/}
                </Switch>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default App;
