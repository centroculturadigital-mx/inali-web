<script>
  import LightBox from "../LightBox/LightBox.svelte";

  export let imagenes;

  let go;

  const openLightBox = i => {
    go = null;
    setTimeout(() => (go = i));
  };
</script>

<style>
  .Galeria ul {
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }
  article {
    /* max-width: 10rem; */
    cursor: pointer;
    position: relative;
    display: grid;  
    justify-items: center;
  }
  img {
    max-width: 10rem;
    object-fit: cover;
    border-radius: 3px;
  }
  .Contenido {
    color: #fff;
    position: absolute;
    bottom: 0.5rem;
    padding: 0.5rem 0;
    left: 0;
    text-align: center;
    font-size: 075rem;
    width: 100%;
  }
</style>

<section class="Galeria">
  <ul>
    {#each imagenes as imagen, i (i)}
      <article>

        <!-- <img class="Imagen " src={imagen.small} alt="Fotos INALI" /> -->

        <div class="Contenido">Cierto Contenido</div>

      </article>
    {/each}
  </ul>
</section>
<!-- <LightBox content={imagenes} go={go} /> -->
