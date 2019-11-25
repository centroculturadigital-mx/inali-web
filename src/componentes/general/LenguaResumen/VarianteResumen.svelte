<script>
  import extractoTexto from "./extractos.js";

  export let lengua;
  export let color;
  export let riesgo;
  export let movil;
  let breakpoint = 660;

  const RiesgoIcono = `<svg width="16" height="15" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.2666 0C5.52183 0 0.0666504 5.36575 0.0666504 12C0.0666504 18.6216 5.52183 24 12.2666 24C19.0115 24 24.4667 18.6342 24.4667 12C24.4538 5.36575 18.9986 0 12.2666 0ZM13.7497 20.1818C13.4015 20.5243 12.9115 20.7019 12.2796 20.7019C11.6347 20.7019 11.1318 20.537 10.7836 20.1945C10.4354 19.8647 10.2548 19.3827 10.2548 18.7738C10.2548 18.1395 10.4225 17.6575 10.7707 17.3404C11.1189 17.0106 11.6218 16.8583 12.2796 16.8583C12.9115 16.8583 13.4144 17.0233 13.7626 17.3531C14.1108 17.6829 14.2914 18.1649 14.2914 18.7738C14.2785 19.37 14.0979 19.8393 13.7497 20.1818ZM13.7626 14.9049H10.7965L9.76475 5.80972C9.68737 4.74419 10.8352 3.85624 12.2796 3.85624C13.7239 3.85624 14.8717 4.74419 14.7943 5.80972L13.7626 14.9049Z"/></svg>`;
  const IconoFamilia = `<svg width="16" height="15" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.77275C0 4.64308 0.915781 3.72729 2.04545 3.72729C3.17513 3.72729 4.09091 4.64308 4.09091 5.77275V8.42949C4.09091 8.46844 4.05933 8.50002 4.02038 8.50002H0.0705328C0.0315786 8.50002 0 8.46844 0 8.42949V5.77275Z" /><circle cx="2.04546" cy="2.36364" r="1.36364" /><path d="M7.36365 5.77275C7.36365 4.64308 8.27943 3.72729 9.4091 3.72729C10.5388 3.72729 11.4546 4.64308 11.4546 5.77275V8.42949C11.4546 8.46844 11.423 8.50002 11.384 8.50002H7.43418C7.39523 8.50002 7.36365 8.46844 7.36365 8.42949V5.77275Z" /><circle cx="9.40911" cy="2.36364" r="1.36364" /><path d="M3.27274 6.72725C3.27274 5.37164 4.37167 4.27271 5.72728 4.27271C7.08289 4.27271 8.18183 5.37164 8.18183 6.72725V9.91534C8.18183 9.96208 8.14393 9.99998 8.09719 9.99998H3.35738C3.31063 9.99998 3.27274 9.96208 3.27274 9.91534V6.72725Z" stroke="white"/><circle cx="5.72728" cy="2.63636" r="1.63636" stroke="white"/></svg>`;
  const IconoAgrupacion = `<svg width="16" height="14" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg"><path d="M10.3122 0.491C10.299 0.491 8.32411 0.793814 7.25768 0.701653C6.59938 0.662156 6.02009 0.517331 5.46712 0.385673C5.37496 0.359341 5.29596 0.346175 5.21697 0.319843H5.19064C4.03204 0.0301947 3.0446 -0.206791 1.84651 0.280346C1.10922 0.596327 0.529925 1.17562 0.227111 1.89975C-0.0757037 2.62387 -0.0757037 3.44015 0.227111 4.16427C0.701082 5.3097 1.82018 5.99433 2.97877 5.99433C3.36058 5.99433 3.75556 5.91533 4.1242 5.75734C4.86149 5.45453 5.38812 4.92789 5.62511 4.29593C5.67777 4.15111 5.71727 3.99312 5.73044 3.84829C5.7436 3.71663 5.73044 3.57181 5.7041 3.44015C5.66461 3.25583 5.62511 3.07151 5.54611 2.88719C5.42762 2.51854 5.16431 2.22889 4.84832 2.04457C4.69033 1.96558 4.50601 1.91291 4.33486 1.88658C4.15054 1.87341 3.97938 1.89975 3.80822 1.95241C3.46591 2.0709 3.17626 2.29472 2.91294 2.55804L2.68913 2.38688C2.83395 2.22889 2.99194 2.09723 3.1631 1.97874C3.33425 1.87341 3.53174 1.78125 3.72923 1.72859C3.92671 1.67593 4.15053 1.66276 4.34802 1.68909C4.55868 1.72859 4.84832 1.82075 5.08531 1.96558C5.34863 2.13673 5.62511 2.51854 5.7436 2.86085C5.76993 2.95301 5.79627 3.05834 5.8226 3.16367C6.20441 3.16367 6.98119 3.08467 8.17929 2.51854C9.14039 2.05774 10.4438 0.793814 10.457 0.780648L10.8388 0.412005L10.3122 0.491Z" /><path d="M1.9385 8.50903C1.95167 8.50903 3.92654 8.20621 4.99298 8.29837C5.65127 8.33787 6.23057 8.4827 6.78353 8.61435C6.87569 8.64069 6.95469 8.65385 7.03368 8.68018H7.06002C8.21861 8.96983 9.20605 9.20682 10.4041 8.71968C11.1414 8.41687 11.7207 7.83757 12.0235 7.11345C12.3264 6.38933 12.3264 5.57305 12.0235 4.84893C11.5496 3.71667 10.4436 3.01888 9.27188 3.03204C8.89007 3.03204 8.49509 3.11104 8.12645 3.26903C7.38916 3.57184 6.86253 4.09848 6.62554 4.73044C6.57288 4.87526 6.53338 5.03325 6.52022 5.17807C6.50705 5.30973 6.52022 5.45456 6.54655 5.58621C6.58605 5.77054 6.62554 5.95486 6.70454 6.13918C6.82303 6.50782 7.08635 6.79747 7.40233 6.98179C7.56032 7.06079 7.74464 7.11345 7.9158 7.13978C8.10012 7.15295 8.27127 7.12662 8.44243 7.07395C8.78474 6.95546 9.07439 6.73164 9.33771 6.46832L9.56153 6.63948C9.4167 6.79747 9.25871 6.92913 9.08756 7.04762C8.9164 7.15295 8.71891 7.24511 8.52143 7.29777C8.32394 7.35044 8.10012 7.3636 7.90263 7.33727C7.69198 7.29777 7.40233 7.20561 7.16534 7.06079C6.90203 6.88963 6.62554 6.50782 6.50705 6.16551C6.48072 6.07335 6.45439 5.96802 6.42805 5.8627C6.04625 5.8627 5.26946 5.94169 4.07137 6.50782C3.11026 6.96863 1.80684 8.23255 1.79368 8.24571L1.41187 8.61435L1.9385 8.50903Z" /></svg>`;
  const IconoVariantes = `<svg width="16" height="15" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.2C0 0.537258 0.537258 0 1.2 0H8.7C9.36274 0 9.9 0.537258 9.9 1.2V6.51429C9.9 7.17703 9.36274 7.71429 8.7 7.71429H2.11973C2.08233 7.71429 2.04567 7.72478 2.01393 7.74456L0 9V1.2Z" /><circle cx="2" cy="4" r="1" /><circle cx="5" cy="4" r="1" /><circle cx="8" cy="4" r="1" /></svg>`;
