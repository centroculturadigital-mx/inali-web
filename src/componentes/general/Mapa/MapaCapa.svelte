<script>
	import { 
    createEventDispatcher, 
    getContext, 
    onMount 
  } from 'svelte';
  import key from '../../../mapbox-context-key.js'
  import bbox from '@turf/bbox'

	const dispatch = createEventDispatcher();

	const forward = (event) => {

    map.fitBounds(bbox(polygon),{
      padding: {top: 25, bottom:25, left: 25, right: 25}
    })
    
    dispatch('layerclick', id)

	}

  export let polygon
  export let id
  
  const { getMap } = getContext(key)

  const map = getMap()
  let layer

  onMount(async () => {

    map.on('styledata', () => {

      if ( !layer ) {
        layer = map.addLayer({
          'id': id,
          'type': 'fill',
          'source': {
            'type': 'geojson',
            'data': polygon
          },
          'layout': {},
          'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
          }
        })

      }

    })

    map.on('click', id, forward)

  })
  
</script>