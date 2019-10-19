<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import AudiosContenedor from "../Galerias/AudiosContenedor.svelte";
  import Fotos from "../Galerias/Fotos.svelte";
  import Textiles from "../Galerias/Textiles.svelte";

  const IconoTextiles = "icono.textiles.svg";
  const IconoFotos = "icono.fotos.svg";
  const IconoAudios = "icono.audios.svg";
  const dispatch = createEventDispatcher();
  const riesgo = Math.random();

  let ventanaGaleria = null;

  export let lengua;

  const cerrar = event => {
    dispatch("cerrar");
  };

  const cerrarGaleria = event => { 
    ventanaGaleria = event.detail.cierra;
  };

  $: console.log("lenguaDetalle", lengua);

  const RiesgoIcono = `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.2666 0C5.52183 0 0.0666504 5.36575 0.0666504 12C0.0666504 18.6216 5.52183 24 12.2666 24C19.0115 24 24.4667 18.6342 24.4667 12C24.4538 5.36575 18.9986 0 12.2666 0ZM13.7497 20.1818C13.4015 20.5243 12.9115 20.7019 12.2796 20.7019C11.6347 20.7019 11.1318 20.537 10.7836 20.1945C10.4354 19.8647 10.2548 19.3827 10.2548 18.7738C10.2548 18.1395 10.4225 17.6575 10.7707 17.3404C11.1189 17.0106 11.6218 16.8583 12.2796 16.8583C12.9115 16.8583 13.4144 17.0233 13.7626 17.3531C14.1108 17.6829 14.2914 18.1649 14.2914 18.7738C14.2785 19.37 14.0979 19.8393 13.7497 20.1818ZM13.7626 14.9049H10.7965L9.76475 5.80972C9.68737 4.74419 10.8352 3.85624 12.2796 3.85624C13.7239 3.85624 14.8717 4.74419 14.7943 5.80972L13.7626 14.9049Z"/></svg>`;

  const abreGaleria = e => {
    if (e.target.classList.contains("Audio")) {
      ventanaGaleria = "audios";
    } else if (e.target.classList.contains("Foto")) {
      ventanaGaleria = "fotos";
    } else if (e.target.classList.contains("Textil")) {
      ventanaGaleria = "textiles";
    }
  };

  const contenidoFake = {
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus ea dolorem error accusamus, corrupti laborum facere. Praesentium rem cupiditate iure vero dolorum quis, facere quo qui ea, reprehenderit magni?"
  }

  let asignaColor;
  let asignaColorPleca;

  onMount(() => {
    asignaColor.style.color = '#' + lengua.color;
    asignaColorPleca.style.backgroundColor = '#' + lengua.color;
  })
</script>

