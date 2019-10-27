<script>
  import Lateral from "../componentes/general/Lateral/Lateral.svelte";
  import ContentBlocks from "../componentes/general/ContentBlocks/ContentBlocks.svelte";
  

let glosario = [
    {
        "type": "dl",
        "data": {
            "items": [
				{
					"dt": "Familia lingüística",
					"dd": "Conjunto de lenguas cuyas semejanzas en sus estructuras lingüísticas (fonológicas, morfosintácticas y léxicas) obedecen a un origen histórico común.  En México se hablan lenguas pertenecientes a 11 familias lingüísticas indoamericanas, las cuales son: I. Álgica II. Yuto-nahua III.Cochimí-yumana IV.Seri V. Oto-mangue VI. Maya VII. Totonaco-tepehua VIII. Purépecha IX.Mixe-zoque X. Chontal e Oaxaca XI. Huave"
				},
				{
					"dt": "Agrupación lingüística",
					"dd": "Conjunto de variantes lingüísticas comprendidas bajo el nombre dado tradicionalmente a un pueblo indígena. En México existen 68 agrupaciones lingüísticas a las cuales les corresponden, una o más variantes lingüísticas. "
        },
        {
					"dt": "Variante lingüística",
					"dd": "Forma de habla que presenta diferencias internas con otras variantes de la misma agrupación. Estas diferencias varían, según cada caso, a  nivel de los sonidos, de palabras, de su significado o del uso que se les da. Para algunas agrupaciones, las diferencias entre una variante y otra implican, además de cambios en su estructura lingüística, diferencias de tipo sociocultural, condicionadas a su territorio y vida política. Las variantes lingüísticas son lenguas y deben ser tratadas como tal."
        },
        {
					"dt": "Autodenominación",
					"dd": "Nombre con el cual los hablantes de las lenguas indígenas se refieren a ellas en sus propias variantes lingüísticas. Aparece en primer lugar y como dato adicional, se incluye su transcripción fonética y el nombre castellanizado con el que se le conoce a dicha lengua."
        },
        {
					"dt": "Esquema arbóreo",
					"dd": "Representa las relaciones genealógicas de las lenguas y el total de sus elementos, con las subdivisiones correspondientes. En los casos en que así aplique, los elementos de la primera subdivisión de una familia serán llamados subfamilias y todas las subdivisiones subsecuentes serán llamadas subgrupos, para terminar en cada caso en el nivel de las agrupaciones lingüísticas; en el esquema arbóreo, tanto las subfamilias como los subgrupos y las agrupaciones se consignan con su respectivo nombre. "
        },
        {
					"dt": "Referencia geoestadística",
					"dd": "Localidades, municipios y entidades federativas en donde se hablan las distintas variantes lingüísticas."
        },
        {
					"dt": "Norma de escritura",
					"dd": "Alfabeto unificado y conjunto de reglas para consolidar la práctica escrita de las diversas variantes de una lengua. Es el resultado de un proceso participativo con agentes educativos, traductores, creadores, escritores, autoridades comunitarias, entre otros usuarios de la lengua escrita, acompañado con la asesoría institucional y académica para consensar la representación gráfica de una lengua."
        }
			]
        }
    }
]


</script>

<style>
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
    padding-top: 2rem;
    /* font-size: 1rem; */
  }
  .tituloDefiniciones {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 1rem;
  }
  .tituloConcepto {
    padding: 1rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 1rem;
  }
  .Informacion {
    padding: 1rem;
    padding-bottom: 4rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    overflow-y: auto;
  }
  .tituloDefiniciones {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 1rem;
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
  }

  .Informacion dt {
    padding: 0rem 0rem 1.5rem 0rem;
  }

  .Informacion dd {
    padding: 0rem 0rem 1.5rem 0rem;
  }

  .Cerrar {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 2rem;
    top: 1.25rem;
  }

  .Cerrar a {
    color: rgba(255, 255, 255, 1);
  }
  .Cerrar a:hover {
    color: tomato;
  }
</style>

<svelte:head>
  <title>Glosario INALI</title>
</svelte:head>

<Lateral backgroundColor="rgba(70,93,114,0.95)">
  <span class="Cerrar">
    <a href="/">
      <i class="fa fa-close" />
    </a>
  </span>
  <h3 class="titulo">Glosario</h3>

  <dl>
    <dt class="tituloConcepto">Concepto</dt>
    <dd class="tituloDefiniciones">
      <p>Definición</p>
    </dd>
  </dl>
  <section class="Informacion">
  
    <ContentBlocks blocks={glosario} />

  </section>

</Lateral>
