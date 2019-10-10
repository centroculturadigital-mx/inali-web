<script>
  // libs
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition'
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
  let estadoInicialventanaFiltro = "cerrado";
  const iconoFiltro = "icono.inicial.filtro.svg";
  const abreVentana = () => {
    estadoInicialventanaFiltro = "abierto";
  };
  const cierraVentana = () => {
    estadoInicialventanaFiltro = "cerrado";
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

  $: console.log("familiasVisibles", familiasVisibles);
  $: console.log("agrupacionesVisibles", agrupacionesVisibles);
  $: console.log("variantesVisibles", variantesVisibles);

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

    console.log("poligono a acomodar", poligono);

    if (poligono) {
      mapa.fitBounds(bbox(poligono), {
        padding: { top: 25, bottom: 25, left: 75, right: 25 }
      });
    }

    familiaSeleccionada =
      seleccion.detail.tipo == "familia" ? seleccion.detail.id : null;
    agrupacionSeleccionada =
      seleccion.detail.tipo == "agrupacion" ? seleccion.detail.id : null;
    varianteSeleccionada =
      seleccion.detail.tipo == "variante" ? seleccion.detail.id : null;

    muestraResumen = true;
  };

  const manejaLimpiaFiltro = () => {
    muestraResumen = false;

    familiaSeleccionada = null;
    agrupacionSeleccionada = null;
    varianteSeleccionada = null;

    mapa.flyTo({
      center: [mapaInicio.lon, mapaInicio.lat],
      zoom: mapaInicio.zoom
    });
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
    console.log("calculaLenguaDetalle", selec);
    if (selec.famId) {
      console.log("Detalle para", selec.famId);
      return familias.find(f => f.id === selec.famId);
    } else if (selec.agrId) {
      console.log("Detalle para", selec.agrId);
      return agrupaciones.find(a => a.id === selec.agrId);
    } else if (selec.varId) {
      console.log("Detalle para", selec.varId);
      return variantes.find(v => v.id === selec.varId);
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
          nombre: f.NOM_FAM,
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
              nombre: a.NOM_AGRUP,
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
                  nombre: v.NOM_VAR,
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
      console.log("arbolFiltro", nuevoArbol);
      return nuevoArbol;
    } else return [];
  };

  onMount(async () => {
    familiasModule = await import("../../../data/familias.json");
    agrupacionesModule = await import("../../../data/agrupaciones.json");
    variantesModule = await import("../../../data/variantes.json");
  });
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
    top: 3.5rem;
    left: 1rem;
    background-color: transparent;
    /* height: calc( 100% - 2rem ); */
    max-height: 38rem;
    width: 320px;
  }
  .FiltroIcono {
    position: absolute;
    left: 0;
    top: 0.5rem;
    background-color: transparent;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
  .FiltroIcono img {
    height: 3rem;
    width: 3rem;
  }
</style>

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
    <Herramientas />
  </div>

  {#if muestraFiltro && famArbol}
    <div class="LenguasFiltro">

      {#if estadoInicialventanaFiltro === 'cerrado'}
        <div class="FiltroIcono" on:click={abreVentana} transition:fade>
          <img src={iconoFiltro} alt="Filtro de lenguas indígenas" />
        </div>
      {:else if estadoInicialventanaFiltro === 'abierto'}
      <div transition:fade>
        <LenguasFiltro
          arbol={famArbol}
          {seleccion}
          on:deseleccionar={manejaLimpiaFiltro}
          on:seleccionar={manejaSeleccion} 
          cierraVentanaFiltro={cierraVentana}
          />
      </div>
      {/if}
    </div>
  {/if}

  {#if muestraDetalle && !!lenguaDetalle}
    <div class="LenguaDetalle">
      <LenguaDetalle lengua={lenguaDetalle} on:cerrar={manejaCierraDetalle} />
    </div>
  {/if}
  {#if muestraResumen && !!lenguaDetalle}
    <div class="LenguaResumen">
      <LenguaResumen
        lengua={lenguaDetalle}
        on:cerrar={manejaLimpiaFiltro}
        on:vermas={manejaVerDetalle} />
    </div>
  {/if}
</div>
