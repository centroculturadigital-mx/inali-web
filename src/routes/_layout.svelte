<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte';

	export let segment;
</script>

<style>
	main {
		height: 100vh;
	}

</style>
<Cabecera {segment}/>

<main>
	<slot></slot>
</main>

<Pie/>