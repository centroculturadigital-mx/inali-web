<script>
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
    conexiones,
    contexto,
    audioelement,
    fileURL,
    gain,
    progressbar
  ) => {
    // let avanzaProgreso
    // clearInterval(avanzaProgreso);
    conexion.connect(gain).connect(contexto.destination);

    if (contexto.state === "suspended") {
      contexto.resume();
    }

    if (elemento.dataset.playing === "false") {
      audioelement.play();
      elemento.dataset.playing = "true";
      // progreso del track
      let avanzaProgreso = setInterval(() => progreso(barraProgreso, audioElemento), 500);
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
    let longitud = progressbar.clientWidth;
    let avance = audioelement.currentTime / longitud;
    let resultado = (avance * 100) / 1.95;
    progressbar.value = resultado;
    console.log(resultado);
  };
  // click progreso
  const clickSeek = e => {
    var porcentaje = e.offsetX / barraProgreso.offsetWidth;

    audioElemento.currentTime = porcentaje * audioElemento.duration; //aplica tiempo seleccionado
    barraProgreso.value = porcentaje * 100;
  };

  const cargando = () => {
    console.log("Loading ...");
  };

  onMount(() => {
    // loading
    audioElemento.onprogress = cargando();
    // toca
    botonPlay.addEventListener("click", () => {
      play(
        botonPlay,
        conexion,
        contexto,
        audioElemento,
        archivoAudio,
        ampNodo,
        barraProgreso
      );
    });
    // volumen
    controlAmp.addEventListener(
      "input",
      () => {
        ampNodo.gain.value = controlAmp.value;
      },
      false
    );
    // termina play callback
    audioElemento.addEventListener(
      "ended",
      e => {
        botonPlay.dataset.playing = "false";
        barraProgreso.value = 0;
        console.log("Fin del audio");
      },
      false
    );
    barraProgreso.addEventListener("click", clickSeek);
  }); //onMount
</script>

<style>
  .Progreso {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .Progreso:hover {
    opacity: 1;
  }
  /* perilla */
  .Progreso::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
  }
  .Progreso::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
  }
  .TarjetaPlayer {
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: auto;
    width: 100%;
  }
  .AudioWrapper {
    max-width: 300px;
  }
  .Amplitud {
    width: 100%;
  }
  * {outline: 1px solid blue}
</style>

<section class="TarjetaPlayer">
  <div class="AudioWrapper">
    <div class="AudioInfo">
      <h3>Nombre: {nombreAudio}</h3>
      <p>Colección: {coleccionAudio}</p>
      <p>Creditos: {creditoAudio}</p>
      <p>Derechos: {derechosAudio}</p>
    </div>
    <!-- <progress  min="0" max="100" value="0" /> -->
    <h6>Progreso:</h6>
    <input
      bind:this={barraProgreso}
      type="range"
      class="Progreso"
      min="0"
      max="100"
      value="0"
      step="0.01" />
    <br />
    <h6>Volumen:</h6>
    <input
      bind:this={controlAmp}
      type="range"
      class="Amplitud"
      min="0"
      max="1"
      value="1"
      step="0.01" />
    <br />
    <h6>Play:</h6>
    <button
      bind:this={botonPlay}
      class="TogglePlay"
      data-playing="false"
      role="switch"
      aria-checked="false">
      <span>Play/Pausa</span>
    </button>
  </div>
</section>
