<script>
  import { onMount } from "svelte";
  //
  export let archivoAudio;
  export let nombreAudio;

  onMount(() => {

    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext();
    let audioElement = new Audio();
    let track = audioContext.createMediaElementSource(audioElement);
    let gainNode = audioContext.createGain();
    let playButton = document.querySelector('.toggle-play');
    let volumeControl = document.querySelector('#volumen');
    let progressBar = document.querySelector("progress");
    audioElement.src = archivoAudio;
    audioElement.controls = false;
    audioElement.autoplay = false;
    audioElement.loop = false;
    // audioElement.crossOrigin = "anonymous";

    // if (typeof window != "undefined") {
    //   }

    // control volumen
    volumeControl.addEventListener(
      "input",
      function() {
        gainNode.gain.value = this.value;
      },
      false
    );

    // termina play callback
    audioElement.addEventListener(
      "ended",
      e => {
        playButton.dataset.playing = "false";
        console.log("Fin play: " + e);
      },
      false
    );
    
    function play(elemento,conexion,contexto,audioelement,fileURL,gain,progressbar) {
      console.log(archivoAudio);
      
      // let prog;
      // // clearInterval(prog)
      // conexion.connect(gain).connect(contexto.destination);
      // elemento.addEventListener("click",() => {
          
      //     if (contexto.state === "suspended") {
      //       contexto.resume();
      //     }

      //     if (elemento.dataset.playing === "false") {
      //       // agrega el archivo de audioContext
      //       elemento.setAttribute("src", fileURL);
      //       audioelement.play();
      //       elemento.dataset.playing = "true";
      //       prog = setInterval(() => {
      //         //sequencia la barra de progreso
      //         console.log("setInterval ON");
      //         progress(progressbar, audioelement);
      //       }, 250);
      //       // progreso del track
      //     } else if (elemento.dataset.playing === "true") {
      //       audioelement.pause();
      //       document.querySelector(".nombre h2").innerHTML = "... ";
      //       elemento.dataset.playing = "false";
      //       clearInterval(prog);
      //     }
      //   },
      //   false
      // );
    }

    function progress(progressbar, audioelement) {
      let long = progressbar.clientWidth;
      let point = audioelement.currentTime / long;
      let res = point * 100;
      console.log(res);
      progressbar.value = res;
    }
    // progreso audio
    progressBar.addEventListener("click", clickSeek);

    function clickSeek(e) {
      var porcentaje = e.offsetX / this.offsetWidth
      console.log(audioElement);
      
      // audioElement.currentTime = porcentaje * audioElement.duration//aplica tiempo seleccionado
      progressBar.value = porcentaje * 100
    }
    //
    play(playButton,track,audioContext,audioElement,archivoAudio,gainNode,progressBar);
  });


  //   //
</script>

<style>

</style>

<section id="tarjeta-player">
  <h1>Esto es un audio player</h1>
  <div class="wrapper">
    <!--  -->
    <div class="nombre">
      <h3>Nombre: {nombreAudio}</h3>
    </div>
    <progress min="0" max="100" value="0" />
    <br />
    <input
      type="range"
      id="volumen"
      min="0"
      max="1"
      value="1"
      step="0.01" />
    <br />
    <button
      on:click={e => console.log('SISI play')}
      class="toggle-play"
      data-playing="false"
      role="switch"
      aria-checked="false">
      <span>Play/Pause</span>
    </button>
  </div>
</section>
