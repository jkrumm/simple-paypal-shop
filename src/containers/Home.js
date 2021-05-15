import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageSlider from '../components/Slider/Slider';
// import BlogPostTitle from "../components/blog/blog-post-list";

const products = require('../products.json');
// const blog = require('../blog.json');

export default function Home(props) {
    const [count, setCount] = useState(0);
    const {showShop} = props;

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="hintergrund">
            <ImageSlider/>

            {/* {blog.map(item =>*/}
            {/*    <BlogPostTitle blogPost={item} imageOrientation="left"/>*/}
            {/*)} */}
        
        <section className="geschichte">
            <br></br>
            <h1>Trend Seetangbad</h1>
            <p>
                Die Iren erzählen seit Anfang des zwanzigsten Jahrhunderts von - Bäder in Meerwasser mit Seetang unterstützen die 
                Gesundheit und sind wahre Wundermittel gegen Gelenkschmerzen. Durch seine beruhigende Wirkung dienen die Seetangbäder 
                außerdem schon seit je her der Erholung und Entspannung.
            </p>
        </section>

        <section className="nutzen">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Pixabay/Seetang-Nahaufnahme_PLYkYjBesB.jpg"></img>
            <br></br>
            <div>
                <h1>Der Nutzen</h1>
                <p>
                    Seetang ist reich an Mineralien, welche bei der Anwendung in der entspannenden Badewanne, freigesetzt werden. Diese regen 
                    aktiv die Durchblutung an und spenden Feuchtigkeit. Dadurch pflegt das Bad nicht nur die Haut, sondern entspannt dabei 
                    zugleich den ganzen Körper. 
                </p>
            </div>
        </section>

        <section className="produkt">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Pixabay/Seetang-Nahaufnahme_PLYkYjBesB.jpg"></img>
            <br></br>
            <div>
                <h1>Unser Produkt</h1>
                <p>
                    Seetang ist eine Meerespflanze die hauptsächlich an den Küsten des Nordatlantiks wächst. Der Tang wird von Hand geerntet, 
                    bevor er weiterverarbeitet wird. Der gesamte Produktionsprozess verläuft dabei absolut natürlich ab, ohne Zusatz von 
                    weiteren Produkten.
                </p>
            </div>
        </section>

        <section className="wir">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Pixabay/Seetang-Nahaufnahme_PLYkYjBesB.jpg"></img>
            <br></br>
            <div>
                <h1>Über uns</h1>
                <p>
                SeaSpa GbR wurde 2021 gegründet und steht für nachhaltige Naturprodukte. Mit dem Badezusatz aus Meerestang können wir 
                ein natürliches Produkt in den Alltag zu integrieren. Dies motiviert uns und hilft Ihnen bei einem entspannten und 
                gepflegten Bad.
                </p>
            </div>
        </section>


            <section>
                <article>
                    <h3>Umfrage 1</h3>
                    <iframe frameborder="0" id="iframeX6D3A1V8A8F1F9Y6J" src="https://www.survio.com/survey/d/G9W5O5T5S6P9K6M9U" height="300" width="400"></iframe>
                    <br></br>
                    <h3>Umfrage 2</h3>
                    <p>
                        Bitte Machen Sie an der <a href="https://www.survio.com/survey/d/G9W5O5T5S6P9K6M9U" target="_blank" rel="noreferrer">Umfrage</a> mit um die Kundenzufriedenheit zu erhöhen.
                    </p>
                </article>
                
            </section>
            

            {showShop && <div>
                <ul>
                    {products.map(item => <Link key={item.id} to={"/product/" + item.id}>
                        <li>{item.title}</li>
                    </Link>)}
                </ul>
            </div>}
        </div>
    );
}