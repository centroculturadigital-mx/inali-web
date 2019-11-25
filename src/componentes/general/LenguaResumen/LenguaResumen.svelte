<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, slide } from "svelte/transition";

  import FamiliaResumen from "./FamiliaResumen.svelte";
  import AgrupacionResumen from "./AgrupacionResumen.svelte";
  import VarianteResumen from "./VarianteResumen.svelte";

  import Audios from "../Galerias/Audios.svelte";
  import Fotos from "../Galerias/Fotos.svelte";
  import Textiles from "../Galerias/Textiles.svelte";

  export let lengua;
  export let muestraMapa;

  $: console.log("lengua", lengua);

  let iconoCierra = "icono.cierra.circulo.svg";
  let iconoMinimiza = "minimiza.circulo.svg";
  let iconoMaximiza = "icono.maximiza.svg";
  let iconoAudios = "boton.play.solid.svg";
  let iconoTextiles = "boton.textiles.solid.svg";
  let iconoFotos = "boton.fotos.solid.svg";

  const dispatch = createEventDispatcher();

  const cerrar = event => {
    dispatch("cerrar");
  };
  const verMas = event => {
    dispatch("vermas");
  };

  $: color = !!lengua ? lengua.color : "aaa";

  const RiesgoIcono = `<svg width="16" height="15" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.2666 0C5.52183 0 0.0666504 5.36575 0.0666504 12C0.0666504 18.6216 5.52183 24 12.2666 24C19.0115 24 24.4667 18.6342 24.4667 12C24.4538 5.36575 18.9986 0 12.2666 0ZM13.7497 20.1818C13.4015 20.5243 12.9115 20.7019 12.2796 20.7019C11.6347 20.7019 11.1318 20.537 10.7836 20.1945C10.4354 19.8647 10.2548 19.3827 10.2548 18.7738C10.2548 18.1395 10.4225 17.6575 10.7707 17.3404C11.1189 17.0106 11.6218 16.8583 12.2796 16.8583C12.9115 16.8583 13.4144 17.0233 13.7626 17.3531C14.1108 17.6829 14.2914 18.1649 14.2914 18.7738C14.2785 19.37 14.0979 19.8393 13.7497 20.1818ZM13.7626 14.9049H10.7965L9.76475 5.80972C9.68737 4.74419 10.8352 3.85624 12.2796 3.85624C13.7239 3.85624 14.8717 4.74419 14.7943 5.80972L13.7626 14.9049Z"/></svg>`;
  const IconoVariantes = `<svg width="16" height="15" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.2C0 0.537258 0.537258 0 1.2 0H8.7C9.36274 0 9.9 0.537258 9.9 1.2V6.51429C9.9 7.17703 9.36274 7.71429 8.7 7.71429H2.11973C2.08233 7.71429 2.04567 7.72478 2.01393 7.74456L0 9V1.2Z" /><circle cx="2" cy="4" r="1" /><circle cx="5" cy="4" r="1" /><circle cx="8" cy="4" r="1" /></svg>`;
  const IconoAgrupacion = `<svg width="16" height="14" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg"><path d="M10.3122 0.491C10.299 0.491 8.32411 0.793814 7.25768 0.701653C6.59938 0.662156 6.02009 0.517331 5.46712 0.385673C5.37496 0.359341 5.29596 0.346175 5.21697 0.319843H5.19064C4.03204 0.0301947 3.0446 -0.206791 1.84651 0.280346C1.10922 0.596327 0.529925 1.17562 0.227111 1.89975C-0.0757037 2.62387 -0.0757037 3.44015 0.227111 4.16427C0.701082 5.3097 1.82018 5.99433 2.97877 5.99433C3.36058 5.99433 3.75556 5.91533 4.1242 5.75734C4.86149 5.45453 5.38812 4.92789 5.62511 4.29593C5.67777 4.15111 5.71727 3.99312 5.73044 3.84829C5.7436 3.71663 5.73044 3.57181 5.7041 3.44015C5.66461 3.25583 5.62511 3.07151 5.54611 2.88719C5.42762 2.51854 5.16431 2.22889 4.84832 2.04457C4.69033 1.96558 4.50601 1.91291 4.33486 1.88658C4.15054 1.87341 3.97938 1.89975 3.80822 1.95241C3.46591 2.0709 3.17626 2.29472 2.91294 2.55804L2.68913 2.38688C2.83395 2.22889 2.99194 2.09723 3.1631 1.97874C3.33425 1.87341 3.53174 1.78125 3.72923 1.72859C3.92671 1.67593 4.15053 1.66276 4.34802 1.68909C4.55868 1.72859 4.84832 1.82075 5.08531 1.96558C5.34863 2.13673 5.62511 2.51854 5.7436 2.86085C5.76993 2.95301 5.79627 3.05834 5.8226 3.16367C6.20441 3.16367 6.98119 3.08467 8.17929 2.51854C9.14039 2.05774 10.4438 0.793814 10.457 0.780648L10.8388 0.412005L10.3122 0.491Z" /><path d="M1.9385 8.50903C1.95167 8.50903 3.92654 8.20621 4.99298 8.29837C5.65127 8.33787 6.23057 8.4827 6.78353 8.61435C6.87569 8.64069 6.95469 8.65385 7.03368 8.68018H7.06002C8.21861 8.96983 9.20605 9.20682 10.4041 8.71968C11.1414 8.41687 11.7207 7.83757 12.0235 7.11345C12.3264 6.38933 12.3264 5.57305 12.0235 4.84893C11.5496 3.71667 10.4436 3.01888 9.27188 3.03204C8.89007 3.03204 8.49509 3.11104 8.12645 3.26903C7.38916 3.57184 6.86253 4.09848 6.62554 4.73044C6.57288 4.87526 6.53338 5.03325 6.52022 5.17807C6.50705 5.30973 6.52022 5.45456 6.54655 5.58621C6.58605 5.77054 6.62554 5.95486 6.70454 6.13918C6.82303 6.50782 7.08635 6.79747 7.40233 6.98179C7.56032 7.06079 7.74464 7.11345 7.9158 7.13978C8.10012 7.15295 8.27127 7.12662 8.44243 7.07395C8.78474 6.95546 9.07439 6.73164 9.33771 6.46832L9.56153 6.63948C9.4167 6.79747 9.25871 6.92913 9.08756 7.04762C8.9164 7.15295 8.71891 7.24511 8.52143 7.29777C8.32394 7.35044 8.10012 7.3636 7.90263 7.33727C7.69198 7.29777 7.40233 7.20561 7.16534 7.06079C6.90203 6.88963 6.62554 6.50782 6.50705 6.16551C6.48072 6.07335 6.45439 5.96802 6.42805 5.8627C6.04625 5.8627 5.26946 5.94169 4.07137 6.50782C3.11026 6.96863 1.80684 8.23255 1.79368 8.24571L1.41187 8.61435L1.9385 8.50903Z" /></svg>`;
  const IconoFamilia = `<svg width="16" height="15" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.77275C0 4.64308 0.915781 3.72729 2.04545 3.72729C3.17513 3.72729 4.09091 4.64308 4.09091 5.77275V8.42949C4.09091 8.46844 4.05933 8.50002 4.02038 8.50002H0.0705328C0.0315786 8.50002 0 8.46844 0 8.42949V5.77275Z" /><circle cx="2.04546" cy="2.36364" r="1.36364" /><path d="M7.36365 5.77275C7.36365 4.64308 8.27943 3.72729 9.4091 3.72729C10.5388 3.72729 11.4546 4.64308 11.4546 5.77275V8.42949C11.4546 8.46844 11.423 8.50002 11.384 8.50002H7.43418C7.39523 8.50002 7.36365 8.46844 7.36365 8.42949V5.77275Z" /><circle cx="9.40911" cy="2.36364" r="1.36364" /><path d="M3.27274 6.72725C3.27274 5.37164 4.37167 4.27271 5.72728 4.27271C7.08289 4.27271 8.18183 5.37164 8.18183 6.72725V9.91534C8.18183 9.96208 8.14393 9.99998 8.09719 9.99998H3.35738C3.31063 9.99998 3.27274 9.96208 3.27274 9.91534V6.72725Z" stroke="white"/><circle cx="5.72728" cy="2.63636" r="1.63636" stroke="white"/></svg>`;
  // let riesgo = Math.random();

  let ventanaGaleria = null;

  const abreGaleria = tipo => {
    let array;

    switch (tipo) {
      case "audios":
        array = lengua.audios.length;
        break;
      case "fotos":
        array = lengua.fotografias.length;
        break;
      case "textiles":
        array = lengua.textiles.length;
        break;
      case null:
        array = null;
        break;
    }

    if (array > 0) {
      ventanaGaleria = tipo;
    }
    console.log("VENTANA: ", array);
  };

  const cerrarGaleria = event => {
    ventanaGaleria = null;
  };

  let minimizado = false;

  const minimiza = () => {
    minimizado == false ? (minimizado = true) : (minimizado = false);
  };

  let movil;
  let breakpoint = 660;
