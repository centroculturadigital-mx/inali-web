<script>
  // libs
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import bbox from "@turf/bbox";

  // componentes
  import LenguasFiltro from "../LenguasFiltro/LenguasFiltro.svelte";
  import LenguaDetalle from "../LenguaDetalle/LenguaDetalle.svelte";
  import LenguaResumen from "../LenguaResumen/LenguaResumen.svelte";
  import Herramientas from "../Herramientas/Herramientas.svelte";
  import Mapa from "../Mapa/Mapa.svelte";
  import MapaCapa from "../Mapa/MapaCapa.svelte";
  import MapaMarcador from "../Mapa/MapaMarcador.svelte";

  export let cierraVentanaFiltro;
  let estadoInicialVentanaFiltro = "abierto";
  // const iconoFiltro = "icono.inicial.filtro.svg";
  let IconoFiltros = "icono-filtros.svg";

  const abreVentana = () => {
    estadoInicialVentanaFiltro = "abierto";
  };
  const cierraVentana = () => {
    estadoInicialVentanaFiltro = "cerrado";
  };

  // Variables ara importación dinámica (síncrona) dentro de onMount()
  let familiasModule;
  let agrupacionesModule;
  let variantesModule;

  // seleccion por id
  let familiaSeleccionada = null;
  let agrupacionSeleccionada = null;
  let varianteSeleccionada = null;

  // condicionadores de Vistas
  let muestraResumen = false;
  let muestraDetalle = false;
  let muestraFiltro = true;

  // Opciones de Mapa
  let mapa;

  const mapaInicio = {
    lat: 23.551238082075017,
    lon: -107.61401268566283,
    zoom: 4
  };

  // variables condicionales
  $: familias = familiasModule ? familiasModule.default : [];
  $: agrupaciones = agrupacionesModule ? agrupacionesModule.default : [];
  $: variantes = variantesModule ? variantesModule.default : [];

  // Lengua
  $: lenguaDetalle = calculaLenguaDetalle(seleccion);
  $: console.log(lenguaDetalle);

  // $: lenguaResumen = calculaLenguaResumen(seleccion)

  //
  $: famArbol = calculaArbolFiltro(
    familias,
    agrupaciones,
    variantes,
    seleccion
  );

  $: seleccion = {
    famId: familiaSeleccionada,
    agrId: agrupacionSeleccionada,
    varId: varianteSeleccionada
  };

  // <lenguas>Visibles define los elementos que se muestran en el mapa y sus características
  $: familiasVisibles = calculaFamiliasVisibles(familias, seleccion);
  $: agrupacionesVisibles = calculaAgrupacionesVisibles(
    agrupaciones,
    seleccion
  );
  $: variantesVisibles = calculaVariantesVisibles(variantes, seleccion);

  // $: console.log("familiasVisibles", familiasVisibles);
  // $: console.log("agrupacionesVisibles", agrupacionesVisibles);
  // $: console.log("variantesVisibles", variantesVisibles);

  // TODO multiselect find => filter

  const calculaFamiliasVisibles = (fams, selec) => {
    if (!fams.length) return [];
    if (!selec.famId && !selec.agrId && !selec.varId) {
      return fams;
    } else if (selec.famId) {
      return [fams.find(f => f.id === selec.famId)];
    } else if (selec.agrId) {
      return [fams.find(f => f.agrupaciones.includes(selec.agrId))];
    }
  };

  const calculaAgrupacionesVisibles = (agrs, selec) => {
    if (!agrs.length || (!selec.famId && !selec.agrId && !selec.varId))
      return [];
    else if (selec.famId) return agrs.filter(a => a.familiaId === selec.famId);
    else if (selec.agrId) return [agrs.find(a => a.id === selec.agrId)];
  };

  const calculaVariantesVisibles = (vars, selec) => {
    if (!vars.length || (!selec.agrId && !selec.varId)) return [];
    else if (selec.agrId) {
      return vars.filter(v => v.agrupacionId == selec.agrId);
    } else if (selec.varId) {
      return [vars.find(a => a.id === selec.varId)];
    }
  };

  const manejaSeleccion = seleccion => {
    // recibe: seleccion.detail
    // > {id, tipo}
    let poligono =
      seleccion.detail.tipo === "familia"
        ? familias.find(f => f.id === seleccion.detail.id).geojson
        : seleccion.detail.tipo === "agrupacion"
        ? agrupaciones.find(a => a.id === seleccion.detail.id).geojson
        : seleccion.detail.tipo === "variante"
        ? variantes.find(v => v.id === seleccion.detail.id).geojson
        : null;

    if (poligono) {
      mapa.fitBounds(bbox(poligono), {
        padding: { top: 25, bottom: 25, left: 75, right: 25 },
        speed: 0.6
      });
    }

    familiaSeleccionada =
      seleccion.detail.tipo == "familia" ? seleccion.detail.id : null;
    agrupacionSeleccionada =
      seleccion.detail.tipo == "agrupacion" ? seleccion.detail.id : null;
    varianteSeleccionada =
      seleccion.detail.tipo == "variante" ? seleccion.detail.id : null;

    setTimeout(() => {
      muestraResumen = true;
    }, 2000);
  };

  const manejaLimpiaFiltro = () => {
    muestraResumen = false;

    familiaSeleccionada = null;
    agrupacionSeleccionada = null;
    varianteSeleccionada = null;

    mapa.flyTo({
      center: [mapaInicio.lon, mapaInicio.lat],
      zoom: mapaInicio.zoom,
      speed: 0.6
    });

    muestraFiltro = true;
  };

  const manejaVerDetalle = () => {
    muestraResumen = false;
    muestraFiltro = false;
    muestraDetalle = true;
  };

  const manejaCierraDetalle = () => {
    muestraDetalle = false;
    muestraResumen = true;
    muestraFiltro = true;
  };

  const manejaMapaCargado = e => {
    mapa = e.detail;
  };

  const calculaLenguaDetalle = selec => {
    if (selec.famId) {
      // console.log("Detalle para", selec.famId);
      let l = familias.find(f => f.id === selec.famId);
      l.agrupacionesInfo = l.agrupaciones.map(a => {
        let agr = agrupaciones.find(agr => agr.id == a);
        let agrupacionInfo = {
          id: agr.id,
          nombre: agr.nombreOriginario || agr.nombreCastellanizado
        };
        return agrupacionInfo;
      });
      return l;
    } else if (selec.agrId) {
      let l = agrupaciones.find(a => a.id === selec.agrId);

      let fam = familias.find(f => f.id === l.familiaId);

      l.familiaInfo = {
        id: fam.id,
        nombre: fam.nombreOriginario || fam.nombreCastellanizado
      };

      l.variantesInfo = l.variantes.map(a => {
        let agr = variantes.find(agr => agr.id == a);
        let agrupacionInfo = {
          id: agr.id,
          nombre: agr.nombreOriginario || agr.nombreCastellanizado
        };
        return agrupacionInfo;
      });

      return l;
      // console.log("Detalle para", selec.agrId);
    } else if (selec.varId) {
      // console.log("Detalle para", selec.varId);

      let l = variantes.find(v => v.id === selec.varId);

      let fam = familias.find(f => f.id === l.familiaId);
      let agr = agrupaciones.find(a => a.id === l.agrupacionId);

      l.familiaInfo = {
        id: fam.id,
        nombre: fam.nombreOriginario || fam.nombreCastellanizado
      };
      l.agrupacionInfo = {
        id: agr.id,
        nombre: agr.nombreOriginario || agr.nombreCastellanizado
      };

      return l;
    } else {
      return null;
    }
  };

  const calculaArbolFiltro = (fams, agrs, varis) => {
    // hastq que carguen fam, agr y var
    if (fams && agrs && varis && fams.length && agrs.length && varis.length) {
      let familias = fams;
      let agrupaciones = agrs;
      let variantes = varis;
      // recorro familias
      let nuevoArbol = familias.map(f => {
        let fam = {
          nombreOriginario: f.nombreOriginario || f.nombreCastellanizado,
          nombreCastellanizado: f.nombreOriginario
            ? f.nombreCastellanizado
            : "",
          id: f.id,
          tipo: "familia",
          color: "#" + f.color
        };
        // agrego agrupaciones para cada familia
        fam.agrupaciones = agrupaciones
          .filter(a => {
            return f.agrupaciones.includes(a.id);
          })
          .map(a => {
            let agr = {
              nombreOriginario: a.nombreOriginario || a.nombreCastellanizado,
              nombreCastellanizado: a.nombreOriginario
                ? a.nombreCastellanizado
                : "",
              id: a.id,
              famId: f.id,
              tipo: "agrupacion",
              color: "#" + f.color
            };
            // agrego variantes para cada agrupacion
            agr.variantes = variantes
              .filter(v => {
                return a.variantes.includes(v.id);
              })
              .map(v => {
                return {
                  nombreOriginario:
                    v.nombreOriginario || v.nombreCastellanizado,
                  nombreCastellanizado: v.nombreOriginario
                    ? v.nombreCastellanizado
                    : "",
                  id: v.id,
                  agrId: a.id,
                  famId: f.id,
                  tipo: "variante",
                  color: "#" + a.color
                };
              });
            return agr;
          });
        return fam;
      });
      return nuevoArbol;
    } else return [];
  };

  onMount(async () => {
    familiasModule = await import("../../../data/familias.json");
    agrupacionesModule = await import("../../../data/agrupaciones.json");
    variantesModule = await import("../../../data/variantes.json");
  });

  let movil;
  let breakpoint = 660;
  // $: console.log("movil", movil);
