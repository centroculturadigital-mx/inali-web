<script>
  const IconoCierraGaleria = "icono.cierra.galeria.svg";
</script>

<style>
  .GaleriaMedia {
    position: fixed;
    padding-top: 3.25rem;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: transparent;
    width: 50%;
  }
  .GaleriaMediaContenedor {
    padding: 0rem 1rem 2rem;
    background-color: rgba(70, 93, 114, 0.9);
    height: 100%;
    width: 100%;
  }
    .Regresa {
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
    color: rgb(255, 255, 255);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 100%;
  }
  .Regresa img {
    height: 2rem;
    width: 2rem;
  }
  .Regresa img:hover {
    opacity: 0.85;
  }
</style>

<aside class="GaleriaMedia">

  <div class="GaleriaMediaContenedor">

    <div>
      <button class="Regresa">
        <img src={IconoCierraGaleria} alt="Cierra Galería INALI" />

      </button>
    </div>

    <slot />

  </div>
</aside>
