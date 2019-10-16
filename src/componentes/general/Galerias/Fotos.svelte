<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";
  // import  FsLightbox  from "../../../../node_modules/lightbox-fs/src/js/fs-lightbox.js";

  const IconoCierraGaleria = "icono.cierra.galeria.svg";

  const fotosColumnas = [
    [
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
    ],
    [
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
    ],
    [
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
      {
        url: `https://unsplash.it/${parseInt(200+(Math.random()*100))}/${parseInt(200+(Math.random()*100))}`
      },
    ],
  ];

  // let FsLightbox

  // onMount(async () => {
  //   FsLightbox = await import("../../../../node_modules/lightbox-fs/src/js/fs-lightbox.js");

  //   console.log(FsLightbox.default);
  // })
</script>

<style>
  .ContenedorFotos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* overflow: auto; */
    height: 100vh;
    padding: 0 2rem;
  }
  .Galeria {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
  .Titulo {
    padding: 1rem 1rem 0.25rem 1rem;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 2rem;
  }
  .Agrupacion {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1rem;
  }
  .Contenedor-1 ul,
  .Contenedor-2 ul,
  .Contenedor-3 ul {
    height: auto;
    display: grid;
    grid-gap: 1rem;
  }
  .Sub {
    display: flex;
    flex-direction: row;
  }
  .Sub p {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
  }
  .Fonetica {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1rem;
  }

  .Original {
    padding: 0.25rem 0.25rem 1rem 1rem;
    margin: 0;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    font-size: 1rem;
  }

  img {
    width: 90%;
    /* height: 14rem; */
    object-fit: cover;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Galería INALI</title>
</svelte:head>

<ContenedorGaleria on:cerrarGaleria>
  <header class="Galeria">

    <h1 class="Titulo">Fotos</h1>
    <div class="Sub">
      <p class="Agrupacion">Agrupación:</p>
      <p class="Fonetica">Nawatl</p>
      <p class="Original">(Nahuátl)</p>
    </div>

  </header>

  <div class="ContenedorFotos">

    {#each fotosColumnas as fotoColumna, h}
        
        <section class={`Contenedor-${h+1}`}>
          <ul>
            {#each fotosColumnas[h] as foto, i}
              <img
              class="Imagen fs-lightbox"
              src={foto.url}
              alt="img" />
            {/each}
          </ul>
        </section>
        
    {/each}
  </div>

</ContenedorGaleria>
