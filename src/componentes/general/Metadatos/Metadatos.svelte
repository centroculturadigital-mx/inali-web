<script>

    import leyendas from "../../../contenidos/leyendas";

    export let metadatos;
    export let tipo;

</script>

<style>
  * {
    line-height: 1rem;
    font-size: 0.75rem;
  }
  /* .metaDatos-izquierda div,
  .metaDatos-derecha div {
    margin-bottom: 0.25rem;
  }
  .metaDatos-izquierda {
    padding: 2rem;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 3px;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    max-width: 20rem;
  }
  .metaDatos-derecha {
    padding: 2rem;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 3px;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    max-width: 20rem;
  } */

  dl {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 40vh;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
  }
  dt {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
  }
  dd {
    font-weight: lighter;
    letter-spacing: 1px;
  }
</style>

<dl class="metaDatos">

    {#each Object.keys(metadatos) as clave,i (i) }

        <dt>{ leyendas[tipo][clave] }</dt>
        <dd>{ metadatos[clave] }</dd>

    {/each}
</dl>
