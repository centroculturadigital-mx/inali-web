<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import AudiosContenedor from "../Galerias/AudiosContenedor.svelte";
  import Fotos from "../Galerias/Fotos.svelte";
  import Textiles from "../Galerias/Textiles.svelte";

  const dispatch = createEventDispatcher();

  const deseleccionar = event => {
    dispatch("deseleccionar");
  };

  const seleccionarFamilia = famId => {
    dispatch("seleccionar", { id: famId, tipo: "familia" });
  };

  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionDetalle from "./AgrupacionDetalle.svelte";
  import VarianteDetalle from "./VarianteDetalle.svelte";

  let familias;
  let agrupaciones;
  let variantes;

  let ventanaGaleria = null;

  export let lengua;

  const cerrar = event => {
    dispatch("cerrar");
  };

  // <!--funcion: conseguirDatoDeAncestro() -->

  const cerrarGaleria = event => {
    ventanaGaleria = event.detail.cierra;
  };

  $: console.log("lenguaDetalle", lengua);

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
    descripcion:
      "También llamada algonquina o algonquina-ritwan. \n\nEl nombre de la familia lingüística álgica proviene de la contracción del nombre de una de las dos subfamilias que la integran, la algonquina (alg-), y la adhesión a ésta de una partícula (-ic) que señala pertenencia a algo. Cabe mencionar que, dentro de esta familia, las lenguas algonquinas han tenido, en términos de cobertura geográfica, diversidad interna y número de hablantes, mucha relevancia. \n\nLas lenguas de esta familia se hablan en gran parte de Canadá y en el extremo norte de los Estados Unidos de América, teniendo una concentración muy significativa en la región de los Grandes Lagos. El Kickapoo, que pertenece a la subfamilia algonquina, es el único idioma de esta familia que se habla en México. La llegada de los kickapoo a territorio nacional se dio en el siglo XIX cuando, después de una invasión de los anglosajones a su territorio, le pidieron al gobierno mexicano un espacio para vivir y éste, a cambio, les solicitó que defendieran a los pobladores mexicanos de los ataques de los comanches, muy frecuentes en aquel tiempo. Desde ese momento, los kickapoo son considerados un grupo binacional. En los Estados Unidos de América a los kickapoo de México ."
  };

  $: color = !!lengua ? lengua.color : "aaa";

  let nombre = !!lengua.NOM_FAM
    ? lengua.NOM_FAM
    : !!lengua.NOM_AGRUP
    ? lengua.NOM_AGRUP
    : !!lengua.NOM_VAR
    ? lengua.NOM_VAR
    : "";
  let nombreCastellanizado = "";
  let otrosNombres = "";
  let transcripcionFonetica = "";

  const riesgo = Math.random();

  const numeroHablantes = 0;

  let lenguaVista;

  const seleccionar = (id, tipo) => {
    dispatch("seleccionar", { id, tipo });
  };
  let movil
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
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 3rem);
    margin-top: 3rem;
  }


  .BotonGaleria > * {
    pointer-events: none;
  }

  .Breadcrumb {
    padding: 1rem 0.5rem;
  }
  .Breadcrumb span {
    cursor: pointer;
  }
  .Breadcrumb span {
    font-weight: 400;
    font-size: 0.75rem;
    background-color: lightgray;
    border-radius: 50px;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 920px) {
    .DetalleContenedor {
      width: 100%;
    }
  }

  @media (max-width: 660px) {
    .DetalleContenidos {
      padding: 0.75rem
    }
    .DetalleContenedor {
      display: flex;
      justify-content: flex-start;
      position: absolute;
      padding-top: 3.25rem;
      padding-bottom: 2.25rem;
      width: 100%;
      height: 100%;
    }

    .DetalleOrigen {
      justify-content: space-evenly;
      height: 4.25rem;
      width: 100%;
      margin-bottom: 1rem;
      flex-direction: column;
    }
  }
</style>

<svelte:window bind:innerWidth={movil}/>

<section class="DetalleContenedor" transition:fade={{ x: 500, duration: 750 }}>

  <div class="DetallePleca" style={`background-color: #${color}`} />
  <div class="DetalleContenidos">

    {#if !!lengua}
      {#if !!lengua.NOM_FAM}
        <FamiliaDetalle {lengua} on:click={cerrar} {seleccionar} movil={movil}>
          <div class="Breadcrumb">
            <span on:click={deseleccionar}>Mapa</span>
            >
            <span>
              {lengua.nombreOriginario || lengua.nombreCastellanizado}
            </span>
          </div>
        </FamiliaDetalle>
      {/if}
      {#if !!lengua.NOM_AGRUP}
        <AgrupacionDetalle {lengua} on:click={cerrar} {seleccionar} movil={movil}>
          <div class="Breadcrumb">
            <span on:click={deseleccionar}>Mapa</span>
            >
            <span
              on:click={() => seleccionar(lengua.familiaInfo.id, 'familia')}>
              {lengua.familiaInfo.nombre}
            </span>
            >
            <span>
              {lengua.nombreOriginario || lengua.nombreCastellanizado}
            </span>
          </div>
        </AgrupacionDetalle>
      {/if}
      {#if !!lengua.NOM_VAR}
        <VarianteDetalle {lengua} on:click={cerrar} movil={movil}>
          <div class="Breadcrumb">
            <span on:click={deseleccionar}>Mapa</span>
            >
            <span
              on:click={() => seleccionar(lengua.familiaInfo.id, 'familia')}>
              {lengua.familiaInfo.nombre}
            </span>
            >
            <span
              on:click={() => seleccionar(lengua.agrupacionInfo.id, 'agrupacion')}>
              {lengua.agrupacionInfo.nombre}
            </span>
            >
            <span>
              {lengua.nombreOriginario || lengua.nombreCastellanizado}
            </span>
          </div>
        </VarianteDetalle>
      {/if}
    {/if}

    <!-- 
      
-->

  </div>
</section>

<!-- Galerias  -->
{#if ventanaGaleria === 'audios'}
  <AudiosContenedor on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'fotos'}
  <Fotos on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'textiles'}
  <Textiles on:click={cerrarGaleria} />
{/if}
<!--  -->
