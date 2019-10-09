<script>
const Logotipos = ['logo-cultura.svg','logo.inah.svg','logo-fonoteca.svg','logo.ccd.svg','logo-inali.svg','logo-imer.svg']
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
    height: 37px;
    left: 0;
    bottom: 0;
    background: #465d72;
  }
  .Logotipos {
    margin: 0 1rem;
    height: 25px;
    width: auto;
  }

  
</style>

<footer>
{#each Logotipos as  logo}
  <img class="Logotipos" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>