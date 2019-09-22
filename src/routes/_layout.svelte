<script>
	// import Nav from '../components/Nav.svelte';
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte';

	export let segment;
</script>

<style>
	main {
		height: 80vh;
	}

</style>
<!-- <Nav {segment}/> -->
<Cabecera {segment}/>

<main>
	<slot></slot>
</main>

<Pie/>