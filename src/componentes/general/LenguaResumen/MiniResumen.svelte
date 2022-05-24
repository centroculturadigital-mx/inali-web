<script>
  import LenguaResumen from "./LenguaResumen.svelte";

  export let lenguaDatos;
  export let muestraMapa;
  export let muestraDetalle;
</script>

<style>
#MiniResumen {
  width: 100%;
}
</style>

<section id="MiniResumen">
  <LenguaResumen lengua={lenguaDatos} muestraMapa={muestraMapa} on:vermas={muestraDetalle}/>
</section>
