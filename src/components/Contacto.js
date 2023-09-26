const Contacto = () => {
    return (
        <div id="contacto">
            <div id="logotipo1">
                <img src="imagens/teste.png" alt="" id="logo" />
            </div>
            <h3>Contacte em função da sua Provincia</h3>
            <div class="conteiner">
                <div id="formulario">
                    <form
                        action="https://formsubmit.co/info@solverfinancial.com"
                        method="POST"
                    >
                        <input type="hidden" name="Formulario" value="Formulario do Site" />
                        <div class="inputBox">
                            <input type="text" name="Nome" required minlength="3" />
                            <span>Nome Completo</span>
                        </div>
                        <div class="inputBox">
                            <input type="email" name="Email" id="" required />
                            <span>Email</span>
                        </div>
                        <div class="inputBox">
                            <input
                                type="tel"
                                name="Telefone"
                                id=""
                                required
                                min="9"
                                max="13"
                            />
                            <span>Contacto </span>
                        </div>
                        <div class="inputBox">
                            <label for="textarea">
                                <span>Assunto:</span>
                            </label>
                            <br />
                            <textarea id="textarea" name="textarea" required></textarea>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="Nome da empresa" id="nome-empresa" />
                            <span>Nome da Instituição </span>
                        </div>
                        <div class="inputBox">
                            <select name="Provincia" id="" required>
                                <option value="Maputo">Maputo</option>
                                <option value="Beira">Zambézia</option>
                                <option value="Nampula">Nampula</option>
                                <option value="Inhambane">Inhambane</option>
                                <option value="Manica">Manica</option>
                            </select>
                        </div>
                        <div class="inputBox">
                            <select name="Crédito" id="" required>
                                <option value="Crédito ao Funciona Público">
                                    Crédito ao Funcionário Público
                                </option>
                                <option value="Crédito ao Funciona Público">
                                    Crédito ao comerciante
                                </option>
                                <option value="Crédito ao consumo">Crédito ao consumo</option>
                            </select>
                        </div>
                        <div class="inputBox">
                            <input
                                type="submit"
                                value="Submeter"
                                id="sub"
                                onclick="submeter()"
                            />
                        </div>
                    </form>
                </div>
                <div class="imgBx">
                    <img src="imagens/IMG2.jpg" alt="solver-foto-formulario" />
                </div>
            </div>
            <button
                class="bt"
                onclick="mudarProv
                (this, 'mp')"
            >
                Maputo
            </button>
            <button
                class="bt"
                onclick="mudarProv
                (this, 'zb')"
            >
                Zambézia
            </button>
            <button
                class="bt"
                onclick="mudarProv
                (this, 'np')"
            >
                Nampula
            </button>
            <button
                class="bt"
                onclick="mudarProv
                 (this, 'in')"
            >
                Inhambane
            </button>
            <button
                class="bt"
                onclick="mudarProv
                  (this, 'mc')"
            >
                Manica
            </button>
            <div id="prov"></div>
        </div>
    );
};

export default Contacto;
