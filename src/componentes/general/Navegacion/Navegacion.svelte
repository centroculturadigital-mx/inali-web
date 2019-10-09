<script>
export let segment;
</script>

<style>
  * {
    /* flex-shrink: 1;
        padding: 1.5rem; */
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  nav {
    flex-grow: 1;
  }
  .Navegacion {
    width: 50%;
    padding: 0;
  }
  .Navegacion ul {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .Navegacion ul li {
    padding: 0 1rem;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 48px;
  }
  .Navegacion ul li a {
    font-size: 0.9rem;
  }
  a {
    text-decoration-style: none;
    color: #fff;
    padding: 0;
  }
  a:hover {
    text-decoration-style: none;
    color: #fbb634;
  }
  /*  */
  	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: red;
		display: block;
		bottom: -1px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="Navegacion">
  <ul>
    <li>
      <a class='{segment === "acerca-de" ? "selected" : ""}' href='acerca-de'>ACERCA DE</a>
    </li>
    <li>
      <a class='{segment === "glosario" ? "selected" : ""}' href='glosario'>GLOSARIO</a>
    </li>
    <li>
      <a class='{segment === "mapa-interactivo" ? "selected" : ""}' href='mapa-interactivo'>MAPA INTERACTIVO</a>
    </li>
  </ul>
</nav>