</script>

<style>
  .card {
    position: absolute;
    top: 4rem;
    left: 22rem;
    width: 18rem;
    /* min-height: 18rem; */
    background-color: rgba(236, 236, 236, 0.9);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  }
  .CardMinimizada {
    height: auto;
    background-color: transparent;
  }
  .ResumenInformacion {
    font-size: 1rem;
    height: auto;
    padding: 0rem 1rem 1rem 1.5rem;
    overflow-y: auto;
  }
  .ResumenInformacionAgrupacion {
    font-size: 1rem;
    /* height: 15rem; */
    overflow-y: auto;
  }
  .SaberMas {
    color: rgba(255, 255, 255, 1);
  }
  .SaberMas a {
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
  }
  .SubTitulo {
    padding: 0rem 0rem 0rem 1.5rem;
    font-weight: 400;
    /* color: #e6aa30; */
    margin-bottom: 0.25rem;
    color: #3d3d3d;
  }
  .Cerrar {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    height: auto;
  }
  .Cerrar span {
    padding-right: 0.5rem;
    display: flex;
  }
  .Cerrar a:hover {
    opacity: 0.85;
  }
  .Cerrar a {
    color: rgba(135, 135, 135, 1);
    display: flex;
  }
  .Cerrar img {
    width: 1rem;
  }
  .Cerrar span img:hover {
    cursor: pointer;
    opacity: 0.85;
  }
  .Cerrar p {
    width: 85%;
    color: #fff;
    text-align: left;
    margin: 0;
  }
  footer {
    transition: 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 3rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    /* position: absolute; */
    bottom: 0;
  }
  footer:hover {
    opacity: 0.85;
  }
  .RiesgoAlto {
    fill: red;
    color: red;
  }
  .RiesgoBajo {
    fill: green;
    color: green;
  }

  .BotonesMedia {
    display: block;
    /* position: absolute; */
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
  }
  .BotonesMedia ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    height: 100%;
    width: 100%;
    /* border-top: 1px solid #c5c5c5; */
  }
  .BotonesMedia ul li {
    transition: 0.35s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    border: 1px solid #c5c5c5;
    cursor: pointer;
  }
  .BotonesMedia ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .BotonesMedia ul li:nth-child(2) {
    border-left: 1px solid #c5c5c5;
    border-right: 1px solid #c5c5c5;
  }
  .BotonesMedia .BotonAudios img {
    width: 1.5rem;
    stroke: rgba(0, 0, 0, 0.75);
  }
  .BotonesMedia .BotonTextiles img {
    width: 1.25rem;
    stroke: rgba(0, 0, 0, 0.75);
  }
  .BotonesMedia .BotonFotos img {
    width: 1.75rem;
    stroke: rgba(0, 0, 0, 0.75);
  }
  .BotonesMedia div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
  }
  .BotonesMedia p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
    margin-top: 0.25rem;
  }
  .Contenido {
    /* height: calc(100% - 3rem); */
    position: relative;
  }
  .HeaderMinimizado {
    border-radius: 0.5rem;
  }
  @media (max-width: 660px) {
    .card {
      position: relative;
      background-color: transparent;
      top: 0;
      left: 0;
      border-radius: 0;
      width: 100%;
      box-shadow: none;
    }
    .HeaderMinimizado {
      border-radius: 0rem;
    }
    .Cerrar {
      padding-right: 0rem;
    }
    .Cerrar p {
      padding-right: 0rem;
      padding-left: 0.5rem;
      width: 100%;
    }
    .ResumenInformacion {
      text-align: center;
    }
    .RiesgoDesaparicion {
      justify-content: center;
    }
      footer {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

  }
  }
