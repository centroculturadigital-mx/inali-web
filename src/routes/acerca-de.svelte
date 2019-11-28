<script>
  import Lateral from "../componentes/general/Lateral/Lateral.svelte";
  import ContentBlocks from "../componentes/general/ContentBlocks/ContentBlocks.svelte";
  let Mapbox = "logoMapBox.svg";

  let blocks = [
    {
      type: "p",
      data: {
        text:
          "El Mapa Interactivo de Lenguas Indígenas de México es una colaboración entre el Centro de Cultura Digital y el Instituto Nacional de Lenguas Indígenas."
      }
    },
    {
      type: "p",
      data: {
        text:
          "Su creación responde a la realidad: México es un país multilingüe y multinacional, dentro del que se hablan 11 familias lingüísticas indoamericanas, de las que se despliegan 68 agrupaciones lingüísticas, conformadas por 364 variantes."
      }
    },
    {
      type: "h5",
      data: {
        text: "Información general:"
      }
    },
    {
      type: "p",
      data: {
        text:
          "El Mapa Interactivo de Lenguas Indígenas es un acercamiento a la diversidad lingüística del territorio mexicano, con énfasis en las 31 agrupaciones que se encuentran en alto riesgo de desaparición. "
      }
    },
    {
      type: "p",
      data: {
        text:
          "Los datos de cada lengua se complementan con información lingüística como el nombre de autodenominación,; así como el nombre castellanizado, que es aquel que proviene del español u otra lengua indígena; las categorías morfológicas y fonéticas; normas de escritura, variantes lingüísticas, recopilaciones de conversaciones en contexto natural y la música usada en las fiestas rituales de sus comunidades."
      }
    },
    {
      type: "p",
      data: {
        text:
          "El Mapa se albergará en un sitio web.. Además, se desarrollará una versión touch multiusuario que, en conjunto con la versión web, se presentará en el Pabellón de Lenguas Indígenas de la Secretaría de Cultura, en la Feria del Libro de Oaxaca, del 19 al 27 de octubre, y la Feria Internacional del Libro de Guadalajara, del 30 de noviembre al 8 de diciembre del presente año. "
      }
    },
    {
      type: "h5",
      data: {
        text: "Información técnica:"
      }
    },
    {
      type: "p",
      data: {
        text:
          "El proyecto es desarrollado bajo una filosofía de uso de herramientas de código abierto, así como con sistemas de diseño versionables. No existe una versión final del Mapa, sino entregables y con mejoras de contenido en distintas etapas y procesos."
      }
    },
    {
      type: "p",
      data: {
        text:
          "Uno de los objetivos del mapa es contar con versiones de interfaz y contenido traducidos a, cuando menos, una variante de cada una de las 68 agrupaciones lingüísticas. A largo plazo el objetivo es que, dentro del mismo sitio web, los usuarios puedan colaborar con traducciones, las cuales se enviarían en un formulario y pasarían por un proceso de validación hasta integrarse."
      }
    },
    {
      type: "img",
      data: {
        src: `${Mapbox}`,
        alt: "Mapbox"
      }
    }
  ];

  let iconoCierra = "cerrar.ventana.svg";
</script>

<style>
  .titulo {
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 200;
    padding-top: 2rem;
    /* font-size: 1rem; */
  }

  .Informacion {
    padding: 1rem;
    padding-bottom: 4rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 100;
    display: grid;
    margin-bottom: 2rem;
  }

  .Informacion img {
    width: 80px;
  }

  .Cerrar {
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 0rem;
    top: 1rem;
  }
  .Cerrar a {
    position: fixed;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
  }
  .Cerrar img {
    width: 1.75rem;
    filter: invert();
  }
  .Cerrar small {
    padding-right: 0.25rem;
  }
  .Cerrar a img:hover {
    opacity: 0.55;
  }
  @media (max-width: 660px) {
    .Cerrar {
      right: 0rem;
      top: 0.5rem;
    }
  }
</style>

<svelte:head>
  <title>Acerca de</title>
</svelte:head>

<Lateral backgroundColor="rgba(70,93,114,0.95)">
  <span class="Cerrar">
    <a href="/">
      <small>Cerrar</small>
      <img src={iconoCierra} alt="Cerrar" />
    </a>
  </span>
  <h3 class="titulo">Acerca de</h3>

  <section class="Informacion">

    <ContentBlocks {blocks} />

  </section>
</Lateral>
