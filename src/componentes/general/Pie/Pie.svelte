<script>
const Logotipos = ['gobierno.cultura.inah.svg','logo.imer.svg','logo.inali.svg','logo.ccd.svg','logo.fonoteca.svg', 'logo.cenidim.svg','logo.cid.svg','logo.chihuahua.svg','logo.pacmyc.svg']
// const Logotipos = ['logoGobierno.svg','logoCultura.svg','logoInah.svg','logoImer.svg','logoInali.png','logoCcd.svg','logoFonoteca.svg', 'logoInpi.svg','logoCenidim.png','logoCulturaUnam.png','logoCid.svg','logoPacmyc.svg']

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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
    height: auto;
    width: 40px;
    justify-self: center;
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
    background: #465d72;
    z-index: 2;
  }
   .Logotipos {
    margin: 0 0.5rem;
    height: auto;
    width: 40px;
    justify-self: center;
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
    background: #465d72;
    z-index: 2;
  }
   .Logotipos {
    margin: 0 0.05rem;
    height: auto;
    width: 50px;
    justify-self: center;
  }
}
  
</style>

<footer>
{#each Logotipos as logo}
  <img class="Logotipos" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>