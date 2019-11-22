<script>
  import { slide } from 'svelte/transition';
  import { createEventDispatcher } from "svelte";

  export let arbol = [];
  export let seleccion;
  export let cierraVentanaFiltro;

  const dispatch = createEventDispatcher();

  const deseleccionar = event => {
    dispatch("deseleccionar");
  };

  const seleccionarFamilia = famId => {
    dispatch("seleccionar", { id: famId, tipo: "familia" });
  };
  const seleccionarAgrupacion = agrId => {
    dispatch("seleccionar", { id: agrId, tipo: "agrupacion" });
  };
  const seleccionarVariante = varid => {
    dispatch("seleccionar", { id: varid, tipo: "variante" });
  };

  $: console.log("seleccion", seleccion);

  $: arbolFiltrado = calculaArbolFiltrado(arbol, seleccion);

  const calculaArbolFiltrado = (arb, sel) => {
    return arb.reduce((acc, f) => {
      if (!sel.famId && !sel.agrId && !sel.varId) return [...acc, f];
      else if (sel.famId) {
        if (sel.famId === f.id) {
          f.open = true;
          return [...acc, f];
        } else return acc;
      } else if (sel.agrId || sel.varId) {
        f.agrupaciones = f.agrupaciones.reduce((acc2, a) => {
          if (sel.agrId === a.id) {
            a.open = true;
            return [...acc2, a];
          } else {
            a.variantes = a.variantes.filter(v => v.id === sel.varId);
            if (a.variantes.length) {
              a.open = true;
              return [...acc2, a];
            }
            return acc2;
          }
        }, []);
        if (f.agrupaciones.length) {
          f.open = true;
          return [...acc, f];
        } else return acc;
      }
    }, []);
  };
</script>

<style>
  aside {
    max-height: 25rem;
    overflow: auto;
    padding: 0;
    margin-top: 7px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.9);
  }
  .BarraOcultar {
    display: flex;
    background: #465d72;
    border-radius: 0px;
    position: relative;
    top: 0.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .FiltroTitulo {
    padding: 0.5em;
    color: #fff;
    margin: 0;
  }

  summary {
    padding-left: 0.5rem;
    border-left: 3px solid trasparent;
    cursor: pointer;
  }
  summary::marker {
    color: #b8d3d1;
  }
  summary::-webkit-details-marker {
    color: #b8d3d1;
  }
  summary button {
    color: #465d72;
    cursor: pointer;
  }
  summary button:hover {
    color: #465d72;
    cursor: pointer;
  }
  details {
    padding-left: 0;
  }
  details button {
    border: none;
    background-color: transparent;
  }

  details button.activo,
  summary button.activo {
    background-color: rgba(184,211,209,0.2);
    font-weight: bold;
  }

  ul li {
    border-left: 0.75rem solid transparent;
    padding: 0.5rem 0;
  }
  ul li li li {
    padding-left: 0.5rem;
  }
  .CierraBarra {
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .CierraBarra:hover {
    color: rgba(255, 97, 97, 1);
  }
  #MostrarTodas {
    padding: 0.75rem;
    background-color: rgba(70, 93, 114, 0.1);
  }
  #MostrarTodas button {
    background-color: transparent;
    border: 0.5px solid #465d72;
    color: #465d72;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
  #MostrarTodas button:hover {
   border: 1px solid #000;
    color: #000;
  }
  .variante button {
    cursor: pointer;
    color: #465d72;
    text-transform: capitalize;
  }
  .variante b {
    color: #b8d3d1;
  }

  .castellanizado {
    font-size: 0.7em;
    font-weight: lighter;
    opacity: 0.8;
  }
</style>

<div class="BarraOcultar">
  <h4 class="FiltroTitulo">Familias lingüísticas</h4>
  <span on:click={cierraVentanaFiltro} class="CierraBarra">
    <i class="fa fa-close" />
  </span>
</div>

<aside transition:slide>

  {#if seleccion.famId || seleccion.agrId || seleccion.varId}
    <div id="MostrarTodas">
      <button on:click={deseleccionar}>Mostrar Todas</button>
    </div>
  {/if}
  <ul>
    {#each arbolFiltrado as fam ('fam' + fam.id)}
      <li class="familia" style={`border-color: ${fam.color}`}>
        <details open={fam.open}>
          <summary>
            <button class={seleccion.famId === fam.id ? 'activo' : ''} on:click={() => seleccionarFamilia(fam.id)}>
              <span class="originario">{fam.nombre}</span>
              {#if !! fam.nombreCastellanizado}
                <span class="castellanizado">({fam.nombreCastellanizado})</span>
              {/if}
            </button>
          </summary>
          <ul>

            {#each fam.agrupaciones as agr ('agr' + agr.id)}
              
              <li
                class="agrupacion"
                style="border-color: {agr.color}">
                <!-- style="border-color: {agr.variantes[0].color}"> -->
                <details open={agr.open}>
                  <summary>
                    <button class={seleccion.agrId === agr.id ? 'activo' : ''} on:click={() => seleccionarAgrupacion(agr.id)}>
                      <span class="originario">{agr.nombre}</span>
                      {#if !! agr.nombreCastellanizado}
                        <span class="castellanizado"> ({agr.nombreCastellanizado})</span>
                         <!-- content here -->
                      {/if}
                    </button>
                  </summary>
                  <ul>

                    {#each agr.variantes as vari ('var' + vari.id)}
                      <li class="variante" style="border-color: {vari.color}">
                        <b>-</b>
                        <button class={seleccion.varId === vari.id ? 'activo' : ''} on:click={() => seleccionarVariante(vari.id)}>
                          <span class="originario">{vari.nombre}</span>
                          {#if !! vari.nombreCastellanizado}
                            <span class="castellanizado"> ({vari.nombreCastellanizado})</span>
                            <!-- content here -->
                          {/if}
                        </button>
                      </li>
                    {/each}

                  </ul>
                </details>
              </li>
            {/each}

          </ul>
        </details>
      </li>
    {/each}
  </ul>

</aside>
