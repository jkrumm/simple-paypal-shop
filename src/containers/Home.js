import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import ImageSlider from '../components/Slider/Slider';

const products = require('../products.json');


export default function Home(props) {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <ImageSlider/>

            <header id="main-header">
                <h1>SeaSpa GbR.</h1>
            </header>
            <section>
                <article className="post">
                    <h3> Blog post 1</h3>
                    <small>Post von Tassilo</small>
                    <p>Hier schreiben wir einen kleinen <strong>Willkommenstext</strong>... <em>Unsere GbR heißt
                        SeaSpa</em> und wir wollen den Irländischen Trend in Seetang zu Baden nach Deutschland
                        zu bringen. <a href="http://google.de" target="_blank" rel="noreferrer">Der Seetang</a> ist gut
                        für die Haut
                        und fördert die Durchblutung. Wir wissen das ber erst genau sobald wir das in verlässlichen
                        Quellen recherchiert haben.</p>
                    <a href="http://google.de" target="_blanc">Read more</a>
                </article>
                <article className="post">
                    <h3> Blog post 2</h3>
                    <small>Post von Tassilo</small>
                    <p>Hier schreiben wir einen kleinen <strong>Willkommenstext</strong>... <em>Unsere GbR heißt
                        SeaSpa</em> und wir wollen den Irländischen Trend in Seetang zu Baden nach Deutschland
                        zu bringen. <a href="http://google.de" target="_blank" rel="noreferrer">Der Seetang</a> ist gut
                        für die Haut
                        und fördert die Durchblutung. Wir wissen das ber erst genau sobald wir das in verlässlichen
                        Quellen recherchiert haben.</p>
                </article>
                <article className="post">
                    <h3> Blog post 3</h3>
                    <small>Post von Tassilo</small>
                    <p>Hier schreiben wir einen kleinen <strong>Willkommenstext</strong>... <em>Unsere GbR heißt
                        SeaSpa</em> und wir wollen den Irländischen Trend in Seetang zu Baden nach Deutschland
                        zu bringen. <a href="http://google.de" target="_blank" rel="noreferrer">Der Seetang</a> ist gut
                        für die Haut
                        und fördert die Durchblutung. Wir wissen das ber erst genau sobald wir das in verlässlichen
                        Quellen recherchiert haben.</p>
                </article>
            </section>
            <aside>
                <h3>Beschreibung o.ä. (Seite)</h3>
                <ul>
                    <li>Produkt Nummer 7</li>
                    <li>Produkt Nummer 8</li>
                    <li>Produkt Nummer 9</li>
                    <li>Produkt Nummer 10</li>
                </ul>
            </aside>
            <footer id="main-footer">
                Copyright &copy; 2021, My Website
            </footer>


            <h1>Hallo</h1>
            <h2>Überschrift vor dem Übungstext</h2>
            <p>
                Hier schreiben wir einen kleinen <strong>Willkommenstext</strong>... <em>Unsere GbR heißt
                SeaSpa</em> und wir wollen den Irländischen Trend in Seetang zu Baden nach Deutschland
                zu bringen. <a href="http://google.de" target="_blank" rel="noreferrer">Der Seetang</a> ist gut für die Haut
                und fördert die Durchblutung. Wir wissen das ber erst genau sobald wir das in verlässlichen
                Quellen recherchiert haben.
            </p>
            <p>Hier schreibe ich irgendetwas</p>
            <p>
                Wir sind ein team aus 4 Leuten und ich hab keinen Plan was ich hier schreibe aber ich mach
                einfach weiter damit ich genügend Text zusammenbekomme damit ich damit auf unserern späterm
                Webshop üben kann.
            </p>
            <h3>Zwischenüberschrift</h3>
            <p>
                Es ist auch ziemlich cool das wir mitlerweite ein Paket mit ungefähr 2 kg Seetang auf dem weg nach
                Deutschland geschickt haben um es hier auch mal ausprobieren zu können und noch viel wichtiger um
                es Analysieren zu lassen. Das haben wir unserere sehr netten Wirtschaftspatin zu verdanken, die zur zeit
                viel mit Retterspitz zu tun hat. Deshalb konnte Sie uns ein Meeting mit dem Vorstand und
                Produktdesigner verschaffen. Ich hoffe das der Text jetzt einigermaßen lang ist und ich gut damit
                arbeiten kann.
            </p>
            {/* Lists (unordered, ordered) */}
            <h2>Listen</h2>
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                <li>List Item 4</li>
                <li>List Item 5</li>
            </ul>
            <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                <li>List Item 4</li>
                <li>List Item 5</li>
            </ol>

            {/* Table (Tabellen) */}
            <h2>Tabellen</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tassilo Wilde</td>
                    <td>Tassilowilde@gmail.com</td>
                    <td>24</td>
                </tr>
                <h6>Wert2</h6>
                <tr>
                    <td>Tom Wilde</td>
                    <td>thomas@gmail.com</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>Susi Wilde</td>
                    <td>susi@gmail.com</td>
                    <td>55</td>
                </tr>
                </tbody>
            </table>

            {/* So wird ein abstand ohne .scss gemacht... */}
            <br></br>
            {/* So wird eine Linie gemacht */}
            <hr></hr>

            {/* Forms */}
            <h2>Eingabefelder</h2>
            <form action="xxx.php" methods="POST">
                <h4>Einfaches Feld mit Name</h4>
                <label>Vorname</label>
                <input type="text" name="vorName"></input>
                <label>Nachname</label>
                <input type="text" name="nachName"></input>

                <hr></hr>

                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName"></input>
                </div>
                <br></br>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Enter your name"></input>
                </div>
                <div>
                    <label>E-Mail</label>
                    <input type="Email" name="email"></input>
                </div>
                <hr></hr>
                {/* Hier geht es nicht mehr um einen "normalen Input sondern um ein Eingabefelf für Texte (texstarea)" */}
                <h4>Textfeld</h4>
                <label>Message</label>
                <textarea nema="message"></textarea>
                <label>Nachricht</label>
                <textarea nema="nachricht"></textarea>
                <hr></hr>
                {/* Hier wird gezeigt wie ich eine Liste zum Auswählen erstellen kann */}
                <h4>Dropdown-Auswahl</h4>
                <div>
                    <label>Gender</label>
                    <select name="gender">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* Zahleneingabe/Auswahl */}
                <h4>Zahleneingabe</h4>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" placeholder="33"></input>
                </div>
                <br></br>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" value="30"></input>
                </div>
                {/* Datumseingabe/Außwahl */}
                <h4>Datumseingabe</h4>
                <div>
                    <label>Birthday</label>
                    <input type="date" name="birthday"></input>
                </div>
                {/* Bestätigungsbutton...(Der nirgenswohinfürt weil wir einen "action"-Wert in Forms definiert haben den es nicht wirklich gibt) */}
                <h4>Bestätigungsbebuton</h4>
                <div>
                    <input type="submit" name="submit" value="Eingabe bestätigen"></input>
                </div>
            </form>
            {/* Knöpfe */}
            <h2>Normale Buttons</h2>
            <button>Click Me</button>
            {/* Bilder */}
            <h2>Bilder</h2>
            <a href="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Bildschirmfoto_2021-04-12_um_16.20.30_bKrRHsv79AM.png"
               target="_blanc">
                <img src="https://ik.imagekit.io/bfx2aftyt/SeaSpa/Bildschirmfoto_2021-04-12_um_16.20.30_bKrRHsv79AM.png"
                     alt="Seetangwald" width="999"></img>
            </a>
            {/* Quotation */}
            <h2>Keine Ahnung was dieses Quotation soll</h2>
            <blockquote cite="http://google.com">
                Ich schreibe irgendeinen text... Vielleicht sollte er ein bischen länger sein
                aber so müsste das schon reichen um zu erkennen worauf es hinausläuft...
            </blockquote>

            <p>
                Schon wieder irgendein test ... Mit einer Abkützung <abbr title="World Wide Web">WWW</abbr> steht ja
                bekanntlich für World Wide Web ... aber wenn ihr mit der Maus über das WWW
                fahrt erscheint dann auch in kleine World Wide Web. Jeeha :() es fuktioniert...
            </p>

            <p>
                <cite>HTML lernen</cite> macht spaß!
            </p>


            {/* Das hier hat Jo gemacht... das sind auch fuktionen dabei wie auf die
            Produktseite mit dem jeweiligen Produkt übergeleitet zu werden
            !
            !
            !
            !
            !
            !
            !
            !
            ! */}
            <h1>Welcome on Home!!</h1>
            Counter: {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <div>
                <ul>
                    {products.map(item => <Link key={item.id} to={"/product/" + item.id}>
                        <li>{item.title}</li>
                    </Link>)}
                </ul>
            </div>
        </div>
    );
}