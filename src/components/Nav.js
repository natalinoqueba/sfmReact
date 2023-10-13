import home from "../images/home.png";
import about from "../images/about-us.png";
import contact from "../images/contact.png";
import credits from "../images/credits.png";

const Nav = () => {
    return (
        <nav id="menu">
            <ul>
                <li>
                    <img src={home} alt="" className="icon-nav" />
                    <a href="#home">Home</a>
                </li>
                <li>
                    <img src={about} alt="" className="icon-nav" />
                    <a href="sobrenos.html" target="_self">
                        Sobre Nós
                    </a>
                </li>
                <li>
                    <img src={credits} alt="" className="icon-nav" />
                    <a href="#creditos">Créditos </a>
                </li>
                <li>
                    <img src={contact} alt="" className="icon-nav" />
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
