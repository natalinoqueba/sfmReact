import Logo from "./Logo";
import Nav from "./Nav";
import btnMenu from "../images/menu.svg"
import btnMenuX from "../images/close.svg"
import React from "react";


const Header = () => {
    const [menu, setMenu] = React.useState(true)

    function changeMenu() {
        setMenu((prevState) => !prevState)
    }

    return (
        <header>
            <Logo />
            <img src={menu ? btnMenu : btnMenuX} id="btMenu" alt="" onClick={changeMenu}/>
            {menu || <Nav />}
        </header>
    );
};




export default Header;
