<script>

import AudioReproductor from './AudioReproductor.svelte';

export let audios;

import organizarAudios from "../../../funciones/organizarAudios"


$: audiosOrganizados = organizarAudios(audios)


const reproductores = []
let tocando = null

const manejarTocar = indice => {
    
    tocando=indice;

    console.log('maneejar tocar', indice);

}

</script>

{#if Array.isArray(audiosOrganizados) }
    {#each audiosOrganizados as audio, indice ('audio_'+indice) }
        
        <!-- bind:this={reproductores[indice]} -->
        <AudioReproductor
            audio={audio}
            indice={indice}
            tocar={manejarTocar}
            pausar={tocando!==indice}
        />
            <!-- tocando={tocando[indice]} -->

    {/each}
{/if}
