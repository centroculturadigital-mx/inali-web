<script>
    import { getContext } from 'svelte';

    const { test, testfunc } = getContext('app');
    console.log(test);
    
</script>


<style>

    aside {
        padding: 1rem;
    }

    details .Titulo,
    details details {
        padding-left: 2rem;
    }
</style>

<aside>
<h2>Familia linguistica</h2>
<ul>
    <li>
        <details>
            <summary on:click={() => testfunc(1)}>
                Nombre de familia
            </summary>
            <ul>

                <h3 class="Titulo">
                    Agrupaciones linguisticas
                </h3>
            
                <li>
                    <details>                        
                        <summary on:click={() => testfunc(2)}>
                            Nombre de agrupacion linguistica
                        </summary>
                        <ul>
                        
                            <h3 class="Titulo">
                                Variantes
                            </h3> 

                            <li>
                               <details>
                                    <summary on:click={() => testfunc(3)}>
                                        Nombre de variante
                                    </summary>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae laudantium dolorem amet dolorum? Minus nobis omnis, quod esse cum, iusto laudantium error adipisci ducimus amet dicta. Molestias iure aperiam maiores.</p>
                               </details> 
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </details>
    </li>
</ul>

</aside>