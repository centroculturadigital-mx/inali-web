<script>
    export let arbol = []

    $: console.log('arbol', arbol)
</script>

<style>

    aside {
        max-height: 21rem;
        overflow: auto;
        padding: 1rem;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
        background-color: #fff;
        opacity: 0.8;
    }
    
    /* details .Titulo,
    details details {
        padding-left: 2rem;
    } */

    details details {
        padding-left: 2rem;
    }
    
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

</style>

<div class="BarraOcultar">
    <h4 class="Familias">Familias lingüísticas</h4>
</div>
<aside>

<ul>
    {#each arbol as fam}       
        <li>
            <details>
                <summary>
                    {fam.nombre}
                </summary>
                <ul>
                
                {#each fam.agrupaciones as agr}
                    <li>
                        <details>
                            <summary>
                                {agr.nombre}
                            </summary>
                            <ul>
                                
                            {#each agr.variantes as vari}
                                <li>
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
    <!-- <li>
        <details>
            <summary>
                Nombre de familia
            </summary>
            <ul>

                <h3 class="Titulo">
                    Agrupaciones linguisticas
                </h3>
            
                <li>
                    <details>                        
                        <summary>
                            Nombre de agrupacion linguistica
                        </summary>
                        <ul>
                        
                            <h3 class="Titulo">
                                Variantes
                            </h3> 

                            <li>
                               <details>
                                    <summary>
                                        Nombre de variante
                                    </summary>
                               </details> 
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </details>
    </li> -->
</ul>

</aside>