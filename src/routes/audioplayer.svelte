<script>
  import AudioTarjeta from "../componentes/audio/AudioTarjeta.svelte";
  // import AudioPlayer, { pararTodo } from "../componentes/audio/AudioPlayer.svelte";
  import audios from "../../src/data/audioDatosFalsos";
</script>

<style>
  body {
    background-color: rgba(0, 0, 0, 0.85);
  }
</style>

<svelte:head>
  <title>INALI - Audio Players</title>
</svelte:head>

<h1>Lengua: {audios[0].lengua}</h1>

{#each audios as audio}
  <AudioTarjeta
    archivoAudio={audio.archivo}
    nombreAudio={audio.nombre}
    derechosAudio={audio.derechos}
    coleccionAudio={audio.coleccion}
    creditoAudio={audio.creditos}
    propiedadAudio={audio.propiedad}
    lenguaAudio={audio.lengua} />
{/each}
