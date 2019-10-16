<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const IconoCierraGaleria = "icono.cierra.galeria.svg";

  let dispatch = createEventDispatcher();

  const cierraGaleria = event => {
    dispatch("cerrarGaleria", {cierra: null});
  };
</script>

<style>
  .GaleriaMedia {
    position: fixed;
    padding-top: 3.25rem;
    padding-bottom: 2.25rem;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: transparent;
    width: 50%;
  }
  .GaleriaMediaContenedor {
    padding: 0rem 0rem 2rem;
    background-color: rgba(70, 93, 114, 0.9);
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  .Regresa {
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
    color: rgb(255, 255, 255);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 100%;
  }
  .Regresa img {
    height: 2rem;
    width: 2rem;
  }
  .Regresa img:hover {
    opacity: 0.85;
  }
</style>

<aside class="GaleriaMedia" transition:fade>

  <div class="GaleriaMediaContenedor">

    <div>
      <button class="Regresa" on:click={cierraGaleria}>
        <img src={IconoCierraGaleria} alt="Cierra Galería INALI" />

      </button>
    </div>

    <slot />

  </div>
</aside>
