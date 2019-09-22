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
        width: 12rem;        
    }

    #Logotipo img {
        width: 100%;
        height: 100%;
        object-fit: contain; 
        object-position: 0 0;
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

  <div id="Logotipo">
    <img src="http://fakeimg.pl/244x80?text=logo" alt="img" />
  </div>

  <nav>
    <ul>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
    </ul>
  </nav>

  <button>
    <i>B</i>
  </button>

  
    <Idiomas/>

</header>
