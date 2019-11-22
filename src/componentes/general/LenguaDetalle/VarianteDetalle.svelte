<script>
  
  import { onMount, createEventDispatcher } from "svelte";

//   const dispatch = createEventDispatcher();


  import AudiosContenedor from "../Galerias/AudiosContenedor.svelte";
  import Fotos from "../Galerias/Fotos.svelte";
  import Textiles from "../Galerias/Textiles.svelte";



  export let lengua;

  const cerrar = event => {
    // dispatch("cerrar");
  };


  // <!--funcion: conseguirDatoDeAncestro() -->



  const cerrarGaleria = event => {
    ventanaGaleria = event.detail.cierra;
  };

  $: console.log("lenguaDetalle", lengua);

  const abreGaleria = e => {
    if (e.target.classList.contains("Audio")) {
      ventanaGaleria = "audios";
    } else if (e.target.classList.contains("Foto")) {
      ventanaGaleria = "fotos";
    } else if (e.target.classList.contains("Textil")) {
      ventanaGaleria = "textiles";
    }
  };

  const contenidoFake = {
    descripcion:
      "También llamada algonquina o algonquina-ritwan. \n\nEl nombre de la familia lingüística álgica proviene de la contracción del nombre de una de las dos subfamilias que la integran, la algonquina (alg-), y la adhesión a ésta de una partícula (-ic) que señala pertenencia a algo. Cabe mencionar que, dentro de esta familia, las lenguas algonquinas han tenido, en términos de cobertura geográfica, diversidad interna y número de hablantes, mucha relevancia. \n\nLas lenguas de esta familia se hablan en gran parte de Canadá y en el extremo norte de los Estados Unidos de América, teniendo una concentración muy significativa en la región de los Grandes Lagos. El Kickapoo, que pertenece a la subfamilia algonquina, es el único idioma de esta familia que se habla en México. La llegada de los kickapoo a territorio nacional se dio en el siglo XIX cuando, después de una invasión de los anglosajones a su territorio, le pidieron al gobierno mexicano un espacio para vivir y éste, a cambio, les solicitó que defendieran a los pobladores mexicanos de los ataques de los comanches, muy frecuentes en aquel tiempo. Desde ese momento, los kickapoo son considerados un grupo binacional. En los Estados Unidos de América a los kickapoo de México ."
  };

  
  const RiesgoIcono = `<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.2666 0C5.52183 0 0.0666504 5.36575 0.0666504 12C0.0666504 18.6216 5.52183 24 12.2666 24C19.0115 24 24.4667 18.6342 24.4667 12C24.4538 5.36575 18.9986 0 12.2666 0ZM13.7497 20.1818C13.4015 20.5243 12.9115 20.7019 12.2796 20.7019C11.6347 20.7019 11.1318 20.537 10.7836 20.1945C10.4354 19.8647 10.2548 19.3827 10.2548 18.7738C10.2548 18.1395 10.4225 17.6575 10.7707 17.3404C11.1189 17.0106 11.6218 16.8583 12.2796 16.8583C12.9115 16.8583 13.4144 17.0233 13.7626 17.3531C14.1108 17.6829 14.2914 18.1649 14.2914 18.7738C14.2785 19.37 14.0979 19.8393 13.7497 20.1818ZM13.7626 14.9049H10.7965L9.76475 5.80972C9.68737 4.74419 10.8352 3.85624 12.2796 3.85624C13.7239 3.85624 14.8717 4.74419 14.7943 5.80972L13.7626 14.9049Z"/></svg>`;

  

  const IconoTextiles = "icono.textiles.svg";
  const IconoFotos = "icono.fotos.svg";
  const IconoAudios = "icono.audios.svg";

  

</script>

