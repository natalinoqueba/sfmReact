import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <Logo />
            <img src="imagens/menu.png" alt="" id="btMenu" onclick="menu()" />
            <Nav />
        </header>
    );
};

export default Header;
