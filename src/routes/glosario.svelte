<script>
  import Lateral from "../componentes/general/Lateral/Lateral.svelte";
</script>

<style>
  .ContenedorGlosario {
    background-color: rgba(70, 93, 114, 0.85);
    padding-bottom: 2.25rem;
  }
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .titulo {
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 200;
    font-size: 1rem;
  }
  .tituloDefiniciones {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 0 0 0;
  }
  .tituloConcepto {
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 1rem;
  }
  .Informacion {
    padding: 1rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    overflow-y: auto;

  }
  .Informacion dt {
    padding: 0rem 0rem 1.5rem 0rem;
  }
  .Informacion dd {
    padding: 0rem 0rem 1.5rem 0rem;
  }
</style>

<svelte:head>
  <title>Glosario INALI</title>
</svelte:head>

<Lateral>

  <div class="ContenedorGlosario">

  <div class="ScrollGlosario">

    <h3 class="titulo">Glosario</h3>

    <dl>
      <dt class="tituloConcepto">Concepto</dt>
      <dd class="tituloDefiniciones">
        <p>Definición</p>
      </dd>
    </dl>
    <section class="Informacion">
      <dl>
        <dt>Familia lingüística</dt>
        <dd>
          <p>
            Conjunto de lenguas cuyas semejanzas en sus estructuras lingüísticas
            (fonológicas, morfosintácticas y léxicas) obedecen a un origen
            histórico común. En México se hablan lenguas pertenecientes a 11
            familias lingüísticas indoamericanas, las cuales son: I. Álgica II.
            Yuto-nahua III.Cochimí-yumana IV.Seri V. Oto-mangue VI. Maya VII.
            Totonaco-tepehua VIII. Purépecha IX.Mixe-zoque X. Chontal e Oaxaca
            XI. Huave
          </p>
        </dd>
        <dt>Agrupación lingüística</dt>
        <dd>
          <p>
            Conjunto de variantes lingüísticas comprendidas bajo el nombre dado
            tradicionalmente a un pueblo indígena. En México existen 68
            agrupaciones lingüísticas a las cuales les corresponden, una o más
            variantes lingüísticas.
          </p>
        </dd>
        <dt>Autodenominación</dt>
        <dd>
          <p>
            Nombre con el cual los hablantes de las lenguas indígenas se
            refieren a ellas en sus propias variantes lingüísticas.
          </p>
        </dd>
        <dt>Nombre castellanizado</dt>
        <dd>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </dd>
        <dt>Transcripción fonética</dt>
        <dd>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </dd>

      </dl>
    </section>
  </div>
  </div>

</Lateral>
