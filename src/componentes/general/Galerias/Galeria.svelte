<script>
  //   import LightBox from "../LightBox/LightBox.svelte";

  export let imagenes;
  export let lightboxAbrir;

  let go;

  $: console.log(imagenes);
  
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
    align-items: center;
  }
  img {
    max-width: 10rem;
    object-fit: cover;
    border-radius: 3px;
  }
  .Contenido {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0rem;
    padding: 0.5rem 0;
    left: 0;
    text-align: center;
    font-size: 0.5rem;
    width: 100%;
    height: auto;
  }

@media  (max-width: 575.98px) {
  .Galeria ul {
    grid-template-columns: 1fr;
  }
  img {
    max-width: 12rem;
    object-fit: cover;
    border-radius: 3px;
  }
}

@media (min-width: 576px) and (max-width: 768px)  {
  .Galeria ul {
    grid-template-columns: 1fr 1fr 1fr;
    
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .Galeria ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

<section class="Galeria">
  <ul>
    {#each imagenes as imagen, i ('imagen_' + i)}
      <article>

        <img
          on:click={() => lightboxAbrir(i)}
          class="Imagen"
          src={imagen.url}
          alt="Fotos INALI" />

          <div class="Contenido">
            <div class="Creditos">
              {imagen.creditos}
            </div>
            <!-- {#if imagen.tipo == "imagen"}

              <span>
                {imagen.metadatos.titulo}
              </span>
            {:else if imagen.tipo == "textil"}
              <span>
                {imagen.metadatos.nombreDelProducto}
              </span>
            {/if} -->
          </div>
      </article>
    {/each}
  </ul>
</section>
