<script>
  import { createEventDispatcher } from 'svelte'
  // your script goes here
  export let lengua 

  const dispatch = createEventDispatcher()

	const cerrar = (event) => {
    dispatch('cerrar')
  }
	const verMas = (event) => {
    dispatch('vermas')
  }

  $: console.log(lengua)
</script>

<style>
  /* your styles go here */
  .card {
    position: absolute;
    top: 10rem;
    left: 50%;
    width: 320px;
    background-color: rgba(255, 255, 255, 0.9);
    /* height: calc( 100% - 2rem ); */
    max-height: 15rem;
    padding: 2rem;
  }
</style>

{#if lengua}
  <div class="card">
    <header>
      <h2>
        {
          lengua.NOM_FAM ? lengua.NOM_FAM :
          lengua.NOM_AGRUP ? lengua.NOM_AGRUP : 
          lengua.NOM_VAR 
        }
      </h2>
    </header>
    <button on:click={cerrar}>X</button>
    <button on:click={verMas}>Ver más</button>
    
    <!-- content here -->
  </div>
{/if}