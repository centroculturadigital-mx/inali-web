<script>
    // libs
    import { onMount } from 'svelte'

    // componentes
    import LenguasFiltro from "../LenguasFiltro/LenguasFiltro.svelte";
    import LenguaDetalle from "../LenguaDetalle/LenguaDetalle.svelte";
    import LenguaResumen from "../LenguaResumen/LenguaResumen.svelte";
    import Herramientas from "../Herramientas/Herramientas.svelte";
    import Mapa from "../Mapa/Mapa.svelte";
    import MapaCapa from "../Mapa/MapaCapa.svelte";
    import MapaMarcador from "../Mapa/MapaMarcador.svelte";

    // Variables ara importación dinámica (síncrona) dentro de onMount()
    let familiasModule
    let agrupacionesModule
    let variantesModule

    // seleccion por id
    let familiaSeleccionada = null
    let agrupacionSeleccionada = null
    let varianteSeleccionada = null

    // condicionadores de Vistas
    let muestraResumen = false
    let muestraDetalle = false
    let muestraFiltro = true

    // Lengua 
    $: lenguaDetalle = calculaLenguaDetalle(seleccion)
    // $: lenguaResumen = calculaLenguaResumen(seleccion)
    
    // 
    $: famArbol = calculaArbolFiltro(
        familiasModule,
        agrupacionesModule,
        variantesModule,
        seleccion
    )
    

    $: seleccion = {
        famId: familiaSeleccionada,
        agrId: agrupacionSeleccionada,
        varId: varianteSeleccionada
    }

    // <lenguas>Visibles define los elementos que se muestran en el mapa y sus características
    $: familiasVisibles = calculaFamiliasVisibles(familiasModule, seleccion)
    $: agrupacionesVisibles = calculaAgrupacionesVisibles(agrupacionesModule, seleccion)
    $: variantesVisibles = calculaVariantesVisibles(variantesModule, seleccion)

    // TODO multiselect find => filter

    const calculaFamiliasVisibles = ( famMod, selec ) => {
        
        if ( !famMod ) return [] 
        else if (
            !selec.famId &&
            !selec.agrId &&
            !selec.varId
        ) return famMod.default
        else if ( selec.famId ) 
            return [ famMod.default.find( f => f.id === selec.famId ) ]
        else if ( selec.agrId ) 
            return [ famMod.default.find( f => f.agrupaciones.includes(selec.agrId) ) ]
    }

    const calculaAgrupacionesVisibles = ( agrMod, selec ) => {

        console.log('calculaAgrupacionesVisibles', selec)
        if ( !agrMod ) 
            return [] 
        else if (
            ! selec.famId &&
            ! selec.agrId &&
            ! selec.varId
        ) return agrMod.default
        else if ( selec.famId ) 
            return agrMod.default.filter(a => a.familiaId)
        else if ( selec.agrId ) 
            return [ agrMod.default.find( a => a.id === selec.agrId ) ]

    }

    const calculaVariantesVisibles = ( varMod, selec ) => {
        
        console.log('calculaVariantesVisibles', selec)
        if ( !varMod ||
            ( 
                ! selec.agrId &&
                ! selec.varId 
            )
        ) return [] 
        else if ( selec.agrId ) 
            return varMod.default.filter(a => a.familiaId)
        else if ( selec.varId ) 
            return [ varMod.default.find( a => a.id === selec.varId ) ]

    }


    const handleLayerClick = (layer) => {

        console.log(layer.detail) // id
        // familiaSeleccionada = layer.detail
        // agrupacionSeleccionada = layer.detail
        // varianteSeleccionada = layer.detail
    
    }

    const calculaLenguaDetalle = (selec) => {

    } 

    const calculaArbolFiltro = (fams, agrs, varis) => {
        
        if (
            fams && agrs && varis &&
            fams.default.length && agrs.default.length && varis.default.length
        ) {
            let familias = fams.default
            let agrupaciones = agrs.default
            let variantes = varis.default
            console.log('calculaArbolFiltro', familias, agrupaciones, variantes)
            let newArbol = familias.map(f => {
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
                    agr.variantes = variantes.filter(v => {
                        return a.variantes.includes(v.id)
                    }).map(v => {
                        return {
                            nombre: v.NOM_VAR,
                            id: v.id,
                            agrId: a.id,
                            tipo: 'variante'
                        }                    
                    })
                    return agr
                })
                return fam
            })
            console.log('newArbol', newArbol)
            return newArbol

        } else return []
    }

    onMount(async () => {

        familiasModule = await import('../../../data/familias.json')
        agrupacionesModule = await import('../../../data/agrupaciones.json')
        variantesModule = await import('../../../data/variantes.json')

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

    .LenguasFiltro {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 320px;
        background-color: transparent;
        /* height: calc( 100% - 2rem ); */
        max-height: 21rem;
    }
</style>

<div class="Principal">
    <div class="Mapa">
        <Mapa lat={19} lon={-99} zoom={8}>
	
            {#each familiasVisibles as fam}       
                <MapaCapa polygon={fam.geojson} id={fam.id} on:layerclick={handleLayerClick}/>
            {/each}
            
            <!-- {#each agrupacionesVisibles as agr}       
                <MapaCapa polygon={agr.geojson} id={agr.id} on:layerclick={handleLayerClick}/>
            {/each}

            {#each variantesVisibles as vari}       
                <MapaCapa polygon={vari.geojson} id={vari.id} on:layerclick={handleLayerClick}/>
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
    
    {#if muestraFiltro && famArbol}
        <div class="LenguasFiltro">
            <LenguasFiltro arbol={famArbol} seleccion={seleccion}/>
        </div>
    {/if}

    {#if muestraDetalle && !! lenguaDetalle }
        <div class="LenguaDetalle">
            <LenguaDetalle />
        </div>
    {/if}
    {#if muestraResumen && !! lenguaDetalle }
        <div class="Lateral">
            <LenguaResumen arbol={famArbol}/>
        </div>
    {/if}
</div>

