<script>
	// import AudioPlayer from "../componentes/audio/AudioPlayer.svelte";
	import AudioPlayerAlt from "../componentes/audio/AudioPlayerAlt.svelte";

	let audios = [
		{
			id: 1,
			lengua: 1,
			nombre: "Ambiente interior",
			// archivo: "../componentes/audio/AudioArchivos/ambiente-interior.ogg",
			archivo: "ambiente-interior.ogg",
			derechos: "Derechos reservados 2019",
    		coleccion: "Colección INALI 1992",
    		creditos: "Eduardo Quintana"
		}
	]
	
</script>


<style>
	
</style>

<svelte:head>
	<title>INALI - Audio Players</title>
</svelte:head>

<AudioPlayerAlt 
archivoAudio={audios[0].archivo} 
nombreAudio={audios[0].nombre}
derechosAudio={audios[0].derechos} 
coleccionAudio={audios[0].coleccion} 
creditosAudio={audios[0].creditos} 
lenguaAudio={audios[0].lengua}
/>
<!--  -->
<!-- <AudioPlayer 
archivoAudio={audios[0].archivo} 
nombreAudio={audios[0].nombre}
derechosAudio={audios[0].derechos} 
coleccionAudio={audios[0].coleccion} 
creditosAudio={audios[0].creditos} 
lenguaAudio={audios[0].lengua}
/> -->
