<script>
  import { onMount } from "svelte";
  import { slide, fade } from "svelte/transition";
  export let segment;
  export let abreBusqueda;

  let buscadorInput;
  
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
    padding: 0 2rem;
    width: 50%;
  }
  .InputBusqueda {
    transition: 0.5s;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%; /*cerrado*/
    opacity: 1; /*invisible*/
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
    color: #FFF;
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
    /* justify-content: space-evenly; */
    justify-content: flex-end;
    text-transform: uppercase;

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
    padding: 1rem;
  }
  a {
    text-decoration-style: none;
    color: #fff;
    padding: 0;
  }
  a:hover {
    text-decoration-style: none;
    color: #72A6AA;
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
    color: #72A6AA;
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

/* Hover line */

  .ListaNavegacion li {
    display: inline-block;
    list-style: outside none none;
    margin: 0.4rem 0.8rem;
    padding: 0;
  }
  .ListaNavegacion a {
    padding: 0 1rem;
    position: relative;
    text-decoration: none;
    display: inline-block;
  }
  .ListaNavegacion a:before {
    position: absolute;
    content: '';
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    opacity: 0;
    left: 15%;
    right: 15%;
    top: 40%;
    bottom: 0;
    border-left: 1px solid #72A6AA;
    border-right: 1px solid #72A6AA;
    height: 20%;
  }
  
  .ListaNavegacion a:hover:before {
    opacity: 1;
    left: 0;
    right: 0;
  }


  @media (min-width : 900px) {
  .menu {
    font-size: 1.2em;
  }
}

.menu {
  padding: 0.5em;
  background: #eee;
  min-height: 2em;
  line-height: 1em;

  ul {
    transition: max-height .25s linear;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    // visibility transition is on li because multiple transition selectors is not well supported
    transition: visibility .25s linear;
    display: inline-block;
    border: 1px solid;
    padding: .45em 1.1em;
    margin: 0 .3em;
  }
}

@media (max-width : 650px) {
  .menu {
    ul {
      max-height: 0;
      overflow: hidden;
      margin: 0 3.5em 0 1em;
    }

    li {
      visibility: hidden;
      display: block;
      padding: 0.5em 0.6em;
      border: none;
    }

    .navbar-handle {
      display: block;
    }
  }
  
  #navbar-checkbox:checked + .menu {
    ul {
      max-height: 300px; // Set this to the maximum height your menu will ever have.
    }
    
    li {
      visibility: visible;
    }
    .navbar-handle {
      &, &:after, &:before {
        border-color: #aaa;
      }
    }
  }
}

.navbar-checkbox {
    display: none;
}

// Will scale based on font-size
// Appears as 3 parallel horizontal bars
.navbar-handle {
    @height: 45px; // just a reference to compute em values on the fly
    display: none;
    cursor: pointer;
    position: relative;
    font-size: @height;
    padding: .5em 0;
    height: 0;
    width: 1em * 75px / @height;
    border-top: (1em * 6px / @height) solid;

    &:before, &:after {
        position: absolute;
        left: 0;
        right: 0;
        content: ' ';
        border-top: (1em * 6px / @height) solid;
    }

    &:before {
        top: 1em * 17px / @height;
    }

    &:after {
        top: 1em * 40px / @height;
    }
}



///////////

.menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  .navbar-handle {
    position: absolute;
    font-size: 1.2em;
    top: 0.7em;
    right: 12px;
    z-index: 10;    
  }
}


</style>

<nav class="Navegacion">
  {#if !abreBusqueda}
  <!-- <ul class="ListaNavegacion"transition:fade="{{ duration: 500 }}">
    <li>
      <a class={segment === 'acerca-de' ? 'selected' : ''} href="acerca-de">
        acerca de
      </a>
    </li>
    <li>
      <a class={segment === 'glosario' ? 'selected' : ''} href="glosario">
        glosario
      </a>
    </li>
     <li>
      <a
        href="http://138.68.223.192:4000" target="_blank">
        mapa interactivo
      </a>
    </li> 
  </ul>  -->

  <input type="checkbox" id="navbar-checkbox" class="navbar-checkbox">
<nav class="menu">
  <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Our company</li>
    <li>Our team</li>
    <li>Contact us</li>
  </ul>
  
  <label for="navbar-checkbox" class="navbar-handle"></label>
</nav>
 
  {:else}
  <div class="InputBusqueda" bind:this={buscadorInput} transition:fade="{{duration: 500 }}">
    <form action="">
      <label for="Busqueda">
        <input
          type="text"
          placeholder="Busca una lengua, agrupación o variante"/>
      </label>
    </form>
  </div>
  {/if}
</nav>
