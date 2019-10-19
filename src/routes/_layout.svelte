<script>

	import LightBox from "../componentes/general/LightBox/LightBox.svelte";


	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte';
	import Principal from "../componentes/general/Principal/Principal.svelte";
	
	import { writable } from 'svelte/store';
	
	export let segment;


	import { onMount, setContext } from 'svelte';
	
	const imagenesStore = writable([]);
	
	let siguientesImagenes;
	let goToLightbox

	
	const abrir = i => {
		goToLightbox = null;
		console.log("abrirg/;;;;;",i);
		
		setTimeout(() => (goToLightbox = i));
	};



	setContext('lightbox',{ imagenesStore, abrir })

	imagenesStore.subscribe(imagenes=>{
		siguientesImagenes=imagenes
		console.log("siguientesImagenes",siguientesImagenes);
		
	})
	// onMount(()=>{
	// })

	$: imagenesLightbox = siguientesImagenes;
	$: goLightbox = goToLightbox;
	$: console.log(goToLightbox);
	$: console.log(goLightbox);
		



</script>

<style>
	main {
		height: 100vh;
	}

</style>
<Cabecera {segment}/>

<main>
	<Principal/>
	<slot></slot>
</main>

<Pie/>


{#if !! imagenesLightbox }
<LightBox content={imagenesLightbox} go={goLightbox} />
{/if}