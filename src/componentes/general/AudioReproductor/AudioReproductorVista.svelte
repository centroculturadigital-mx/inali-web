<script>
  import { fade } from "svelte/transition";

  export let audio;
  export let tocando;
  export let parar;
  export let reproducir;
  export let tiempo;
  export let duracion;
  export let progreso;
  export let cargando;
  export let seek;

  const imagenPausa = "boton.pause.svg";
  const imagenPlay = "boton.play.svg";
</script>

<style>
  /* Estilos maqueta */

  article {
    background-color: transparent;
    color: white;
    margin-bottom: 3rem;
  }
  .AudioElementos {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
  }
  input[type="range"] {
    width: 100%;
  }
  .Boton {
    display: flex;
    justify-content: center;
    width: 25%;
  }
  .BotonPlay,
  .BotonPausa {
    background-color: transparent;
    border: none;
    filter: invert(1);
    width: 60px;
    cursor: pointer;
  }
  .BotonPlay img {
    filter: invert();
    -webkit-filter: invert();
  }
  .Controles {
    /* display: flex; */
    align-items: center;
    flex-wrap: nowrap;
    width: 75%;
    padding-right: 2rem;  
  }
  .NombreAudio {
    font-weight: bolder;
  }
  .Progreso {
    -webkit-appearance: none;
    appearance: none;
    width: 65%;
    height: 0;
    background: rgba(255, 255, 255, 0.85);
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.85);
    opacity: 0.9;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .Progreso::-moz-range-progress {
    background-color: #fbb634;
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
    background: #fbb634;
    cursor: pointer;
    border: none;
  }
  .Progreso::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #fbb634;
    cursor: pointer;
    border: none;
  }

  .Informacion {
    width: 100%;
  }
  .Informacion p {
    margin-bottom: 0rem;
  }
  .Informacion h4 {
    margin-bottom: 0rem;
  }
  .Tiempo {
    width: 100%;
  }
  .TiempoCuenta {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  p {
    width: auto;
    margin-top: 0px;
    font-size: 0.8rem;
    font-weight: lighter;
  }
  .Duracion,
  .Posicion {
    font-size: 0.8em;
  }
  /* Estilos Volumen */
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
  /*  */
  .Sub {
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
            <button class="BotonPlay" on:click={reproducir}>
              <img src={imagenPlay} alt="Play" />
            </button>
          {/if}
        </div>
        <!--  -->
        <div class="Controles">

          <div class="Informacion">
            {#if audio.titulo}
              <h4 class="NombreAudio">{audio.titulo}</h4>
            {/if}
            {#if audio.variante}
              <p>Variante linguística: {audio.variante}</p>
            {/if}
            {#if audio.creditos}
              <p>{audio.creditos}</p>
            {/if}
            <!-- <p>Colección: {audio.coleccion}</p> -->
          </div>

          <div class="Tiempo">
            <input type="range" class="Progreso" value={progreso} on:click={e=>seek(e.target.value)}/>
            <div class="TiempoCuenta">
              <span class="Posicion">{tiempo}</span>
              <span class="Duracion">{duracion}</span>
            </div>
          </div>

        </div>
      </div>
    {:else}
      <div class="Cargando" transition:fade>Cargando...</div>
    {/if}
  </div>
</article>
