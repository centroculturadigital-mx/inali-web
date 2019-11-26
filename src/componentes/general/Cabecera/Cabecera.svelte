<script>
  import Navegacion from "../Navegacion/Navegacion.svelte";
  import Idiomas from "../Idiomas/Idiomas.svelte";
  import Logo from "./Logo/Logo.svelte";

  export let segment;
  export let abreBusqueda;
  let buscador = false;
  const abreInputBusqueda = e => {
    !buscador ? (buscador = true) : (buscador = false);
    // console.log("Cabecera", e);
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
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-right: solid #fff 1px; */
    min-width: 338px;
    cursor: pointer;
  }
  #Logotipo:hover {
    opacity: 0.85;
  }
  .BotonesDerecha {
    display: flex;
    justify-content: center;
    padding: 0 !important;
    /* min-width: 25%; */
  }
  .Busqueda:hover {
    color: #72a6aa !important;
  }
  .Busqueda {
    background-color: transparent;
    border: 0;
    margin: 0;
    color: #fff;
    width: 25%;
    align-items: center;
    height: 100%;
    /* cursor: pointer; */
    /* border-left: solid #fff 1px; */
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
  @media (max-width: 660px) {
    #Logotipo {
      min-width: 165px;
      padding-left: 1rem;
    }
    .Navegacion {
      font-size: 0.75rem;
      padding: 0.5rem;
    }
  }
</style>

<header>

  <div id="Logotipo" on:click={() => location.assign('/')}>
    <Logo />
  </div>
  <!-- Posicion 1 Menu Nav -->
  <!-- <Navegacion {segment} abreBusqueda={buscador} /> -->

  <div class="BotonesDerecha">

    <!-- <div class="Busqueda">
   </div> -->
    <!-- <button on:click={abreInputBusqueda} class="Busqueda">
      <i class="fa fa-search" />
    </button> -->

    <!-- <div class="Idiomas">
      <Idiomas />
    </div> -->

  </div>

  <!-- Posicion Temporal Menu Nav -->
  <Navegacion {segment} abreBusqueda={buscador} />

</header>
