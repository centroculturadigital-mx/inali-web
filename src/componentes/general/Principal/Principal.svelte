<script>
    import { onMount } from 'svelte'
    import Lateral from "../Lateral/Lateral.svelte";
    import Herramientas from "../Herramientas/Herramientas.svelte";
    import Mapa from "../Mapa/Mapa.svelte";
    import MapaCapa from "../Mapa/MapaCapa.svelte";
    import MapaMarcador from "../Mapa/MapaMarcador.svelte";

    let famTree = []
    let familias = []
    let agrupaciones = []
    let variantes = []

    onMount(async () => {

        let familiasModule = await import('../../../data/familias.json')
        let agrupacionesModule = await import('../../../data/agrupaciones.json')
        let variantesModule = await import('../../../data/variantes.json')

        familias = familiasModule.default
        agrupaciones = agrupacionesModule.default
        variantes = variantesModule.default

        const handleLayerClick = (famId) => {
            console.log(famId)
        }
        
        famTree = familias.map(f => {
            let fam = {
                nombre: f.NOM_FAM,
                id: f.id,
                tipo: 'familia'
            }
            fam.agrupaciones = agrupaciones.filter(a => {
                return f.agrupaciones.includes(a.id)
            }).map(a => {
                let agr = {
                    nombre: a.NOM_AGRUP,
                    id: a.id,
                    famId: f.id,
                    tipo: 'agrupacion'
                }
                return agr
            })
            return fam
        })

        console.log(famTree)

    })

</script>

<style>

    .Principal {
        position: relative;
        height: 100%;
        background-color: #ddd;
    }
    
    .Mapa {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .Herramientas {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .Lateral {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 320px;
        background-color: #fff;
        height: calc( 100% - 2rem );
    }
</style>


	
	
	

<div class="Principal">
    <div class="Mapa">
        <Mapa lat={19} lon={-99} zoom={8}>
	
            <!-- {#each familias as fam}       
                <MapaCapa polygon={fam.geojson} id={fam.id} on:layerclick={handleLayerClick}/>
            {/each} -->

            <MapaMarcador lat={19.8981} lon={-99.4169} label="Svelte Barbershop & Essentials"/>
            <!-- <MapaMarker lat={19.7230} lon={-99.4189} label="Svelte Waxing Studio"/>
            <MapaMarker lat={19.3378} lon={-99.3966} label="Svelte 30 Nutritional Consultants"/>
            <MapaMarker lat={19.6483} lon={-99.0237} label="Svelte Brands LLC"/>
            <MapaMarker lat={19.6986} lon={-99.4100} label="Svelte Medical Systems"/> -->
        </Mapa>
    </div>
    <div class="Herramientas">
        <Herramientas/>
    </div>
    <div class="Lateral">
        <Lateral/>
    </div>
</div>

