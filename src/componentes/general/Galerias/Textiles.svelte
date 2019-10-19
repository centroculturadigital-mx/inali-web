<script>
  import Galeria from "./Galeria.svelte";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";

  const IconoCierraGaleria = "icono.cierra.galeria.svg";
  // temporal:
  import imagenes from "../../../data/metadatosTextilesFake";

  import { getContext } from 'svelte';
  
  const lightboxContexto = getContext('lightbox')

  let lightboxAbrir
  
  onMount(()=>{  

    lightboxContexto.imagenesStore.set(imagenes)
    
    lightboxAbrir = lightboxContexto.abrir;
    
  })
</script>

<style>
  .ContenedorFotos {
    height: 100vh;
    padding: 0 1rem;
  }
  .Textiles {
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
  .Contenedor-1 ul,
  .Contenedor-2 ul,
  .Contenedor-3 ul {
    height: auto;
    display: grid;
    grid-gap: 1rem;
  }

  .Sub {
    display: flex;
    flex-direction: row;
  }

  .Sub p {
    /* padding: .5rem; */
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
  <title>Textiles INALI</title>
</svelte:head>

<ContenedorGaleria on:cerrarGaleria>
  <header class="Textiles">

    <h1 class="Titulo">Textiles</h1>
    <div class="Sub">
      <p class="Agrupacion">Agrupación:</p>
      <p class="Fonetica">{imagenes[0].metadatos.grupoEtnico}</p>
      <p class="Original">{imagenes[0].metadatos.localidad}</p>
    </div>
  </header>
 
   {#if !! imagenes }
    <div class="ContenedorFotos">

      <Galeria {...{imagenes, lightboxAbrir}}/>

    </div>
  {/if}

</ContenedorGaleria>
