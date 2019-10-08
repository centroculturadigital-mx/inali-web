<script>
	import { 
    createEventDispatcher, 
    getContext, 
    onMount,
    onDestroy
  } from 'svelte';
  import key from '../../../mapbox-context-key.js'

	const dispatch = createEventDispatcher();

	const capaClick = (event) => {
    
    dispatch('capaclick', {id, tipo})

  }
  
  export let polygon
  export let id
  export let tipo
  export let color
  export let opacidad

  const { getMap } = getContext(key)

  const map = getMap()
  let layer

  onMount(async () => {

    map.on('styledata', () => {

      if ( !layer ) {
        
        layer = map.addLayer({
          'id': `${tipo}-${id}`,
          'type': 'fill',
          'source': {
            'type': 'geojson',
            'data': polygon
          },
          'layout': {
          },
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
    map.removeLayer(`${tipo}-${id}`)
    map.removeSource(`${tipo}-${id}`)
  })
  
</script>