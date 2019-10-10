<script>
  const IconoRiesgo = "icono.riesgo.svg";
  const IconoVoluta = "icono.voluta.svg";
</script>

<style>
  section {
    display: flex;
    justify-content: space-around;
    min-width: 130px;
  }
  button {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
  }

  .Riesgo {
    background: rgba(255, 97, 97, 0.8);
    background-blend-mode: multiply;
    border-radius: 4px;
    border: 0;
  }
  .Riesgo img {
    width: 17px;
  }
  .Riesgo:hover,
  .Riego:focus,
  .Riego:active {
    background: rgba(255, 97, 97, 1);
  }
  .Voluta {
    background-color: rgba(219, 219, 219, 0.8);
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
    background: #465D72;
  }
</style>

<section>
  <button class="Riesgo">
    <img src={IconoRiesgo} alt="Riesgo de extinción de la lengua" />
  </button>
  <button class="Voluta">
    <img src={IconoVoluta} alt="Texto animado" />
  </button>
</section>
