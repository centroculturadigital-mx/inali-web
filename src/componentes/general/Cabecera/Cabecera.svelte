<script>
  import Navegacion from "../Navegacion/Navegacion.svelte";
  import Idiomas from "../Idiomas/Idiomas.svelte";
  import Logo from "./Logo/Logo.svelte";
</script>

<style>
  header {
    display: flex;
    height: 3.3rem;
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
    color: #fbb634 !important;
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

  <Navegacion />

  <div class="BotonesDerecha">

    <button class="Busqueda">
      <i class="fa fa-search" />
    </button>

    <div class="Idiomas">
      <Idiomas />
    </div>

  </div>

</header>
