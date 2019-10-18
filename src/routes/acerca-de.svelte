<script>
  import Lateral from "../componentes/general/Lateral/Lateral.svelte";
</script>

<style>
  .titulo {
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 200;
    padding-top: 2rem;
    /* font-size: 1rem; */
  }

  .Informacion {
    padding: 1rem;
    padding-bottom: 4rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    display: grid;
  }

  .Informacion p {
    padding: 0 0 1rem 0;
  }

  .Cerrar {
    display: flex;
    justify-content: flex-end;
    padding: 0rem 1rem 0 0;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .Cerrar a {
    color: rgba(255, 255, 255, 1);
  }
  .Cerrar a:hover {
    color: tomato;
  }
</style>

<svelte:head>
  <title>Acerca de</title>
</svelte:head>

<Lateral backgroundColor="rgba(70,93,114,0.95)">
  <span class="Cerrar">
    <a href="/">
      <i class="fa fa-close" />
    </a>
  </span>
  <h3 class="titulo">Acerca de</h3>

  <section class="Informacion">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </section>
</Lateral>
