<script>
  import Galeria from "./Galeria.svelte";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";

  const IconoCierraGaleria = "icono.cierra.galeria.svg";

  // temporal:

  export let imagenes;

  // import imagenes from "../../../data/imagenesFake";

  import { getContext } from "svelte";

  const lightboxContexto = getContext("lightbox");

  let lightboxAbrir;

  onMount(() => {

    lightboxContexto.imagenesStore.set(imagenes);

    lightboxAbrir = lightboxContexto.abrir;

  });


  // $: console.log("imagenes", imagenes);
  
</script>

<style>
  .ContenedorFotos {
    height: 100vh;
    padding: 0 1rem;
  }
  .Fotos {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
  .Titulo {
    padding: 1rem 1rem 0.25rem 1rem;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 2rem;
  }
  .Agrupacion {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1rem;
  }

  .Sub {
    display: flex;
    flex-direction: row;
  }
  .Sub p {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
  }
  .Fonetica {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1rem;
  }

  .Original {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    font-size: 1rem;
  }

  img {
    width: 90%;
    /* height: 14rem; */
    object-fit: cover;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Galería INALI</title>
</svelte:head>

<ContenedorGaleria on:click>
  <header class="Fotos">

    <h1 class="Titulo">
      Fotos
    </h1>

  </header>

  {#if !!imagenes}
    <div class="ContenedorFotos">

      <Galeria {...{ imagenes, lightboxAbrir }} />

    </div>
  {/if}

</ContenedorGaleria>
