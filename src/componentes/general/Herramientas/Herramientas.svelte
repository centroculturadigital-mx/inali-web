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
  .Riesgo:focus,
  .Riesgo:active {
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


/* TOOLTIPS */
.tooltipRiesgo .tooltiptext {
  visibility: hidden;
  position: absolute;
  width: 65px;
  background-color: rgba(255, 97, 97, 1);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  top: 120%;
  left: 45%;
  margin-left: -60px;
  font-size: .75rem;
}

.tooltipRiesgo .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(255, 97, 97, 1) transparent;
  
}

.tooltipRiesgo:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltipVoluta .tooltiptext {
  visibility: hidden;
  position: absolute;
  width: 65px;
  background-color: #465D72;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  top: 120%;
  left: 96%;
  margin-left: -60px;
  font-size: .75rem;
}

.tooltipVoluta .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #465D72 transparent;
  
}

.tooltipVoluta:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}



  
</style>

<section>
<div class="tooltipRiesgo"> 
  <span class="tooltiptext">Riesgo</span>
  <button class="Riesgo" >
    <img src={IconoRiesgo} alt="Riesgo de extinción de la lengua" />
  </button>
</div>
<div class="tooltipVoluta">
  <span class="tooltiptext">Aforismos</span>
  <button class="Voluta">
    <img src={IconoVoluta} alt="Texto animado" />
  </button>
</div>

</section>