</style>

<svelte:window bind:innerWidth={movil} />

{#if lengua}
  <!-- Ventana minimizada -->
  {#if minimizado}
    <section
      class="CardMinimizada card"
      transition:slide={{ duration: 500 }}
      on:click={minimiza}>
      <header
        class="HeaderMinimizado"
        style="background-color: #{lengua.color}">
        <span class="Cerrar">
          {#if movil > breakpoint}
            <p>
              Resumen:
              <b>
                {#if !!lengua.NOM_FAM}
                  {lengua.NOM_FAM}
                {:else if !!lengua.NOM_AGRUP}
                  {lengua.NOM_AGRUP}
                {:else if !!lengua.NOM_VAR}Variante: {lengua.NOM_VAR}{/if}
              </b>
            </p>
          {:else}
            <p>
              Información sobre:
              <b>
                {#if !!lengua.NOM_FAM}
                  {lengua.NOM_FAM}
                {:else if !!lengua.NOM_AGRUP}
                  {lengua.NOM_AGRUP}
                {:else if !!lengua.NOM_VAR}{lengua.NOM_VAR}{/if}
              </b>
            </p>
          {/if}
          <!-- -->
          <span>
            <img src={iconoMaximiza} alt="Maximiza" />
          </span>
          {#if movil > breakpoint}
            <a href="/" on:click={cerrar}>
              <img src={iconoCierra} alt="Cierra" />
            </a>
          {/if}
        </span>
      </header>
    </section>
  {:else}
    <!-- Ventana Maximizada -->
    <section class="card" transition:slide={{ duration: 500 }}>
      <!--  -->
      <section class="Contenido">
        <header>
          <span class="Cerrar">
            <span on:click={minimiza}>
              <img src={iconoMinimiza} alt="Minimiza" />
            </span>
            {#if movil > breakpoint}
              <a href="/" on:click={cerrar}>
                <img src={iconoCierra} alt="Cierra" />
              </a>
            {/if}
          </span>
        </header>
        <section
          class="ResumenInformacion {lengua.NOM_AGRUP ? 'ResumenInformacionAgrupacion' : ''}">

          {#if !!lengua.NOM_FAM}
            <FamiliaResumen {lengua} color={lengua.color} {movil} />
          {/if}
          {#if !!lengua.NOM_AGRUP}
            <AgrupacionResumen {lengua} color={lengua.color} riesgo={lengua.riesgo} movil />
          {/if}
          {#if !!lengua.NOM_VAR}
            <VarianteResumen {lengua} color={lengua.color} riesgo={lengua.riesgo} movil />
          {/if}

        </section>
        <!-- Botones Media -->
        <section class="BotonesMedia">
          <ul>
            <li
              on:click={() => {
                abreGaleria('audios');
              }}>
              <span class="BotonAudios">
                <div>
                  <img src={iconoAudios} alt="Audio" />
                </div>
                <p>{lengua.audios.length ? lengua.audios.length : 0} Audios</p>
              </span>
            </li>
            <li
              on:click={() => {
                abreGaleria('textiles');
              }}>
              <span class="BotonTextiles">
                <div>
                  <img src={iconoTextiles} alt="Textiles" />
                </div>
                <p>
                  {lengua.textiles.length ? lengua.textiles.length : 0} Textiles
                </p>
              </span>
            </li>
            <li
              on:click={() => {
                abreGaleria('fotos');
              }}>
              <span class="BotonFotos">
                <div>
                  <img src={iconoFotos} alt="Fotos" />
                </div>
                <p>
                  {lengua.fotografias.length ? lengua.fotografias.length : 0}
                  Fotos
                </p>
              </span>
            </li>
            <!--  -->
            {#if movil < breakpoint}
              <!-- Cierra filtro -->
              <li on:click={muestraMapa} class="">
                <span class="BotonFotos">
                  <div>
                    <!-- <img src={iconoFotos} alt="Fotos" /> -->
                    ^
                  </div>
                  <p>
                    Ver Mapa
                  </p>
                </span>
              </li>
            {/if}

          </ul>
        </section>
        <!--  -->
      </section>

      <!-- {#if movil > breakpoint} -->
        <footer on:click={verMas} style={`background-color: #${color}`}>
          <div class="SaberMas">
            <a href="/">
              <span>Saber más</span>
            </a>
          </div>
        </footer>
      <!-- {/if} -->

    </section>
  {/if}
  <!-- fin contenido NO minimizado -->
{/if}

<!-- Galerias  -->
{#if ventanaGaleria === 'audios'}
  <Audios audios={lengua.audios} on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'fotos'}
  <Fotos imagenes={lengua.fotografias} on:click={cerrarGaleria} />
{:else if ventanaGaleria === 'textiles'}
  <Textiles imagenes={lengua.textiles} on:click={cerrarGaleria} />
{/if}
