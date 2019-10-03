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

    const familiasColores = {
        algica: 'E6AA30',
        yutonahua: 'F45C92',
        cochimiyumana: 'D31A27',
        seri: '7D8796',
        otomangue: '5EA279',
        maya: '6D6DB3',
        totonacotepehua: '4B84FA',
        tarasca: '48CBFF',
        mixezoque: '877477',
        chontaldeoaxaca: 'F46E7E',
        huave: '986293',
    }

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

    $: console.log('familiasVisibles', familiasVisibles)
    $: console.log('agrupacionesVisibles', agrupacionesVisibles)
    $: console.log('variantesVisibles', variantesVisibles)
    
    // TODO multiselect find => filter

    const calculaFamiliasVisibles = ( famMod, selec ) => {
        if ( !famMod && !famMod ) return [] 
        
        let fams = famMod.default.map(f => {
            f.color = familiasColores[f.id]
            return f
        })

        if (
            !selec.famId &&
            !selec.agrId &&
            !selec.varId
        ) {
            return fams
        }
        else if ( selec.famId ) {
            return [ fams.find( f => f.id === selec.famId ) ]
        }
        else if ( selec.agrId ) {
            return [ fams.find( f => f.agrupaciones.includes(selec.agrId) ) ]
        }
    }

    const calculaAgrupacionesVisibles = ( agrMod, selec ) => {

        if ( !agrMod ||
            (
                ! selec.famId &&
                ! selec.agrId &&
                ! selec.varId
            )
        ) return [] 
        else if ( selec.famId ) 
            return agrMod.default.filter(a => a.familiaId === selec.famId )
        else if ( selec.agrId ) 
            return [ agrMod.default.find( a => a.id === selec.agrId ) ]

    }

    const calculaVariantesVisibles = ( varMod, selec ) => {
        
        if ( !varMod ||
            ( 
                ! selec.agrId &&
                ! selec.varId 
            )
        ) return [] 
        else if ( selec.agrId ) 
            return varMod.default.filter(a => a.familiaId  == selec.agrId )
        else if ( selec.varId ) 
            return [ varMod.default.find( a => a.id === selec.varId ) ]

    }


    const handleLayerClick = (layer) => {

        // recibe: layer.detail
        // > {id, tipo}

        familiaSeleccionada = layer.detail.tipo == 'familia' ? layer.detail.id : null
        agrupacionSeleccionada = layer.detail.tipo == 'agrupacion' ? layer.detail.id : null
        varianteSeleccionada = layer.detail.tipo == 'variante' ? layer.detail.id : null
    
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
            let nuevoArbol = familias.map(f => {
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
            console.log('arbolFiltro', nuevoArbol)
            return nuevoArbol

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
        <Mapa lat={23.551238082075017} lon={-107.61401268566283} zoom={4}>
            {#if familiasVisibles && familiasVisibles.length }
                {#each familiasVisibles as fam}       
                    <MapaCapa 
                        polygon={fam.geojson}
                        id={fam.id}
                        on:layerclick={handleLayerClick}
                        tipo="familia"
                        color={fam.color}
                    />
                {/each}
            {/if}
            
            {#if agrupacionesVisibles && agrupacionesVisibles.length }
                {#each agrupacionesVisibles as agr}       
                    <MapaCapa
                        polygon={agr.geojson}
                        id={agr.id}
                        on:layerclick={handleLayerClick}
                        tipo="agrupacion"
                        color={agr.color}
                    />
                {/each}
            {/if}
            
            {#if variantesVisibles && variantesVisibles.length }
                {#each variantesVisibles as vari}       
                    <MapaCapa
                        polygon={vari.geojson}
                        id={vari.id}
                        on:layerclick={handleLayerClick}
                        tipo="variante"
                        color={vari.color}
                    />
                {/each}
            {/if}

            <!-- <MapaMarcador lat={19.8981} lon={-99.4169} label="Svelte Barbershop & Essentials"/> -->
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

