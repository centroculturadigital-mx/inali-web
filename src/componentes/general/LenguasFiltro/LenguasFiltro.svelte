<script>
    export let arbol = []
    export let seleccion

    $: console.log('seleccion', seleccion)

    
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
        border-left: 10px solid transparent;
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
<ul>
    {#each arbol as fam}       
        <li style={`border-color: ${fam.color}`}>
            <details>
                <summary>
                    {fam.nombre}
                </summary>
                <ul>
                
                {#each fam.agrupaciones as agr}
                    <li style="border-color: {agr.color}">
                        <details>
                            <summary>
                                {agr.nombre}
                            </summary>
                            <ul>
                                
                            {#each agr.variantes as vari}
                                <li style="border-color: {vari.color}">
                                    {vari.nombre}
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