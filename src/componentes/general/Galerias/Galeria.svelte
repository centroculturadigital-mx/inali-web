<script>
  //   import LightBox from "../LightBox/LightBox.svelte";
  import escalarImagenCloudinary from "../../../funciones/escalarImagenCloudinary.js"
  export let imagenes;
  export let lightboxAbrir;

  let go;

  $: console.log(imagenes.map(i => i.creditos));
  
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
    justify-items: center;
    align-items: center;
  }
  img {
    max-width: 10rem;
    object-fit: contain;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    max-height: 10rem;
  }
  .Contenido {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0rem;
    padding: 0.5rem 0;
    left: 0;
    text-align: center;
    font-size: 0.7rem;
    width: 100%;
    height: auto;
  }
  .Creditos {
    font-size: 0.6rem;
  }
  @media (max-width: 1098px) {
     .Galeria ul {
    grid-template-columns: 1fr 1fr;
  } 
  }
</style>

<section class="Galeria">
  <ul>
    {#each imagenes as imagen, i ('imagen_' + i)}
      {#if imagen.creditos}
        <article>

          <img
            on:click={() => lightboxAbrir(i)}
            class="Imagen"
            src={escalarImagenCloudinary(imagen.url)}
            alt="Fotos INALI" />

            <div class="Contenido">
              <div class="Titulo">
                {imagen.titulo || imagen.nombre}
              </div>
              <div class="Creditos">
                © {imagen.creditos}
              </div>
              
            </div>
        </article>
      {/if}
    {/each}
  </ul>
</section>
