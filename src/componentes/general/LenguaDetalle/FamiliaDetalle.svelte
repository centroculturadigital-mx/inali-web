<script>
    import { onMount, createEventDispatcher } from "svelte";

  // const dispatch = createEventDispatcher();


  import AudiosContenedor from "../Galerias/AudiosContenedor.svelte";
  import Fotos from "../Galerias/Fotos.svelte";
  import Textiles from "../Galerias/Textiles.svelte";


  export let lengua;
  export let abrirLengua;

  const cerrar = event => {
    // dispatch("cerrar");
  };

  onMount(()=>{
    console.log("cargar familia", lengua);
    
  })
  $: mostrarFotos = Array.isArray(lengua.fotografias) ? lengua.fotografias.length > 0 : false

  let ventanaGaleria = null;


  const abreGaleria = (tipo) => {
    
    ventanaGaleria = tipo;

    // if (e.target.classList.contains("Audio")) {
    //   ventanaGaleria = "audios";
    // } else if (e.target.classList.contains("Foto")) {
    //   ventanaGaleria = "fotos";
    // } else if (e.target.classList.contains("Textil")) {
    //   ventanaGaleria = "textiles";
    // }
  };

  const cerrarGaleria = event => {
    ventanaGaleria = null;
    // ventanaGaleria = event.detail.cierra;
  };


  // const cerrarGaleria = event => {
  //   ventanaGaleria = event.detail.cierra;
  // };

  $: console.log("lenguaDetalle", lengua);


  const IconoTextiles = "icono.textiles.svg";
  const IconoFotos = "icono.fotos.svg";
  const IconoAudios = "icono.audios.svg";


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
    padding: 1.5rem;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header {
    height: auto;
    width: 100%;
    padding-left: 1rem;
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
    /* color: #fbb634; */
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .DetalleTituloCastellano {
    font-weight: lighter;
    /* color: #fcc745; */
    font-size: 2.5rem;
    /* letter-spacing: 0.25rem; */
  }

  .Nombre {
    font-weight: Bold;
    /* color: #fbb634; */
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .NombreCastellano {
    font-weight: lighter;
    /* color: #fcc745; */
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
    width: 85%; 
  }
  .DetalleFamiliaAgrupacion h3 {
    margin: 2rem;
  }
  .DetalleAgrupacionVariantes {
    text-align: center;
    width: 85%;
  }
  .DetalleBotonesGaleria {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
    color: #fff;
    width: 100%;
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
    height: 3rem;
  }
  .TextoBotonGaleria {
    text-align: center;
    color: #fff;
  }
  .DetalleTextoDescripcion {
    padding: 0 1rem;
  }

  .descripcion {
    white-space: pre-line;
  }
</style>

<header>

  <nav class="DetalleContenidosNavegacion">
    <span on:click>mapa ></span>
    <a href="../">
      {lengua.nombre}
    </a>
    <button id="DetalleCerrar" on:click>
      <i class="fa fa-close" />
    </button>
  </nav>

    
  <!-- titulo Raiz -->
  <h3 class="DetalleTituloTop">
      Familia
  </h3>
  
  
  <h1 class="Nombre" style={`color: #${lengua.color}`}>
      { lengua.nombre }
  </h1>
  <!-- 
  <div class="DetalleNumeroHablantes">
    <p>Numero de hablantes:</p>
    <h4>1,965,672</h4>
  </div> -->

</header>


<div class="DetalleBotonesGaleria">
  <!-- 
  -->
  {#if !! Array.isArray(lengua.audios) && lengua.audios.length > 0}
  <button class="BotonGaleria Audio" on:click={()=>abreGaleria("audios")}>
    <div class="IconoBotonGaleria">
      <img src={IconoAudios} alt="Icono Boton Audios INALI" />
    </div>
    <div class="TextoBotonGaleria ">AUDIOS</div>
  </button> 
  {/if}
  {#if !! Array.isArray(lengua.fotografias) && lengua.fotografias.length > 0}
  <button class="BotonGaleria Foto" on:click={()=>abreGaleria("fotos")}>
    <div class="IconoBotonGaleria ">
      <img src={IconoFotos} alt="Icono Boton Fotos INALI" />
    </div>
    <div class="TextoBotonGaleria">FOTOS</div>
  </button>
  {/if}
  {#if !! Array.isArray(lengua.textiles) && lengua.textiles.length > 0}
  <button class="BotonGaleria Textil" on:click={()=>abreGaleria("textiles")}>
    <div class="IconoBotonGaleria ">
      <img src={IconoTextiles} alt="Icono Boton Textiles INALI" />
    </div>
    <div class="TextoBotonGaleria">TEXTILES</div>
  </button>
  {/if}
</div>



<div class="DetalleTextoDescripcion">
  <p class="descripcion">
    {#if !!lengua.informacion}
      {lengua.informacion}
    {:else}
    {/if}
  </p>
</div>

<div class="DetalleBotonesGaleria">
  <!-- <button class="BotonGaleria Audio" on:click={abreGaleria}>
    <div class="IconoBotonGaleria">
      <img src={IconoAudios} alt="Icono Boton Audios INALI" />
    </div>
    <div class="TextoBotonGaleria ">AUDIOS</div>
  </button> -->

  <!-- {#if Array.isArray(lengua.fotografias) && lengua.fotografias.length > 0 }

  <button class="BotonGaleria Foto" on:click={abreGaleria}>
    <div class="IconoBotonGaleria ">
      <img src={IconoFotos} alt="Icono Boton Fotos INALI" />
    </div>
    <div class="TextoBotonGaleria">FOTOS</div>
  </button>

  {/if} -->

  <!-- <button class="BotonGaleria Textil" on:click={abreGaleria}>
    <div class="IconoBotonGaleria ">
      <img src={IconoTextiles} alt="Icono Boton Textiles INALI" />
    </div>
    <div class="TextoBotonGaleria">TEXTILES</div>
  </button> -->
</div>


<div class="DetalleFamiliaAgrupacion">
  {#if !!lengua.agrupaciones}
    <h3>Agrupaciones lingüísticas ({lengua.agrupaciones.length})</h3>
  {/if}

  {#if !!lengua.agrupaciones}
    <ul class="DetalleLista">
      {#each lengua.agrupaciones as agrupacion ("agrupacion_"+agrupacion.id)}
        <li on:click={()=>abrirLengua(agrupacion)}>
          <h4>{agrupacion.NOM_AGRUP}</h4>
          <i class="fa fa-arrow-circle-right" />
        </li>
      {/each}
    </ul>
  {/if}

</div>



<!-- Galerias  -->
{#if ventanaGaleria === 'audios'}
  <AudiosContenedor audios={lengua.audios} on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'fotos'}
  <Fotos imagenes={lengua.fotografias} on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'textiles'}
  <Textiles imagenes={lengua.textiles} on:click={cerrarGaleria} />
{/if}