<style>
.DetalleContenedor {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    padding-top: 3.25rem;
    padding-bottom: 2.25rem;
    width: 50%;
    height: 100%;
  }
  .DetallePleca {
    background-color: #fbb634;
    height: 100%;
    width: 1rem;
  }
  .DetalleContenidos {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header {
    height: auto;
    width: 100%;
    padding-left: 1rem;
  }
  .DetalleContenidosNavegacion {
    font-weight: lighter;
    font-size: 0.75rem;
    margin-top: 0;
    position: relative;
    width: 100%;
  }
  .DetalleContenidosNavegacion span {
    cursor: pointer;
  }
  .DetalleContenidosNavegacion a {
    font-weight: 400;
    font-size: 0.75rem;
    background-color: lightgray;
    border-radius: 50px;
    padding: 0.25rem 0.5rem;
  }
  #DetalleCerrar {
    font-size: 1rem;
    color: #000;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
  }
  #DetalleCerrar:hover {
    color: rgba(255, 97, 97, 0.8);
  }
  .DetalleTituloTop {
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-top: 1.5rem;
  }
  .DetalleTitulo {
    font-weight: Bold;
    /* color: #fbb634; */
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .DetalleTituloCastellano {
    font-weight: lighter;
    /* color: #fcc745; */
    font-size: 2.5rem;
    /* letter-spacing: 0.25rem; */
  }
  .Nombre {
    font-weight: Bold;
    /* color: #fbb634; */
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .NombreCastellano {
    font-weight: lighter;
    /* color: #fcc745; */
    font-size: 2.5rem;
    /* letter-spacing: 0.25rem; */
  }
  .DetalleNumeroHablantes {
    padding: 0.75rem;
    display: inline-block;
    background-color: rgba(230, 170, 48, 0.1);
    height: auto;
    width: auto;
  }
  .DetalleNumeroHablantes p {
    font-weight: lighter;
    margin: 0;
  }
  .DetalleOrigen {
    display: flex;
    justify-content: space-evenly;
    height: 4.25rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  .DetalleOrigenRiesgo {
    background-color: rgba(255, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
  }
  .DetalleOrigenFamilia {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
  }
  .DetalleOrigenVariantes {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 33%; */
    border-left: 1px solid #000;
  }
  .DetalleOrigenIcono {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f4d13b;
  }
  .RiesgoAlto {
    fill: red;
    color: red;
  }
  .RiesgoBajo {
    fill: green;
    color: green;
  }
  .DetalleOrigenTexto {
    color: #3d3d3d;
    margin: 0;
    height: auto;
    width: 70%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .DetalleOrigenTexto div {
    height: auto !important;
  }
  .DetalleOrigenTexto p {
    margin: 0;
    font-size: 0.75rem;
    height: auto;
  }
  .DetalleOrigenTexto small {
    margin: 0;
    font-size: 0.65rem;
  }
  .DatosEstadisticos {
    height: 22rem;
    width: 100%;
    border: 1px solid #000;
  }
  .ReferenciasFeograficas {
    min-height: 10rem;
  }
  .DetalleLista li {
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  .DetalleLista li:hover {
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  }
  .DetalleLista li h4 {
    margin: 0;
    font-size: 1.25rem;
  }
  .DetalleLista li i {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: #b8d3d1;
  }
  .DetalleFamiliaAgrupacion {
    text-align: center;
    width: 85%; 
  }
  .DetalleFamiliaAgrupacion h3 {
    margin: 2rem;
  }
  .DetalleAgrupacionVariantes {
    text-align: center;
    width: 85%;
  }
  .DetalleBotonesGaleria {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
    color: #fff;
    width: 100%;
  }
  .BotonGaleria {
    background-color: rgba(70, 93, 114, 0.8);
    border-radius: 10px;
    border: none;
    padding: 1.5rem;
    width: 8rem;
    cursor: pointer;
  }
  .BotonGaleria:hover {
    background-color:rgb(70, 93, 114);
  }

  .BotonGaleria > * {
    pointer-events: none;
  }
  .IconoBotonGaleria {
    display: flex;
    justify-content: center;
    min-height: 3rem;
  }
  .TextoBotonGaleria {
    text-align: center;
    color: #fff;
  }
  .DetalleTextoDescripcion {
    padding: 0 1rem;
  }
</style>

<header>


    <nav class="DetalleContenidosNavegacion">
        <span on:click>mapa ></span>
        <a href="../">
        {lengua.nombre}
        </a>
        <button id="DetalleCerrar" on:click>
        <i class="fa fa-close" />
        </button>
    </nav>


    <!-- titulo Raiz -->
    <h3 class="DetalleTituloTop">
        Variante
    </h3>
    

    <!-- Titulo -->
    <h1 class="Nombre" style={`color: #${lengua.color}`}>
        { lengua.nombre }
    </h1>


    <!-- 
    <h1 class="NombreCastellano" style={`color: #${lengua.color}`}>
        {lengua.nombreCastellanizado}
    </h1>
    -->


    <!-- riesgo variante  -->
    <div class="DetalleOrigen">
        <div class="DetalleOrigenRiesgo">
        <div
            class="DetalleOrigenIcono {lengua.riesgo >= 0.5 ? 'RiesgoAlto' : 'RiesgoBajo'}">
            {@html RiesgoIcono}
        </div>
        <div class="DetalleOrigenTexto">
            <div>
            <p>{lengua.riesgo >= 0.5 ? 'Alto' : 'Bajo'} riesgo de desaparición</p>
            <!-- <small>
                <b>25,620 hablantes</b>
            </small> -->
            </div>
        </div>
        </div>
        <div class="DetalleOrigenFamilia">
        <div class="DetalleOrigenIcono">
            <i class="fa fa-object-ungroup" />
        </div>
        <div class="DetalleOrigenTexto">
            {#if !!lengua.agrupacionId}
            <p>Agrupación {lengua.agrupacionId}</p>
            {/if}
        </div>
        </div>
        <div class="DetalleOrigenVariantes">
        <div class="DetalleOrigenIcono">
            <i class="fa fa-group" />
        </div>
        <div class="DetalleOrigenTexto">
            {#if !!lengua.familiaId}
            <p>Familia {lengua.familiaId}</p>
            {/if}
        </div>
        </div>
    </div>
    


</header>

