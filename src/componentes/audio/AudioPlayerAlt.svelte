<script>
  import { onMount } from "svelte";
  export let lenguaAudio;
  export let nombreAudio;
  export let archivoAudio;
  export let coleccionAudio;
  export let creditoAudio;
  export let derechosAudio;

  let botonPlay;//bind
  let controlAmp;//bind
  let barraProgreso;//bind
  let conexion;
  let ampNodo;
  // let AudioContext = window.AudioContext || window.webkitAudioContext;
  const contexto = new AudioContext();
  let audioElemento = new Audio();

  conexion = contexto.createMediaElementSource(audioElemento);
  ampNodo = contexto.createGain();
  audioElemento.src = archivoAudio;
  // audioElemento.src = "ambiente-interior.ogg";
  // audioElemento.type = "audio/ogg";
  audioElemento.controls = false;
  audioElemento.autoplay = false;
  audioElemento.loop = false;

const play = (elemento,conexiones,contexto,audioelement,fileURL,gain,progressbar) => {
      
      let prog;
      // clearInterval(prog)
      conexion.connect(gain).connect(contexto.destination);
          
          if (contexto.state === "suspended") {
            contexto.resume();
          }

          if (elemento.dataset.playing === "false") {
            // elemento.setAttribute("src", fileURL);
            audioelement.play();
            elemento.dataset.playing = "true";
            // prog = setInterval(() => {
            //   //sequencia la barra de progreso
            //   console.log("setInterval ON");
            //   progress(progressbar, audioelement);
            // }, 250);
            // progreso del track
          } else if (elemento.dataset.playing === "true") {
            audioelement.pause();
            elemento.dataset.playing = "false";
            // clearInterval(prog);
          }

    }

  onMount(() => {
   document.addEventListener("click",() => {
     play(botonPlay,conexion,contexto,audioElemento,archivoAudio,ampNodo,barraProgreso)
   })
    
  });
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
    <progress bind:this={barraProgreso} min="0" max="100" value="0" />
    <br />
    <input bind:this={controlAmp} type="range" id="volumen" min="0" max="1" value="1" step="0.01" />
    <br />
    <button
      bind:this={botonPlay}
      class="toggle-play"
      data-playing="false"
      role="switch"
      aria-checked="false">
      <span>Play/Pausa</span>
    </button>
  </div>
</section>
