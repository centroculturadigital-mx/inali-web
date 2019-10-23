<script>
const Logotipos = ['logoGobierno.svg','logoCultura.svg','logoInah.svg','logoImer.svg','logoInali.png','logoCcd.svg','logoFonoteca.svg', 'logoCenidim.png','logoCulturaUnam.png','logoCid.svg','logoPacmyc.svg']
</script>

<style>
 /* footer {
        background-color: #666;
        padding: 2rem;
    } */
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

@media  (max-width: 575.98px) {

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 2.25rem;
    left: 0;
    bottom: 0;
    background:red;
    z-index: 2;
  }
}

@media (min-width: 576px) and (max-width: 768px)  {

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 2.25rem;
    left: 0;
    bottom: 0;
    background-color:blue;
    z-index: 2;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 2.25rem;
    left: 0;
    bottom: 0;
    background-color: #000;
    z-index: 2;
  }
}
  
</style>

<footer>
{#each Logotipos as logo}
  <img class="Logotipos" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>