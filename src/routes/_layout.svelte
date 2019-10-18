<script>

	import LightBox from "../componentes/general/LightBox/LightBox.svelte";


	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte';
	import Principal from "../componentes/general/Principal/Principal.svelte";
	
	import { writable } from 'svelte/store';
	
	export let segment;


	import { onMount, setContext } from 'svelte';
	
	const imagenesStore = writable([]);
	const abrir = ()=>{}



	setContext('lightbox',{ imagenesStore, abrir })

	imagenesStore.subscribe(val=>console.log("imagenesStore",val))
	// onMount(()=>{
	// })


	$: console.log("imagenesLightbox", imagenesStore);
		



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

<!-- <LightBox content={imagenes} go={go} /> -->
