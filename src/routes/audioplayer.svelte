<script>
	import AudioPlayer, { pararTodo } from "../componentes/audio/AudioPlayer.svelte";
	import audios from "../../src/data/audioDatosFalsos";
</script>

<style>
	
</style>

<svelte:head>
	<title>INALI - Audio Players</title>
</svelte:head>

<h1>{audios[0].lengua}</h1>
{#each audios as audio}	
<!-- <audio src={audio.archivo} controls type="audio/ogg"/> -->
<AudioPlayer
on:play={pararTodo()}
archivoAudio={audio.archivo} 
nombreAudio={audio.nombre}
derechosAudio={audio.derechos} 
coleccionAudio={audio.coleccion} 
creditoAudio={audio.creditos} 
lenguaAudio={audio.lengua}
/>
{/each}
