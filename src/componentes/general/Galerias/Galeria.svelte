<script>

    export let imagenes


</script>


<style>
    .Galeria ul {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>

<section class="Galeria">
    <ul>
        {#each imagenes as imagen, i (i)}
            <article>
                
                <img
                class="Imagen   "
                src={imagen.url}
                alt="img" />

                <div class="Contenido">
                    Cierto Contenido
                </div>
                
            </article>
        {/each}
    </ul>
</section>
