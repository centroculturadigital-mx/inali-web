<script>
  import ContenedorGaleria from "../Lateral/ContenedorGaleria.svelte";
</script>

<style>
  .ContenedorFotos {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    overflow: auto;
    height: 100vh;
  }
  .Galeria {
    display: flex;
    flex-direction: column;
  }
  .Titulo {
    padding: 1rem 1rem .25rem 1rem;
    color:rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 2rem;
  }
  .Agrupacion{ 
    color:rgba(255, 255, 255, 1);
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
  .Contenedor-1 ul, .Contenedor-2 ul, .Contenedor-3 ul{
    height: auto;
    display: grid;
    grid-gap: 1rem;
  }
  .Sub {
    display: flex;
    flex-direction: row;
  }
  .Sub p {
    padding: .25rem .25rem 1rem 1rem;
    margin: 0;
  }
  .Fonetica {
    padding: .25rem .25rem 1rem 1rem;
    margin: 0;
    color:rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1rem;
  }

  .Original {
    padding: .25rem .25rem 1rem 1rem;
    margin: 0;
    color:rgba(255, 255, 255, 1);
    font-weight: 300;
    font-size: 1rem;
  }

  img {
		width: 90%;
		/* height: 14rem; */
    object-fit: cover;
  }

</style>

<svelte:head>
  <title>Audios INALI</title>
</svelte:head>

<ContenedorGaleria class="ContenedorGaleria" backgroundColor="rgba(70,93,114,1)">


<h1>AUDIOS AQUI</h1>

</ContenedorGaleria>
