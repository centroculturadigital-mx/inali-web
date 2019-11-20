<script>
  const IconoRiesgo = "icono.riesgo.svg";
  const IconoVoluta = "icono.voluta.svg";
</script>

<style>
  section {
    display: flex;
    justify-content: space-evenly;
    /* min-width: 130px; */
    width: 21rem;
  }
  button {
    cursor: pointer;
    height: 2.5rem;
    width: 9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .Riesgo {
    background: rgba(255, 97, 97, 0.8);
    background-blend-mode: multiply;
    border-radius: 4px;
    border: 0;
  }
  .Riesgo img {
    width: 18px;
  }
  .Riesgo:hover,
  .Riesgo:focus,
  .Riesgo:active {
    background: rgb(234, 76, 76);
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.15);
  }
  .Voluta {
    background-color: rgb(70, 93, 114, 0.8);
    background-blend-mode: multiply;
    border-radius: 4px;
    border: 0;
  }
  .Voluta img {
    height: 16px;
  }
  .Voluta:hover,
  .Voluta:focus,
  .Voluta:active {
    background: rgb(70, 93, 114);
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.15);
  }

  span {
    color: #fff;
    font-size: 1rem;
    font-family: Fira Sans;
  }

  
</style>

<section>
  <button class="Riesgo" >
    <img src={IconoRiesgo} alt="Riesgo de extinción de la lengua" />
    <span>
      Modo riesgo
    </span>
  </button>
  <button class="Voluta">
    <img src={IconoVoluta} alt="Texto animado" />
    <span>
      Aforismos  
    </span>
  </button>
</section>
