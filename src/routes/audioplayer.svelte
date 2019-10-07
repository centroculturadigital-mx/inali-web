<script>
	// import AudioPlayer from "../componentes/audio/AudioPlayer.svelte";
	import AudioPlayerAlt from "../componentes/audio/AudioPlayerAlt.svelte";

	let audios = [
		{
			id: 1,
			lengua: "Maya",
			nombre: "Ambiente interior",
			// archivo: "../componentes/audio/AudioArchivos/ambiente-interior.ogg",
			archivo: "ambiente-interior.ogg",
			derechos: "Derechos reservados 2019",
    		coleccion: "Colección INALI 1992",
    		creditos: "Eduardo Quintana"
		},
		{
			id: 1,
			lengua: "Maya",
			nombre: "Ambiente interior 2",
			// archivo: "../componentes/audio/AudioArchivos/ambiente-interior.ogg",
			archivo: "ambiente-interior.ogg",
			derechos: "Derechos reservados 2019",
    		coleccion: "Colección INALI 1968",
    		creditos: "Pedro Hendrick"
		},
		{
			id: 1,
			lengua: "Maya",
			nombre: "Ambiente interior 3",
			// archivo: "../componentes/audio/AudioArchivos/ambiente-interior.ogg",
			archivo: "ambiente-interior.ogg",
			derechos: "Derechos reservados 2019",
    		coleccion: "Colección INALI 2004",
    		creditos: "Joanna Jimenez"
		},
		{
			id: 1,
			lengua: "Maya",
			nombre: "Ambiente interior 4",
			// archivo: "../componentes/audio/AudioArchivos/ambiente-interior.ogg",
			archivo: "ambiente-interior.ogg",
			derechos: "Derechos reservados 2019",
    		coleccion: "Colección INALI 1984",
    		creditos: "Joaquin Zamora"
		},
	]
	
</script>


<style>
	
</style>

<svelte:head>
	<title>INALI - Audio Players</title>
</svelte:head>

<h1>{audios[0].lengua}</h1>
{#each audios as audio}	
<AudioPlayerAlt 
archivoAudio={audio.archivo} 
nombreAudio={audio.nombre}
derechosAudio={audio.derechos} 
coleccionAudio={audio.coleccion} 
creditoAudio={audio.creditos} 
lenguaAudio={audio.lengua}
/>
{/each}
