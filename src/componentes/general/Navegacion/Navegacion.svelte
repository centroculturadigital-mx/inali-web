<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  export let segment;
  export let abreBusqueda;

  let buscadorInput;

  $: abreBusqueda = abreInputBusqueda();
  // $: console.log(abreBusqueda, " :se abreeeews");

    const abreInputBusqueda = () => {
      if (abreBusqueda == true) {
        console.log(abreBusqueda, " :se abre busqueda");
        // buscadorInput.style.width = "100%";
        // buscadorInput.style.opacity = 1;
      } else {
        console.log(abreBusqueda, " :se cierra busqueda");
        // buscadorInput.style.width = "0%";
        // buscadorInput.style.opacity = 0;
      }
    }
  onMount(() => {
    });
</script>

<style>
  * {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  nav {
    flex-grow: 1;
  }
  .Navegacion {
    position: relative;
    padding: 0;
    width: 50%;
  }
  .InputBusqueda {
    transition: 0.5s;
    position: absolute;
    right: 0;
    top: 0;
    width: 0; /*cerrado*/
    opacity: 0; /*invisible*/
    height: 100%;
    padding: 0;
  }
  .InputBusqueda form {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .InputBusqueda form label {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .InputBusqueda form label input {
    padding: 0 0.5rem;
    width: 100%;
    height: 100%;
    background-color: #465d72;
    border: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
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
    padding: 0;
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
  /* menu  */
  ul::after {
    content: "";
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
    color: #fbb634;
  }
  /* .selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: red;
		display: block;
		bottom: -1px;
	} */
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav class="Navegacion">
  <ul>
    <li>
      <a class={segment === 'acerca-de' ? 'selected' : ''} href="acerca-de">
        ACERCA DE
      </a>
    </li>
    <li>
      <a class={segment === 'glosario' ? 'selected' : ''} href="glosario">
        GLOSARIO
      </a>
    </li>
    <li>
      <a
        class={segment === 'mapa-interactivo' ? 'selected' : ''}
        href="mapa-interactivo">
        MAPA INTERACTIVO
      </a>
    </li>
  </ul>
  <div class="InputBusqueda" bind:this={buscadorInput} transition:slide>
    <form action="">
      <label for="Busqueda">
        <input
          type="text"
          placeholder="Busca una lengua, agrupación o variante" />
      </label>
    </form>
  </div>
</nav>
