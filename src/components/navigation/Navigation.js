import React from 'react';
import {Link} from "react-router-dom";
import Card from '../cart/Cart';
import {Layout, Menu, Popover, Button} from 'antd';
import './Navigation.scss';

const {Header, Content, Footer} = Layout;


export default function Navigation() {
    return (
        <Header>
            <Link to="/">
                <div className="logo">
                    <img alt="logo" src={"https://ik.imagekit.io/jtrj8won4m0/Tasse/logo_oScz6M-M1c.svg"} width="45"/>
                    <h1>Seaspa</h1>
                </div>
            </Link>
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="3"><Link to="/cart">Cart</Link></Menu.Item>
            </Menu>
            <div className="cart">
                <Popover placement="bottomRight" title="Einkaufswagen" content={<Card/>} trigger="click">
                    <Button>Einkaufswagen</Button>
                </Popover>
            </div>
        </Header>
    );
}