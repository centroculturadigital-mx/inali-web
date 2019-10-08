<script>
	import { onMount, setContext, createEventDispatcher } from 'svelte'
	import key from '../../../mapbox-context-key.js'
	
	const dispatch = createEventDispatcher();

	const comparteMapa = (mapa) => {
    console.log('comparteMapa')
    dispatch('cargado', mapa)

  }

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let zoom;

	let map
	let container

	onMount(async () => {
		
		const mapboxModule = await import('mapbox-gl');

		const mapbox = mapboxModule.default
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

		mapbox.accessToken = 'pk.eyJ1IjoicmFsZXhyZHoiLCJhIjoiY2lmdHB2aGo2MTZ4MnQ1bHkzeDJyaDMzNyJ9.UHhEm9gA1_uwAztXjb7iTQ';


		link.onload = () => {
			map = new mapbox.Map({
				container,
				style: 'mapbox://styles/mapbox/satellite-v9',
				center: [lon, lat],
				// pitch: 60, 
				// bearing: -60,
				zoom
			});
			map.on('load', () => {
				comparteMapa(map)
				map.addSource('contours', {
					type: 'vector',
					url: 'mapbox://mapbox.mapbox-terrain-v2'
				});
				map.addLayer({
					'id': 'contours',
					'type': 'line',
					'source': 'contours',
					'source-layer': 'contour',
					'layout': {
						'visibility': 'visible',
						'line-join': 'round',
						'line-cap': 'round'
					},
					'paint': {
						'line-color': '#877b59',
						'line-width': 1
					}
				});
			})
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});
</script>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>

<div bind:this={container}>
	{#if map}
		<slot></slot>
	{/if}
</div>