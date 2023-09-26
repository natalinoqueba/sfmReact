const BtnSlide = () => {
  return (
    <div id="btSlides">
      <div class="seta tras" onclick="trocarSlide(0)">
        <img
          src="imagens/tras.png"
          alt=""
          onclick="preencher(this)"
          onmouseleave="seta(this)"
        />
      </div>
      <div class="circulo">
        <img src="imagens/circulo-preenchido.png" alt="" id="c1" />
      </div>
      <div class="circulo">
        <img src="imagens/circulo.png" alt="" id="c2" />
      </div>
      <div class="circulo">
        <img src="imagens/circulo.png" alt="" id="c3" />
      </div>
      <div class="seta frente" onclick="trocarSlide(1)">
        <img
          src="imagens/tras.png"
          alt=""
          onclick="preencher(this)"
          onmouseleave="seta(this)"
        />
      </div>
    </div>
  );
};

export default BtnSlide