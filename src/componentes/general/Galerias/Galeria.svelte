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
        <img
        class="Imagen fs-lightbox"
        src={imagen.url}
        alt="img" />
    {/each}
    </ul>
</section>
