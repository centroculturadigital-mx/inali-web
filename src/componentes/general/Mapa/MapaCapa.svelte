<script>
	import { 
    createEventDispatcher, 
    getContext, 
    onMount,
    onDestroy
  } from 'svelte';
  import key from '../../../mapbox-context-key.js'
  import bbox from '@turf/bbox'

	const dispatch = createEventDispatcher();

	const capaClick = (event) => {

    map.fitBounds( bbox(polygon), {
      padding: {top: 25, bottom:25, left: 75, right: 25}
    })
    
    dispatch('layerclick', {id, tipo})

  }
  
  export let polygon
  export let id
  export let tipo
  export let color
  export let opacidad

  $: console.log('opacidad', opacidad)
  
  const { getMap } = getContext(key)

  const map = getMap()
  let layer

  onMount(async () => {

    map.on('styledata', () => {

      if ( !layer ) {
        console.log('construyendo', `${tipo}-${id}`);
        
        layer = map.addLayer({
          'id': `${tipo}-${id}`,
          'type': 'fill',
          'source': {
            'type': 'geojson',
            'data': polygon
          },
          'layout': {},
          'paint': {
            'fill-color': `#${color}`,
            'fill-opacity': opacidad / 100
          }
        })

      }

    })
    if (opacidad > 40) {
      map.on('click', `${tipo}-${id}`, capaClick)
    }
  })

  onDestroy(() => {
    // TODO imprimir tipo y id de layer a borrar
    console.log('destruyendo', `${tipo}-${id}`)
    map.removeLayer(`${tipo}-${id}`)
  })
  
</script>