<script>
const Logotipos = ['logo-gobcultura.svg','logo-80inah.svg','logo-fonoteca.svg','logo.cenidim.svg','logo.descarga.cultura.unam.svg','logo.ccd.svg','logo-inali.svg']
</script>

<style>
 /* footer {
        background-color: #666;
        padding: 2rem;
    } */
  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 2.25rem;
    left: 0;
    bottom: 0;
    background: #465d72;
    z-index: 2;
  }
  .Logotipos {
    margin: 0 1rem;
    height: 25px;
    width: auto;
  }

  
</style>

<footer>
{#each Logotipos as logo}
  <img class="Logotipos" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>