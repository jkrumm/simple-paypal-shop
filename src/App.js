import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Home from './containers/Home';
import Product from "./containers/Product";
import Navigation from "./components/navigation/Navigation";
import './App.scss';

function App() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/product" component={Product}/>
                    {/*<Route path="/about" component={About} />*/}
                    {/*<Route path="/shop" component={Shop} />*/}
                    {/*<Route component={Error} />*/}
                </Switch>
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}

export default App;
