<script>
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";

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

</style>

<svelte:head>
  <title>Audios INALI</title>
</svelte:head>

<ContenedorGaleria>
  <header class="Audios">

    <h1 class="Titulo">Audios</h1>
    <div class="Sub">
      <p class="Agrupacion">Agrupación:</p>
      <p class="Fonetica">Nawatl</p>
      <p class="Original">(Nahuátl)</p>
    </div>
  </header>

</ContenedorGaleria>
