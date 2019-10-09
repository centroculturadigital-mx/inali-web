<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte';
	import Principal from "../componentes/general/Principal/Principal.svelte";
	export let segment;
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