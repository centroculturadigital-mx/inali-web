<script>

</script>

<style>
  * {
    /* flex-shrink: 1;
        padding: 1.5rem; */
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  nav {
    flex-grow: 1;
  }
  .Navegacion {
    width: 50%;
  }
  .Navegacion ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .Navegacion ul li {
    padding: 0 1rem;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 48px;
  }
  .Navegacion ul li a {
    font-size: 0.9rem;
  }
  a {
    text-decoration-style: none;
    color: #fff;
  }
  a:hover {
    text-decoration-style: none;
    color: #FBB634;
  }
</style>

<nav class="Navegacion">
  <ul>
    <li>
      <a href="#">ACERCA DE</a>
    </li>
    <li>
      <a href="#">GLOSARIO</a>
    </li>
    <li>
      <a href="#">MAPA INTERACTIVO</a>
    </li>
  </ul>
</nav>
