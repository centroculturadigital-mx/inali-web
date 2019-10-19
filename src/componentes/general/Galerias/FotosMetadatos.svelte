<script>
  export let metadatos;
</script>

<style>
  * {
    line-height: 1rem;
  }
  span {
    font-size: 0.75rem;
  }
  .metaDatos-izquierda div,
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
  /* .metaDatos-derecha {
    padding: 2rem;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 3px;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    max-width: 20rem;
  } */
  .label {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
  }
  .dato {
    font-weight: lighter;
    letter-spacing: 1px;
  }
</style>

<article class="metaDatos-izquierda">
  <div>
    <span class="label">Grupo Etnico:</span>
    <span class="dato">{metadatos.grupoEtnico}</span>
  </div>
  <div>
    <span class="label">Nombre:</span>
    <span class="dato">{metadatos.nombreDelProducto}</span>
  </div>
  <div>
    <span class="label">Inventario:</span>
    <span class="dato">{metadatos.inventario}</span>
  </div>
  <div>
    <span class="label">Estado:</span>
    <span class="dato">{metadatos.estado}</span>
  </div>
  <div>
    <span class="label">Municipio:</span>
    <span class="dato">{metadatos.municipio}</span>
  </div>
  <div>
    <span class="label">localidad:</span>
    <span class="dato">{metadatos.localidad}</span>
  </div>
  <div>
    <span class="label">Autoría:</span>
    <span class="dato">{metadatos.autoria}</span>
  </div>
  <div>
    <span class="label">Credito/colección:</span>
    <span class="dato">{metadatos.creditosColeccion}</span>
  </div>
</article>

<!--  -->
<!-- 
<article class="metaDatos-derecha">
  <div>
    <span class="label">Material y Composición:</span>
    <span class="dato">{metadatos.materialesYComposicion}</span>
  </div>
  <div>
    <span class="label">Tintura:</span>
    <span class="dato">{metadatos.tintura}</span>
  </div>
  <div>
    <span class="label">Técnica:</span>
    <span class="dato">{metadatos.tecnica}</span>
  </div>
  <div>
    <span class="label">Descripción:</span>
    <span class="dato descripcion">{metadatos.textoDeDescripcion}</span>
  </div>
  <div>
    <span class="label">Riesgo de desaparición:</span>
    <span class="dato">{metadatos.informacionSobreRiesgoDeDesaparicion}</span>
  </div>
</article> -->
