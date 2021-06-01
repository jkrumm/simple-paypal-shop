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
            <h1>Der Seegrasbad Trend</h1>
            <p>
                Die Iren erzählen seit Anfang des zwanzigsten Jahrhunderts von - Bäder in Meerwasser mit Seegras unterstützen die 
                Gesundheit und sind wahre Wundermittel gegen Gelenkschmerzen. Durch seine beruhigende Wirkung dienen die Seegrasbäder 
                außerdem schon seit je her der Erholung und Entspannung.
            </p>
            <br></br>
        </section>

        <section className="nutzen">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Pixabay/Seetang-Nahaufnahme_PLYkYjBesB.jpg"></img>
            <br></br>
            <div>
                <h1>Die Wirkung</h1>
                <p>
                    Seegras ist reich an Mineralien, welche bei der Anwendung in der entspannenden Badewanne, freigesetzt werden. Diese regen 
                    aktiv die Durchblutung an und spenden Feuchtigkeit. Dadurch pflegt das Bad nicht nur die Haut, sondern entspannt dabei 
                    zugleich den ganzen Körper. Wercher scheiß idiot hat mir den Txt reingeballert ihr dummen vollidiote ich mad das gabz HTML und SCSS der Homapage und ihr bekommt nicht ein mal den schei text geschissen "!!!!"
                </p>
                <br></br>
            </div>
        </section>

        <section className="produkt">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/coming-soon-2550190_1280_tByU9nQ__.jpg"></img>
            <br></br>
            <div>
                <h1>Das Seegrasbad</h1>
                <p>
                    Seegras ist eine Meerespflanze die hauptsächlich an den Küsten des Nordatlantiks wächst. Das Seegras wird von Hand geerntet, 
                    bevor es weiterverarbeitet wird. Der gesamte Produktionsprozess verläuft dabei absolut natürlich ab, ohne Zusatz von 
                    weiteren Produkten.
                </p>
                <br></br>
            </div>
        </section>

        <section className="wir">
            <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Auf_Homepage/FotoJet_2_Q6OoP4iIH2z.jpg"></img>
            <br></br>
            <div>
                <h1>SeaSpa-Team</h1>
                <p>
                SeaSpa GbR wurde 2021 gegründet und steht für nachhaltige Naturprodukte. Mit dem Badezusatz aus Seegras können wir 
                ein natürliches Produkt in den Alltag integrieren. Dies motiviert uns und hilft Ihnen bei einem entspannten und 
                gepflegten Bad.
                </p>
                <br></br>
            </div>
        </section>


            <section className="umfrage">
                <div>
                    <iframe frameborder="0" id="iframeX6D3A1V8A8F1F9Y6J" src="https://www.survio.com/survey/d/G9W5O5T5S6P9K6M9U" height="300" width="400"></iframe>
                    <br></br>
                </div>
                
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