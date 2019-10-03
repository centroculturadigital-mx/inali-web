<script>
    import { 
        createEventDispatcher
     } from "svelte";

    export let arbol = []
    export let seleccion

    const dispatch = createEventDispatcher();

	const deseleccionar = (event) => {
        dispatch('deseleccionar')
    }

    $: console.log('seleccion', seleccion)

    $: arbolFiltrado = calculaArbolFiltrado(arbol, seleccion)

    const calculaArbolFiltrado = (arb, sel) => {
        return arb.reduce((acc, f) => {
            if (!sel.famId && !sel.agrId && !sel.varId) return [...acc, f]
            else if (sel.famId) {
                if (sel.famId === f.id) {
                    f.open = true
                    return [...acc, f]
                } else return acc
            }
            else if (sel.agrId || sel.varId) {
                f.agrupaciones = f.agrupaciones.reduce((acc2, a) => {
                    if (sel.agrId === a.id) {
                        a.open = true
                        return [...acc2, a]
                    }
                    else {
                        a.variantes = a.variantes.filter(v => v.id === sel.varId)
                        if (a.variantes.length) {
                            a.open = true
                            return [...acc2, a]
                        }
                        return acc2
                    }
                }, [])
                if (f.agrupaciones.length) {
                    f.open = true
                    return [...acc, f]
                } else return acc
            } 

        }, [])
    }
    
</script>

<style>

    aside {
        max-height: 21rem;
        overflow: auto;
        padding: 1rem;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
        background-color: rgba(255,255,255,0.8);
    }
    
    /* details details {
        padding-left: 2rem;
    } */
    
    .BarraOcultar {
        /* border-radius: 10px 10px 0px 0px;  */
        background: #465D72;
        border-radius: 0px;
        position: relative;
        top: 2%;
        
    }
    .Familias {
        padding: 0.5em;
        color: #fff;
    }

    summary {
        padding-left: 0.5rem;
        border-left: 3px solid trasparent;
    }

    details {
        padding-left: 0;
    }

    ul li {
        border-left: 1rem solid transparent;
        padding: 0.5rem 0;
    }

    ul li li li {
        padding-left: 0.5rem;
    }

</style>

<div class="BarraOcultar">
    <h4 class="Familias">Familias lingüísticas</h4>
</div>
<aside>

<!-- TODO agregar indicador de filtro activo -->
{#if seleccion.famId || seleccion.agrId || seleccion.varId}
    <button on:click={deseleccionar}>Mostrar Todas</button>
{/if}
<ul>
    {#each arbolFiltrado as fam ("fam"+fam.id)}       
        <li class="familia" style={`border-color: ${fam.color}`}>
            <details open={fam.open}>
                <summary>
                    {fam.nombre} {seleccion.famId === fam.id ? '*' : ''}
                </summary>
                <ul>
                
                {#each fam.agrupaciones as agr ("agr"+agr.id)}
                    <li class="agrupacion" style="border-color: {agr.variantes[0].color}">
                        <details open={agr.open}>
                            <summary>
                                {agr.nombre} {seleccion.agrId === agr.id ? '*' : ''}
                            </summary>
                            <ul>
                                
                            {#each agr.variantes as vari ("var"+vari.id)}
                                <li class="variante" style="border-color: {vari.color}">
                                    {vari.nombre}  {seleccion.varId === vari.id ? '*' : ''}
                                </li>
                            {/each}

                            </ul>    
                        </details>
                    </li>

                {/each}

                </ul>
            </details>
        </li>

    {/each}
</ul>

</aside>