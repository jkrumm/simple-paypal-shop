import React, {useState, useEffect} from 'react';
import {Radio, Button} from 'antd';
import './Product.scss';

const products = require('../../products.json');

export default function Product(props) {
    const product = products.filter(item => item.id === parseInt(window.location.href.split("/").pop()))[0];
    const [image, setImage] = useState(product.images[0]);
    const [variant, setVariant] = useState(product.variants[0]);

    useEffect(() => {
    });
    console.log(product)

    const handleVariantChange = () => {

    }

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <div><img src={image + '?tr=w-500,h-550,cm-pad_resize,bg-F3F3F3'}/></div>
                <div>
                    {product.images.map(item =>
                        <img onClick={() => setImage(item)} src={item + '?tr=w-50,h-55,cm-pad_resize,bg-F3F3F3'}/>
                    )}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <p className="">{variant.price}</p>
                <Radio.Group type={"primary"}>
                    {product.variants.map(item => <Radio.Button onClick={
                        e => setVariant(product.variants.filter(i => i.id === parseInt(e.target.value))[0])
                    } value={item.id}>{item.weight}</Radio.Button>)}
                </Radio.Group>
                <Button className="add-to-cart" type="primary" onClick={() => props.addToCart()}>Zum Einkaufswagen hinzufügen</Button>
            </div>
        </div>
    );
}