</script>

<style>
  .Principal {
    position: relative;
    height: 100%;
    background-color: #ddd;
  }
  .Mapa {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .Herramientas {
    position: absolute;
    top: 4rem;
    right: 1rem;
  }
  .LenguasFiltro {
    position: absolute;
    top: 4rem;
    left: 1rem;
    background-color: transparent;
    /* height: calc( 100% - 2rem ); */
    max-height: 38rem;
    width: 320px;
  }
  .FiltroIcono {
    width: 9rem;
    position: absolute;
    cursor: pointer;
    top: 0.5rem;
    background-color: rgb(70, 93, 114, 0.8);
    background-blend-mode: multiply;
    border-radius: 4px;
    border: 0;
  }
  button {
    cursor: pointer;
    height: 2.5rem;
    width: 9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .FiltroIcono img {
    width: 1.5rem;
  }
  .FiltroIcono:hover {
    background: rgb(70, 93, 114);
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.15);
  }
  span {
    color: #fff;
    font-size: 1rem;
    font-family: Fira Sans;
  }
  @media (max-width: 660px) {
    .LenguasFiltro {
      top: 3.25rem;
      left: 0;
      width: 100vw;
    }
    .FiltroIcono {
      position: absolute;
      left: 0.75rem;
      top: 1rem;
    }
    .LenguaResumen {
      /* position: absolute; */
      /* top: 15.5rem; */
    }
  }
</style>

<svelte:window bind:innerWidth={movil} />

<div class="Principal">
  <div class="Mapa">
    <Mapa
      lat={mapaInicio.lat}
      lon={mapaInicio.lon}
      zoom={mapaInicio.zoom}
      on:cargado={manejaMapaCargado}>
      {#if familiasVisibles && familiasVisibles.length}
        {#each familiasVisibles as fam (`${fam.tipo}-${fam.id}`)}
          <MapaCapa
            polygon={fam.geojson}
            id={fam.id}
            on:capaclick={manejaSeleccion}
            tipo="familia"
            opacidad={seleccion.varId ? 10 : seleccion.agrId ? 30 : 65}
            color={fam.color} />
        {/each}
      {/if}

      {#if agrupacionesVisibles && agrupacionesVisibles.length}
        {#each agrupacionesVisibles as agr (`${agr.tipo}-${agr.id}`)}
          <MapaCapa
            polygon={agr.geojson}
            id={agr.id}
            on:capaclick={manejaSeleccion}
            tipo="agrupacion"
            opacidad={seleccion.varId === agr.id ? 30 : 65}
            color={agr.color} />
        {/each}
      {/if}

      {#if variantesVisibles && variantesVisibles.length}
        {#each variantesVisibles as vari (`${vari.tipo}-${vari.id}`)}
          <MapaCapa
            polygon={vari.geojson}
            id={vari.id}
            on:capaclick={manejaSeleccion}
            tipo="variante"
            opacidad={65}
            color={vari.color} />
        {/each}
      {/if}

      <!-- <MapaMarcador lat={19.8981} lon={-99.4169} label="Svelte Barbershop & Essentials"/> -->
    </Mapa>
  </div>
  <div class="Herramientas">
    <!-- <Herramientas /> -->
  </div>

  {#if muestraFiltro && !!familias && famArbol}
    <div class="LenguasFiltro">

      {#if estadoInicialVentanaFiltro === 'cerrado'}
        <button
          class="FiltroIcono"
          on:click={abreVentana}
          transition:fade={{ duration: 500 }}>
          <img src={IconoFiltros} alt="Filtro de lenguas indígenas" />
          <span>Filtros</span>
        </button>
      {:else if estadoInicialVentanaFiltro === 'abierto'}
        <div>
          <LenguasFiltro
            arbol={famArbol}
            {seleccion}
            on:deseleccionar={manejaLimpiaFiltro}
            on:seleccionar={manejaSeleccion}
            cierraVentanaFiltro={cierraVentana}
            infoMiniResumen={lenguaDetalle} 
            muestraDetalle={manejaVerDetalle}/>
        </div>
      {/if}
    </div>
  {/if}

  {#if muestraDetalle && !!lenguaDetalle}
    <div class="LenguaDetalle">
      <LenguaDetalle
        lengua={lenguaDetalle}
        on:cerrar={manejaCierraDetalle}
        on:seleccionar={manejaSeleccion}
        on:deseleccionar={manejaLimpiaFiltro} />
    </div>
  {:else if muestraResumen && !!lenguaDetalle}
    {#if movil > breakpoint}
      <div class="LenguaResumen">
        <LenguaResumen
          lengua={lenguaDetalle}
          on:cerrar={manejaLimpiaFiltro}
          on:vermas={manejaVerDetalle} />
      </div>
    {/if}
  {/if}
</div>
