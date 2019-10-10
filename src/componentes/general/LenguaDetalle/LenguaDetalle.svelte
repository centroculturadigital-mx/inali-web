<script>
  import { createEventDispatcher } from "svelte";

  const IconoRiesgo = "icono.riesgo.svg";
  const dispatch = createEventDispatcher();

  export let lengua;

  const cerrar = event => {
    dispatch("cerrar");
  };
  $: console.log("lenguaDetalle", lengua);
</script>

<style>
  .DetalleContenedor {
    display: flex;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
    padding-top: 3.25rem;
    width: 50%;
    height: 100%;
  }
  .DetallePleca {
    border-top-right-radius: 15px;
    background-color: #fbb634;
    height: 100%;
    width: 7%;
  }
  .DetalleContenidos {
    padding: 1rem 2.25rem;
    height: 100%;
    width: 93%;
  }
  header {
    height: auto;
    width: 100%;
  }
  .DetalleContenidosNavegacion {
    font-weight: lighter;
    font-size: 0.75rem;
    margin-top: 0;
    position: relative;
    width: 100%;
  }
  .DetalleContenidosNavegacion span {
    cursor: pointer;
  }
  .DetalleContenidosNavegacion a {
    font-weight: 400;
    font-size: 0.75rem;
    background-color: lightgray;
    border-radius: 50px;
    padding: 0.25rem 0.5rem;
  }
  #DetalleCerrar {
    font-size: 1rem;
    color: #000;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
  }
  #DetalleCerrar:hover {
    color: rgba(255, 97, 97, 0.8);
  }
  .DetalleTituloTop {
    font-weight: lighter;
    text-transform: uppercase;
  }
  .DetalleTitulo {
    font-weight: Bold;
  }
  .DetalleNumeroHablantes {
    padding: 0.75rem;
    display: inline-block;
    background-color: rgba(230, 170, 48, 0.1);
    height: 11.25rem;
    width: auto;
  }
  .DetalleNumeroHablantes p {
    font-weight: lighter;
    margin: 0;
  }
  .DetalleOrigen {
    display: flex;
    justify-content: space-evenly;
  }
  .DetalleOrigenRiesgo {
    background-color: #FF0000;
    opacity:0.1;
    display: flex;
    justify-content: space-evenly;
  }

</style>

<section class="DetalleContenedor">

  <div class="DetallePleca" />
  <div class="DetalleContenidos">
    <header>
      <p class="DetalleContenidosNavegacion">
        <span on:click={cerrar}>mapa ></span>
        <a href="../">
          {lengua.NOM_FAM ? lengua.NOM_FAM : lengua.NOM_AGRUP ? lengua.NOM_AGRUP : lengua.NOM_VAR}
        </a>
        <button id="DetalleCerrar" on:click={cerrar}>
          <i class="fa fa-close" />
        </button>
      </p>
      <h2 class="DetalleTituloTop">Familia</h2>
      <h1 class="DetalleTitulo">
        {lengua.NOM_FAM ? lengua.NOM_FAM : lengua.NOM_AGRUP ? lengua.NOM_AGRUP : lengua.NOM_VAR}
      </h1>
      <!-- if familia -->
      <div class="DetalleNumeroHablantes">
        <p>Numero de hablantes:</p>
        <h4>1,965,672</h4>
      </div>
      <!-- end if familia -->
      <!-- if agrupacion -->
      <div class="DetalleOrigen">

        <div class="DetalleOrigenRiesgo">

          <img src={IconoRiesgo} alt="Riesgo de lengua hablada" />

        </div>
        <div class="DetalleOrigenFamilia">

          <i class="fa fa-group" />
        </div>
        <div class="DetalleOrigenVariantes">

          <i class="fa fa-message" />
        </div>

      </div>
      <!-- end if agrupacion -->
    </header>
    <div class="DetalleTextoDescripcion">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestiae et eos dignissimos ab, voluptatem sapiente deserunt
        consequuntur deleniti nulla fugit eaque incidunt numquam officia,
        laudantium id impedit aliquam perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestiae et eos dignissimos ab, voluptatem sapiente deserunt
        consequuntur deleniti nulla fugit eaque incidunt numquam officia,
        laudantium id impedit aliquam perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestiae et eos dignissimos ab, voluptatem sapiente deserunt
        consequuntur deleniti nulla fugit eaque incidunt numquam officia,
        laudantium id impedit aliquam perferendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        molestiae et eos dignissimos ab, voluptatem sapiente deserunt
        consequuntur deleniti nulla fugit eaque incidunt numquam officia,
        laudantium id impedit aliquam perferendis.
      </p>
    </div>
  </div>
</section>

<!-- <button on:click={verMas}>Ver más</button> -->

<!-- content here -->
