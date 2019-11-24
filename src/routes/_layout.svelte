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

	let ingreso = true
	
	const abrir = i => {
		goToLightbox = null;
		console.log("abrirg/;;;;;",i);
		
		setTimeout(() => (goToLightbox = i));
	};

	const validaIngreso = () => {
		const usuario = document.getElementById('usuario')
		const contrasenna = document.getElementById('contrasenna')

		if ( usuario.value === "ccd" && contrasenna.value === "123") {
			ingreso = true;
		} else {
			alert('acceso restringido')
		}
	}



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

	#form-ingreso {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	#form-ingreso button,
	input {
		background-color: none;
		padding: 0.5rem;
		border: 1px solid #eee;
		border-radius: .25rem;
		margin-bottom: 1rem;
	}


</style>
<Cabecera {segment}/>

<main>
	{#if !! ingreso}

		<Principal/>
		<slot></slot>
		 <!-- content here -->
	{:else}

		<div id="form-ingreso">
			<input id="usuario" type="text" placeholder="usuario">
			<input id="contrasenna" type="password" placeholder="contraseña">
			<button on:click={() => validaIngreso()}>Ingresar</button>
		</div>
		 <!-- else content here -->
	{/if}
</main>

<Pie/>


{#if !! imagenesLightbox }
<LightBox content={imagenesLightbox} go={goLightbox} />
{/if}