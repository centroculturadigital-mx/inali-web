<script>
  // your script goes here
  export let lengua 

  $: console.log(lengua)
</script>

<style>
  /* your styles go here */
  h2 {
    color: white;
  }
</style>

{#if lengua}
  <h2>
    {
      lengua.NOM_FAM ? lengua.NOM_FAM :
      lengua.NOM_AGRUP ? lengua.NOM_AGRUP : 
      lengua.NOM_VAR 
    }
  </h2>
   <!-- content here -->
{/if}
<!-- markup (zero or more items) goes here -->