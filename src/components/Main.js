import Contacto from "./Contacto"
import Credito from "./Credito"
import Home from "./Home"
import Local from "./Local"
import Parceiros from "./Parceiros"
import SobreEmpresa from "./SobreEmpresa"
import Whats from "./Whats"

const Main = () => {
    return (
        <main>
            <section>
                <Home/>
            </section>
            <article>
                <SobreEmpresa/>
                <Credito/>
                <Contacto/>
                <Local/>
                <Parceiros/>
                <Whats/>
            </article>
        </main>
    )
}