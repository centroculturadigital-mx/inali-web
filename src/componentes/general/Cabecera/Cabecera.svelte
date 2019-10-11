<script>
  import Navegacion from "../Navegacion/Navegacion.svelte";
  import Idiomas from "../Idiomas/Idiomas.svelte";
  import Logo from "./Logo/Logo.svelte";

  export let segment;
  export let abreBusqueda;
  let buscador = false;
  const abreInputBusqueda = e => {
    
    !buscador ? buscador = true : buscador = false;
      console.log("Cabecera", e);
    

  };
</script>

<style>
  header {
    display: flex;
    height: 3.25rem;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  #Logotipo {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid #fff 1px;
    min-width: 338px;
  }
  .BotonesDerecha {
    display: flex;
    justify-content: center;
    padding: 0 !important;
    min-width: 25%;
  }
  .Busqueda:hover {
    color: #72A6AA !important;
  }
  .Busqueda {
    background-color: transparent;
    border: 0;
    margin: 0;
    color: #fff;
    width: 25%;
    align-items: center;
    height: 100%;
    cursor: pointer;
    border-left: solid #fff 1px;
    border-right: solid #fff 1px;
  }
  .Busqueda i {
    font-size: 1.15rem;
    font-weight: lighter;
  }
  .Idiomas {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<header>

  <div id="Logotipo">
    <Logo />
  </div>

  <Navegacion {segment} abreBusqueda={buscador} />

  <div class="BotonesDerecha">

    <button on:click={abreInputBusqueda} class="Busqueda">
      <i class="fa fa-search" />
    </button>

    <div class="Idiomas">
      <Idiomas />
    </div>

  </div>

</header>
