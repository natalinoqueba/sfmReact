import logo from "../images/logo.png"

const Logo = () => {
    return (
        <div id="logotipo">
            <img src={logo} alt="" id="logo" />
            <p id="ph1">Solver Financial Multiservice,SA</p>
            <p id="ph2">Servicos financeirios</p>
        </div>
    );
};

export default Logo;
