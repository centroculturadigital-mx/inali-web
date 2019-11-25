<script>
  import LenguaResumen from "./LenguaResumen.svelte";

  export let lenguaDatos;

</script>

<style>

</style>

<section id="MiniResumen">
  <LenguaResumen lengua={lenguaDatos} />
</section>