</script>

<style>
  .NombreFamilia {
    color: rgba(61, 61, 61, 1);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 200;
    margin-bottom: 0rem;
    margin-top: 0rem;
    font-size: 1rem;
  }
  .TituloTarjetaResumen {
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .SubTituloTarjetaResumen {
    text-align: center;
    font-weight: 400;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .InformacionRelevante {
    margin-bottom: 0.5rem;
  }

  .InformacionRelevante .Nombres {
    margin: 0.5rem 0;
    text-align: center;
  }
  .InformacionRelevante .Nombres * {
    font-size: 0.85rem;
    margin: 0;
    margin-bottom: 0.25rem;
  }
  .InformacionRelevante .Nombres *:last-child {
    margin-bottom: 0;
  }

  .RiesgoDesaparicion {
    display: flex;
    color: rgb(219, 4, 4);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0.25rem 0 0 0;
  }
  .RiesgoDesaparicion span {
    margin: 0.1rem 0.5rem 0 0;
  }
  .Informacion {
    margin: 0;
    padding-bottom: 1rem;
    font-size: 0.85rem;
  }
  .FamiliaPertenece {
    color: rgba(61, 61, 61, 1);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0.25rem 0 0 0;
  }
  .FamiliaPertenece span {
    margin: 0.1rem 0.25rem 0 0;
  }
  .RiesgoAlto {
    fill: red;
    color: red;
  }
  .RiesgoBajo {
    fill: green;
    color: green;
  }
  @media (max-width: 660px) {
    .RiesgoDesaparicion {
      justify-content: center;
    }
  }
</style>

{#if movil > breakpoint}
  <p class="NombreFamilia">Variante</p>
  <h2 class="TituloTarjetaResumen">
    {lengua.nombreOriginario || lengua.nombre || lengua.nombreCastellanizado}
  </h2>
  {#if lengua.nombreOriginario}
    <h4 class="SubTituloTarjetaResumen">{lengua.nombreCastellanizado}</h4>
    <!-- content here -->
  {/if}
{/if}

<section class="InformacionRelevante">
  <div class="Nombres">
    {#if lengua.otrosNombres}
      <p>{lengua.otrosNombres}</p>
    {/if}
    {#if lengua.transcripcionFonetica}
      <p>{lengua.transcripcionFonetica}</p>
    {/if}
  </div>
  <p class="RiesgoDesaparicion {riesgo >= 0.5 ? 'RiesgoAlto' : 'RiesgoBajo'}">
    <span>
      {@html RiesgoIcono}
    </span>
    {riesgo >= 0.5 ? 'Alto' : 'Bajo'} riesgo de desaparición
  </p>
  <p class="FamiliaPertenece">
    <span style={`fill:#${color}`}>
      {@html IconoFamilia}
    </span>
    {#if !!lengua.agrupacionId}Agrupación: {lengua.agrupacionId}{/if}
  </p>
  <p class="FamiliaPertenece">
    <span style={`fill:#${color}`}>
      {@html IconoVariantes}
    </span>
    {#if !!lengua.familiaId}Familia {lengua.familiaId}{/if}
  </p>

</section>
