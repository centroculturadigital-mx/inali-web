<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  
  export let lengua

  const cerrar = (event) => {
    dispatch('cerrar')
  }
  $: console.log('lenguaDetalle', lengua)
</script>

<style>
  .mediaPantalla {
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    width: 50%;
    height: 100%;
  }
  /* your styles go here */
</style>

<section class="mediaPantalla">
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
    <!-- <button on:click={verMas}>Ver más</button> -->
    
    <!-- content here -->
  </section><!-- markup (zero or more items) goes here -->