<style>
  .DetalleContenedor {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    padding-top: 3.25rem;
    padding-bottom: 2.25rem;
    width: 50%;
    height: 100%;
  }
  .DetallePleca {
    background-color: #fbb634;
    height: 100%;
    width: 1rem;
  }
  .DetalleContenidos {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 1rem 1rem;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
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
    letter-spacing: 0.25rem;
  }
  .DetalleTitulo {
    font-weight: Bold;
    color: #fbb634;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .DetalleTituloCastellano {
    font-weight: lighter;
    color: #fcc745;
    font-size: 2.5rem;
    /* letter-spacing: 0.25rem; */
  }
  .DetalleNumeroHablantes {
    padding: 0.75rem;
    display: inline-block;
    background-color: rgba(230, 170, 48, 0.1);
    height: auto;
    width: auto;
  }
  .DetalleNumeroHablantes p {
    font-weight: lighter;
    margin: 0;
  }
  .DetalleOrigen {
    display: flex;
    justify-content: space-evenly;
    height: 4.25rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  .DetalleOrigenRiesgo {
    background-color: rgba(255, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
  }
  .DetalleOrigenFamilia {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
  }
  .DetalleOrigenVariantes {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
    border-left: 1px solid #000;
  }
  .DetalleOrigenIcono {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f4d13b;
  }
  .RiesgoAlto {
    fill: red;
    color: red;
  }
  .RiesgoBajo {
    fill: green;
    color: green;
  }
  .DetalleOrigenTexto {
    color: #3d3d3d;
    margin: 0;
    height: auto;
    width: 70%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .DetalleOrigenTexto div {
    height: auto !important;
  }
  .DetalleOrigenTexto p {
    margin: 0;
    font-size: 0.75rem;
    height: auto;
  }
  .DetalleOrigenTexto small {
    margin: 0;
    font-size: 0.65rem;
  }
  .DatosEstadisticos {
    height: 22rem;
    width: 100%;
    border: 1px solid #000;
  }
  .ReferenciasFeograficas {
    min-height: 10rem;
  }
  .DetalleLista li {
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  .DetalleLista li:hover { 
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  }
  .DetalleLista li h4 {
    margin: 0;
    font-size: 1.25rem;
  }
  .DetalleLista li i {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: #b8d3d1;
  }
  .DetalleFamiliaAgrupacion {
    text-align: center;
    width: 100%; 
  }
  .DetalleFamiliaAgrupacion h3 {
    margin: 2rem;
  }
  .DetalleAgrupacionVariantes {
    text-align: center;
    width: 100%;
  }
  .DetalleBotonesGaleria {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
    color: #fff;
  }
  .BotonGaleria {
    background-color: rgba(70, 93, 114, 0.8);
    border-radius: 10px;
    border: none;
    padding: 1.5rem;
    width: 8rem;
    cursor: pointer;
  }
  .BotonGaleria:hover {
    background-color: rgba(70, 93, 114, 0.7);
  }

  .BotonGaleria > * {
    pointer-events: none;
  }
  .IconoBotonGaleria {
    display: flex;
    justify-content: center;
    min-height: 3rem;
  }
  .TextoBotonGaleria {
    text-align: center;
    color: #FFF;
  }
 .DetalleTextoDescripcion {
   padding: 0 1rem;
 } 
</style>

<section class="DetalleContenedor" transition:fade={{ x: 500, duration: 750 }}>

  <div class="DetallePleca" bind:this={asignaColorPleca} />
  <div class="DetalleContenidos">
    <header>
      <!-- breadcrumbs -->
      <p class="DetalleContenidosNavegacion">
        <span on:click={cerrar}>mapa ></span>
        <a href="../">
          {lengua.NOM_FAM ? lengua.NOM_FAM : lengua.NOM_AGRUP ? lengua.NOM_AGRUP : lengua.NOM_VAR}
        </a>
        <button id="DetalleCerrar" on:click={cerrar}>
          <i class="fa fa-close" />
        </button>
      </p>
      <!-- fin breadcrumbs -->
      <!-- Texto Raiz -->
      {#if lengua.NOM_FAM}
        <h3 class="DetalleTituloTop">Familia</h3>
      {:else if lengua.NOM_AGRUP}
        <h3 class="DetalleTituloTop">Agrupación</h3>
      {:else if lengua.NOM_VAR}
        <h3 class="DetalleTituloTop">Variante</h3>
      {/if}
      <!-- fin Texto Raiz -->
      <!-- Titulo -->
      <h1 class="DetalleTitulo" bind:this={asignaColor}>
        {lengua.NOM_FAM ? lengua.NOM_FAM : lengua.NOM_AGRUP ? lengua.NOM_AGRUP : lengua.NOM_VAR}
      </h1>
      {#if lengua.NOM_VAR}
        <h1 class="DetalleTituloCastellano" bind:this={asignaColor}>
          {lengua.NOM_VAR}
        </h1>
      {/if}
      <!-- fin titulo/subtitulo -->
      <!-- caja informativa familia -->
      {#if lengua.NOM_FAM}
        <div class="DetalleNumeroHablantes">
          <p>Numero de hablantes:</p>
          <h4>1,965,672</h4>
        </div>
      {/if}
      <!-- fin caja informativa familia  -->
      <!-- caja informativa agrupacion  -->
      {#if lengua.NOM_AGRUP}
        <div class="DetalleOrigen">
          <div class="DetalleOrigenRiesgo">
            <div
              class="DetalleOrigenIcono {riesgo >= 0.5 ? 'RiesgoAlto' : 'RiesgoBajo'}">
              {@html RiesgoIcono}
            </div>
            <div class="DetalleOrigenTexto">
              <div>
                <p>{riesgo >= 0.5 ? 'Alto' : 'Bajo'} riesgo de desparición</p>
                <small>
                  <b>1,725,620 hablantes</b>
                </small>
              </div>
            </div>
          </div>
          <div class="DetalleOrigenFamilia">
            <div class="DetalleOrigenIcono">
              <i class="fa fa-group" />
            </div>
            <div class="DetalleOrigenTexto">
              <p>Familia {lengua.familiaId}</p>
            </div>
          </div>
          <div class="DetalleOrigenVariantes">
            <div class="DetalleOrigenIcono">
              <i class="fa fa-share-alt-square" />
            </div>
            <div class="DetalleOrigenTexto">
              <p>{lengua.variantes.length} variantes linguísticas</p>
            </div>
          </div>
        </div>
      {/if}
      <!-- fin caja informativa agrupacion  -->
      <!-- caja informativa variante  -->
      {#if lengua.NOM_VAR}
        <!-- riesgo variante  -->
        <div class="DetalleOrigen">
          <div class="DetalleOrigenRiesgo">
            <div
              class="DetalleOrigenIcono {riesgo >= 0.5 ? 'RiesgoAlto' : 'RiesgoBajo'}">
              {@html RiesgoIcono}
            </div>
            <div class="DetalleOrigenTexto">
              <div>
                <p>{riesgo >= 0.5 ? 'Alto' : 'Bajo'} riesgo de desaparición</p>
                <small>
                  <b>25,620 hablantes</b>
                </small>
              </div>
            </div>
          </div>
          <div class="DetalleOrigenFamilia">
            <div class="DetalleOrigenIcono">
              <i class="fa fa-object-ungroup" />
            </div>
            <div class="DetalleOrigenTexto">
              <p>Agrupación {lengua.agrupacionId}</p>
            </div>
          </div>
          <div class="DetalleOrigenVariantes">
            <div class="DetalleOrigenIcono">
              <i class="fa fa-group" />
            </div>
            <div class="DetalleOrigenTexto">
              <p>Familia {lengua.familiaId}</p>
            </div>
          </div>
        </div>
      {/if}
    </header>
    <!-- fin caja informativa variante  -->
    <!-- descripcion familia  -->
    {#if lengua.NOM_FAM}
      <div class="DetalleTextoDescripcion">
        <p>
          {lengua.informacion}
        </p>
      </div>
      <div class="DetalleFamiliaAgrupacion">
        <h3>Agrupaciones lingüísticas ({lengua.agrupaciones.length})</h3>

        <ul class="DetalleLista">
        {#each lengua.agrupaciones as agrupacion}
          <li>
            <h4>{agrupacion}</h4>
            <i class="fa fa-arrow-circle-right" />
          </li>
        {/each}
        </ul>

      </div>
    {/if}
    <!-- fin descripcion familia  -->
    <!-- descripcion  agrupacion  -->
    {#if lengua.NOM_AGRUP}
      <div class="DetalleTextoDescripcion">
        <p>
          {contenidoFake.descripcion}
        </p>
      </div>
      <!-- Botones a galerias Agrupacion -->
      <div class="DetalleBotonesGaleria">
        <button class="BotonGaleria Audio" on:click={abreGaleria}>
          <div class="IconoBotonGaleria">
            <img src={IconoAudios} alt="Icono Boton Audios INALI" />
          </div>
          <div class="TextoBotonGaleria ">AUDIOS</div>
        </button>
        <button class="BotonGaleria Foto" on:click={abreGaleria}>
          <div class="IconoBotonGaleria ">
            <img src={IconoFotos} alt="Icono Boton Fotos INALI" />
          </div>
          <div class="TextoBotonGaleria">FOTOS</div>
        </button>
        <button class="BotonGaleria Textil" on:click={abreGaleria}>
          <div class="IconoBotonGaleria ">
            <img src={IconoTextiles} alt="Icono Boton Textiles INALI" />
          </div>
          <div class="TextoBotonGaleria">TEXTILES</div>
        </button>
      </div>

      <div class="DetalleAgrupacionVariantes">
        <h3>Variantes lingüísticas ({lengua.variantes.length})</h3>

        <ul class="DetalleLista">
        {#each lengua.variantes as variante, i}
          <li>
            <h4>{variante[i]}</h4>
            <i class="fa fa-arrow-circle-right" />
          </li>
        {/each}
        </ul>
      </div>
    {/if}
    <!-- fin descripcion agrupacion  -->
    <!-- descripcion variante  -->
    {#if lengua.NOM_VAR}
      <!-- <h3>Datos estadísticos</h3>
      <div class="DatosEstadisticos" /> -->
    {/if}
    <!-- fin descripcion variante  -->
  </div>
</section>

<!-- Galerias  -->
{#if ventanaGaleria === 'audios'}
  <AudiosContenedor on:cerrarGaleria={cerrarGaleria} />
{:else if ventanaGaleria === 'fotos'}
  <Fotos on:cerrarGaleria={cerrarGaleria}/>
{:else if ventanaGaleria === 'textiles'}
  <Textiles on:cerrarGaleria={cerrarGaleria}/>
{/if}
<!--  -->
