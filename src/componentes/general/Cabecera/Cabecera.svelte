<script>
    import Idiomas from "../Idiomas/Idiomas.svelte";
</script>

<style>

    header {
        display: flex;
        height: 4rem;
    }

    #Logotipo {
        padding: 0;
        width: 6rem;        
        height: 100%;
        object-fit: contain; 
        object-position: 0 50%;
    }


    header > * {
        flex-shrink: 1;
        padding: 1.5rem;
    }

    header > nav {
        flex-grow: 1;
        padding: 0;
    }
    nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    nav ul li {
        padding: 0 2rem;
        height: 100%;
        display: flex;
        align-items: center;

    }

</style>

<header>

  <img id="Logotipo" src="http://fakeimg.pl/244x80?text=logo" alt="img" />

  <nav>
    <ul>
        <li>
            <a href="#">
                Menu
            </a>
        </li>
        <li>
            <a href="/glosario">
                Acerca de
            </a>
        </li>
        <li>
            <a href="/instrucciones">
                Glosario
            </a>
        </li>
        <li>
            <a href="/acerca">
                Mapa Interactivo
            </a>
        </li>
    </ul>
  </nav>

  <button>
    <i>B</i>
  </button>

  
    <Idiomas/>

</header>
