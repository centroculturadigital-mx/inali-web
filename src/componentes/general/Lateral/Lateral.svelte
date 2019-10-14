<script>
import { fade } from 'svelte/transition'
</script>
<style>
  .Lateral {
    background-color: transparent;
    padding-top: 3.25rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
  }
  .Cerrar {
    position: absolute;
    right: 1rem;
    top: 3.5rem;
    display: flex;
    justify-content: flex-end;
    padding: 0rem 1rem 0 0;
  }
  .Cerrar a {
    color: rgba(255, 255, 255, 1);
  }
  .Cerrar a:hover {
    color: red;
  }
</style>

<aside class="Lateral" transition:fade>

  <div class="">
    <span class="Cerrar">
      <a href="/">
        <i class="fa fa-close" />
      </a>
    </span>

    <slot />

  </div>
</aside>
