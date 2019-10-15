<script>
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";
  const IconoCierraGaleria = 'icono.cierra.galeria.svg';
</script>

<style>
 .Audios {
    display: flex;
    flex-direction: column;
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
  .Regresa {
    display: flex;
    justify-content: flex-end;
    padding: 0rem 1rem 0 0;
    color: rgb(255, 255, 255);
    background-color: transparent;
    border: 0;
  }

  .Regresa img {
    height: 3.5rem;
    width: 3.5rem;
  }
</style>

<svelte:head>
  <title>Audios INALI</title>
</svelte:head>

<ContenedorGaleria>
  <header class="Audios">
    <button class="Regresa">
      <!-- <i class="fa fa-arrow-left" /> -->
      <img src={IconoCierraGaleria} alt="Cierra Galería INALI">

    </button>
    <h1 class="Titulo">Audios</h1>
    <div class="Sub">
      <p class="Agrupacion">Agrupación:</p>
      <p class="Fonetica">Nawatl</p>
      <p class="Original">(Nahuátl)</p>
    </div>
  </header>

</ContenedorGaleria>
