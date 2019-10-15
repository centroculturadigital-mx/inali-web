<script>
  export let backgroundColor = "#fff";
</script>

<style>
  .GaleriaMedia {
    position: fixed;
    padding: 0 2rem;
    padding-top: 2rem;
    top: 3.25rem;
    right: 0;
    height: 100vh;
    background-color: transparent;
    width: 50%;
  }
</style>

<aside class="GaleriaMedia">

  <div class="GaleriaMediaContenedor">
    <header>
      <!-- <a href="/">Regresar!</a> -->
    </header>
    
    <slot />

  </div>
</aside>
