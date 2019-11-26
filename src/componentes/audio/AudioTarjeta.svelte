<script>
  import { onMount, onDestroy } from "svelte";

  const audio = "data/ambiente-interior.ogg";
  const imagenPausa = "boton.pause.svg";
  const imagenPlay = "boton.play.svg";

  export let lenguaAudio;
  export let nombreAudio;
  export let archivoAudio;
  export let coleccionAudio;
  export let creditoAudio;
  export let derechosAudio;
  export let propiedadAudio;

  let audioHtml1;
  let tocando;
  let tiempo = 0;
  let duracion = 0;

  let actualizacion;

  const formatearDuracion = duracion => {
    let date = new Date(null);

    duracion ? duracion : (duracion = 0);

    date.setSeconds(duracion);

    // console.log(date.toISOString().substr(14, 5));
    return date.toISOString().substr(14, 5);
  };

  let progreso = 0;

  const actualizar = () => {
    tiempo = formatearDuracion(audioHtml1.currentTime);

    duracion = formatearDuracion(audioHtml1.duration);

    progreso = (audioHtml1.currentTime / audioHtml1.duration) * 100;
  };

  onMount(() => {
    actualizacion = setInterval(actualizar, 1000);
  });

  onDestroy(() => {
    clearInterval(actualizacion);
  });

  const tocar = () => {
    if (!!audioHtml1) {
      audioHtml1.play();
      tocando = true;
    }
  };
  const parar = () => {
    if (!!audioHtml1) {
      audioHtml1.pause();
      tocando = false;
    }
  };
</script>

<style>
  .AudioTarjeta {
    /* border: 1px solid #000; */
    background-color: rgba(0, 0, 0, 0.9);
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
    width: 95px;
    width: 95px;
  }
  article {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem;
    color: white;
  }
  .Controles {
    /* display: flex; */
    align-items: center;
    flex-wrap: nowrap;
    width: 75%;
  }
  .NombreAudio {
      font-weight: bolder;
  }
  .Progreso {
    -webkit-appearance: none;
    appearance: none;
    width: 65%;
    height: 0;
    background: rgba(255,255,255,0.85);
    outline: none;
    border: 1px solid rgba(255,255,255,0.85);
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
  .AudioTarjeta {
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: auto;
    width: 100%;
  }
  .Informacion {
    width: 100%;
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
  .Duracion, .Posicion {
      font-size: 0.8em;
  }
  /* Estilos Volument */
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
  /* * {
    outline: 1px solid blue;
  } */
</style>

<!-- Base -->
<article class="AudioTarjeta">

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

  <section class="Controles">

    <div class="Informacion">
      <h4 class="NombreAudio">{creditoAudio}</h4>
      <p>Audio relalizado por {propiedadAudio}</p>
      <!--<p>Colección: {coleccionAudio}</p> -->
      <!-- <p>Derechos: {derechosAudio}</p> -->
    </div>
    <div class="Tiempo">
      <input type="range" class="Progreso" value={progreso} />
      <div class="TiempoCuenta">
        <span class="Posicion">{tiempo}</span>
        <span class="Duracion">{duracion}</span>
      </div>
    </div>

  </section>

  <audio bind:this={audioHtml1}>
    <source src={audio} />
  </audio>

</article>
