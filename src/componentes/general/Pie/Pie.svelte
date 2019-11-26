<script>
const Logotipos = ['logo.gobierno.svg','logo.cultura.svg','logo.inali.svg','logo.ccd.svg']
// const Logotipos = ['logoGobierno.svg','logoCultura.svg','logoInah.svg','logoImer.svg','logoInali.png','logoCcd.svg','logoFonoteca.svg', 'logoInpi.svg','logoCenidim.png','logoCulturaUnam.png','logoCid.svg','logoPacmyc.svg']

</script>

<style>
  footer {
    display: flex;
    justify-content: center;
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

@media  (max-width: 1024px) {
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    position: fixed;
    width: 100%;
    height: auto;
    bottom: 0;
    background: #465d72;
    z-index: 2;
  }
   .Logotipos {
    margin:0;
    height: 2rem;
    width: 5rem;
    justify-self: center;
  }
}
@media  (max-width: 420px) {
   .Logotipos {
    width: 4rem;
  }
}


  
</style>

<footer>
{#each Logotipos as logo}
  <img class="Logotipos" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>