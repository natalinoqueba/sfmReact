import Logo from "./Logo";

const Credito = () => {
    return (
        <div id="creditos">
            <h2>Créditos </h2>
            <div id="dsp">
                <div className="caixa" title="solver creditos">
                    <div className="card">
                        <Logo />
                        <h2>
                            CRÉDITO AO <br /><span className="textYe">FUNCIONÁRIO PÚBLICO</span>
                        </h2>
                        <div className="dvspn">
                            <div>
                                <span className="gray span">Desembolso</span>
                                <span className="ylw spn">7 dias</span>
                            </div>
                            <div>
                                <span className="yellow span">Período</span>
                                <span className="gry spn">6 a 7 dias</span>
                            </div>
                            <div>
                                <span className="yellow span">Taxa Mensal</span>
                                <span className="gry spn">2.1% a 2.9%</span>
                            </div>
                            <div>
                                <span className="gray span">Montante</span>
                                <span className="ylw spn">20.000,00 até 2.000.000,00 Mts</span>
                            </div>
                        </div>
                    </div>
                    <a href="#contacto">
                        <input type="button" value="Aderir" id="ad1" className="aderir" />
                    </a>
                </div>
                <div className="caixa" id="card-2">
                <div className="card">
                        <Logo />
                        <h2>
                            CRÉDITO AO <br /><span className="textYe">COMERCIANTE</span>
                        </h2>
                        <div className="dvspn">
                            <div>
                                <span className="gray span">Desembolso</span>
                                <span className="ylw spn">3 dias</span>
                            </div>
                            <div>
                                <span className="yellow span">Período</span>
                                <span className="gry spn">1 á 6 meses</span>
                            </div>
                            <div>
                                <span className="yellow span">Taxa Mensal</span>
                                <span className="gry spn">25%</span>
                            </div>
                            <div>
                                <span className="gray span">Montante</span>
                                <span className="ylw spn">mínimo 30.000.00 Mts</span>
                            </div>
                        </div>
                    </div>
                    <a href="#contacto">
                        <input type="button" value="Aderir" id="ad2" className="aderir" />
                    </a>
                </div>
                <div className="caixa">
                <div className="card">
                        <Logo />
                        <h2>
                            CRÉDITO AO <br /><span className="textYe">CONSUMO</span>
                        </h2>
                        <div className="dvspn">
                            <div>
                                <span className="gray span">Desembolso</span>
                                <span className="ylw spn">24 horas</span>
                            </div>
                            <div>
                                <span className="yellow span">Período</span>
                                <span className="gry spn">6 a 7 dias</span>
                            </div>
                            <div>
                                <span className="yellow span">Taxa Mensal</span>
                                <span className="gry spn">até 25%</span>
                            </div>
                            <div>
                                <span className="gray span">Montante</span>
                                <span className="ylw spn"> mínimo 15.000mts</span>
                            </div>
                        </div>
                    </div>

                    <a href="#contacto">
                        <input type="button" value="Aderir" id="ad1" className="aderir" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Credito;
