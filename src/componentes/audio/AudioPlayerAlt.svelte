<script>
  import { onMount } from "svelte";
  export let lenguaAudio;
  export let nombreAudio;
  export let archivoAudio;
  export let coleccionAudio;
  export let creditoAudio;
  export let derechosAudio;

  let botonPlay;
  let controlAmp;
  let barraProgreso;
  let canal;
  let ampNodo;

  // let AudioContext = window.AudioContext || window.webkitAudioContext;
  const contexto = new AudioContext();
  let audioElemento = new Audio();
  canal = contexto.createMediaElementSource(audioElemento);
  ampNodo = contexto.createGain();
  audioElemento.src = archivoAudio;
  audioElemento.type = "audio/ogg";
  // audioElemento.controls = false;
  audioElemento.controls = true;
  audioElemento.autoplay = false;
  audioElemento.loop = false;

  // let playButton = document.querySelector(".toggle-play");
  // let volumeControl = document.querySelector("#volumen");
  // let progressBar = document.querySelector("progress");

  console.log(audioElemento.duration);
  // onMount(() => {});
</script>

<style>

</style>

<svelte:window />
<section id="tarjeta-player">
  <h1>INALI Audio Player</h1>
  <div class="wrapper">
    <!-- <audio src={archivoAudio} controls type="audio/ogg" /> -->
    <!--  -->
    <div class="nombre">
      <h3>Nombre: {nombreAudio}</h3>
    </div>
    <progress min="0" max="100" value="0" />
    <br />
    <input type="range" id="volumen" min="0" max="1" value="1" step="0.01" />
    <br />
    <button
      on:click={e => console.log('Play')}
      class="toggle-play"
      data-playing="false"
      role="switch"
      aria-checked="false">
      <span>Play/Pausa</span>
    </button>
  </div>
</section>
