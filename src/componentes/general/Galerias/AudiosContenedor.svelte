<script>
  import { createEventDispatcher } from "svelte";
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";
  import Audios from "../AudioReproductor/Audios.svelte";

  export let audios;

</script>

<style>
  p {
    margin: 0;
    padding-left: 1rem;
  }
  .Audios {
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
    color: #fff;
    margin-bottom: 1rem;
  }
  .Contenido {
    padding: 1rem;
    /* overflow-y: auto; */
    height: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Audios INALI</title>
</svelte:head>

<ContenedorGaleria on:click>
  <header class="Audios">

    <h1 class="Titulo">Audios</h1>
    <!--
      <div class="Sub">
        <p class="Agrupacion">Agrupación: Nawatl (Nahuátl)</p>
        <p class="Fonetica">Nawatl</p>
        <p class="Original">(Nahuátl)</p>
      </div>
    -->
  </header>

  <div class="Contenido">

    <Audios {audios} />

  </div>
</ContenedorGaleria>
