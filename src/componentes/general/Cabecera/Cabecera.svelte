<script>
    import Idiomas from "../Idiomas/Idiomas.svelte";
    import Logo from "./Logo/Logo.svelte";


    // import Icon from "fa-svelte";
    // import { faSearch } from "@fortawesome/free-solid-svg-icons";

    // let Busqueda = faSearch;

</script>

<style>


    header {
        display: flex;
        height: 4rem;
        background: #465D72;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);

    }

    #Logotipo {
        padding: 0;
        width: 12rem; 
    }

    /* #Logotipo img {
        width: 100%;
        height: 100%;
        object-fit: contain; 
        object-position: 0 0;
    } */


    header > * {
        /* flex-shrink: 1;
        padding: 1.5rem; */
        padding: 0 1rem;
        display: flex;
        align-items: center;
    }
    header > nav {
        flex-grow: 1;
    }
   
    nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-right: solid gray 1px;
        border-left: solid gray 1px;
    }
    nav ul li {
        padding: 0 1rem;
        margin: 0;
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 16px;
        line-height: 48px;

    }

    .Busqueda {
        background: #465D72;
        border: 0;
        margin: 1rem;
    }

    a {
      text-decoration-style: none;
      color: #fff;
    }

    .Idiomas {
        border-left: solid gray 1px;

    }

</style>

<header>

  <div id="Logotipo">
    <!-- <img src="http://fakeimg.pl/244x80?text=logo" alt="img" /> -->
    <Logo/>
  </div>

  <nav>
    <ul>
      <li>
        <a href="#">
        ACERCA DE
        </a>
      </li>
      <li>
        <a href="#">
        GLOSARIO
        </a>
      </li>
      <li>
        <a href="#">
        MAPA INTERACTIVO
        </a>
      </li>
    </ul>
  </nav>

  <button class="Busqueda">
    <i></i>
  </button>

  <div class="Idiomas">
    <Idiomas/>
  </div>

</header>
