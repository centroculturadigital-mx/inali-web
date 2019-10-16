<script>
  import { fade } from "svelte/transition";

  export let tocando;
  export let parar;
  export let tocar;
  export let tiempo;
  export let duracion;
  export let progreso;
  export let audio;
  export let cargando;

  const imagenPausa = "boton.pause.svg";
  const imagenPlay = "boton.play.svg";
</script>

<style>
  /* .AudioReproductor {
        border: 1px solid #000;
        position: relative;
        min-height: 6rem;
    }

    input[type="range"] {
        width: 100%;
    }

    .AudioReproductor > .Cargando {
        width: 100%;
        height: 6rem;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    } */

  /* Estilos maqueta */

  article {
    background-color: transparent;
    color: white;
  }
  .AudioElementos {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
  }
  .TogglePlay {
    width: 20%;
    background-color: transparent;
    border: none;
  }
  .Progreso {
    -webkit-appearance: none;
    appearance: none;
    width: 65%;
    height: 5px;
    background: #fff;
    outline: none;
    border: none;
    opacity: 0.9;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .Progreso::-moz-range-progress {
    background-color: lime;
  }
  .Progreso:hover {
    opacity: 1;
  }
  /* perilla barra progreso*/
  .Progreso::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #fff;
    cursor: pointer;
    border: none;
  }
  .Progreso::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #fff;
    cursor: pointer;
    border: none;
  }
  .AudioTarjeta {
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: auto;
    width: 100%;
  }
  .AudioWrapper {
    max-width: 90%;
  }
  .Amplitud {
    display: flex;
    justify-content: center;
    height: 50px;
    width: 15%;
  }
  .AmplitudInput {
    width: 2px;
    height: 100%;
  }
  .AmplitudInput::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #fff;
    cursor: pointer;
    border: none;
  }
  .AmplitudInput::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #fff;
    cursor: pointer;
    border: none;
  }
  .AudioInfo {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
  p {
    width: auto;
    padding: 0 0.5rem;
    font-size: 0.6rem;
  }
</style>

<article class="AudioReproductor">

  <div class="AudioWrapper">

    {#if !cargando}
      <div class="AudioElementos" transition:fade>
        <!--  -->
        <div class="Boton">
          {#if tocando}
            <button class="BotonPausa" on:click={parar}>
              <img src={imagenPausa} alt="Pausa" />
            </button>
          {:else}
            <button class="BotonPlay" on:click={tocar}>
              <img src={imagenPlay} alt="Play" />
            </button>
          {/if}
        </div>
        <!--  -->
      </div>
      <section class="Controles">

        <div class="Tiempo">
          <span class="Posicion">{tiempo}</span>
          <span class="Duracion">{duracion}</span>
          <input type="range" class="Progreso" value={progreso} />
        </div>
        <section class="Informacion">
          <span>{audio.nombre}</span>
        </section>
      </section>
    {:else}
      <div class="Cargando" transition:fade>Cargando...</div>
    {/if}
  </div>
</article>
