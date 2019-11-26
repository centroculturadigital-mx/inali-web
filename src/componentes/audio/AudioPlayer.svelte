<script context="module">
  // TODO: parar audios que esten tocando al dar play
  export function pararTodo() {
    // console.log("//TODO: parar audios que esten tocando al dar play");
  }
</script>

<script>
  import PlaySVG from "./PlaySVG.svelte";
  import { onMount } from "svelte";
  export let lenguaAudio;
  export let nombreAudio;
  export let archivoAudio;
  export let coleccionAudio;
  export let creditoAudio;
  export let derechosAudio;

  let botonPlay; //bind
  let controlAmp; //bind
  let barraProgreso; //bind
  let conexion;
  let ampNodo;
  // let AudioContext = window.AudioContext || window.webkitAudioContext;
  const contexto = new AudioContext();
  let audioElemento = new Audio();

  conexion = contexto.createMediaElementSource(audioElemento);
  ampNodo = contexto.createGain();
  audioElemento.src = archivoAudio;
  audioElemento.controls = false;
  audioElemento.autoplay = false;
  audioElemento.loop = false;

  const play = (
    elemento,
    contexto,
    audioelement,
    fileURL,
    gain,
    progressbar
  ) => {
    let avanzaProgreso
    // clearInterval(avanzaProgreso);
    conexion.connect(gain).connect(contexto.destination);

    if (contexto.state === "suspended") {
      contexto.resume();
    }

    if (elemento.dataset.playing === "false") {
      audioelement.play();
      elemento.dataset.playing = "true";
      // progreso del track
      avanzaProgreso = setInterval(
        () => progreso(barraProgreso, audioElemento),
        500
      );
      //
    } else if (elemento.dataset.playing === "true") {
      audioelement.pause();
      elemento.dataset.playing = "false";
      // progreso del track
      clearInterval(avanzaProgreso);
      //
    }
  };
  // DEBUG: barra de progreso
  function progreso(progressbar, audioelement) {
    let avance = audioelement.currentTime / progressbar.offsetWidth;
    progressbar.value = avance * 100;
    // console.log(avance);
  }
  // click progreso
  const clickSeek = e => {
    var porcentaje = e.offsetX / barraProgreso.clientWidth;

    audioElemento.currentTime = porcentaje * audioElemento.duration; //aplica tiempo seleccionado
    // console.log(e.offsetX,barraProgreso.width,porcentaje,audioElemento.currentTime);
    barraProgreso.value = porcentaje;
  };

  const cargando = () => {
    // console.log("Loading ...");
  };

  onMount(() => {
    // loading
    audioElemento.onprogress = cargando();
    // toca
    botonPlay.onclick = () => {
      play(
        botonPlay,
        contexto,
        audioElemento,
        archivoAudio,
        ampNodo,
        barraProgreso
      );
    };
    // volumen
    controlAmp.oninput = () => {
      ampNodo.gain.value = controlAmp.value;
    };
    // termina play callback
    audioElemento.onended = e => {
      botonPlay.dataset.playing = "false";
      barraProgreso.value = 0;
      // console.log("Fin del audio");
    };
    barraProgreso.onclick = clickSeek;
    audioElemento.onpause = e => {
      // if () {
      // }
    };
  }); //onMount
</script>

<style>
  section {
    background-color: black;
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
  /* * {
    outline: 1px solid blue;
  } */
</style>

<!-- <svelte:window on:create={console.log('Creado')} /> -->
<section class="AudioTarjeta">
  <div class="AudioWrapper">
    <div class="AudioElementos">
      <button
        bind:this={botonPlay}
        class="TogglePlay"
        data-playing="false"
        role="switch"
        aria-checked="false">
        <PlaySVG />
      </button>
      <input
        bind:this={barraProgreso}
        type="range"
        class="Progreso"
        min="0"
        max="100"
        value="0"
        step="0.01" />
      <div class="Amplitud">
        <input
          bind:this={controlAmp}
          type="range"
          class="AmplitudInput"
          min="0"
          max="1"
          value="1"
          step="0.01"
          orient="vertical" />
      </div>
    </div>
    <div class="AudioInfo">
      <p>Nombre: {nombreAudio}</p>
      <p>Colección: {coleccionAudio}</p>
      <p>Credito: {creditoAudio}</p>
      <p>{derechosAudio}</p>
    </div>
  </div>
</section>
