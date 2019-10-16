<script>
	import AudioReproductor from './AudioReproductor.svelte';
 // Datos F4k3
//   const audios = '../../../../data/audiosDatosFalsos.js';

const audios = [
    {
        id: 1,
        lengua: "Maya",
        nombre: "Ambiente interior",
        archivo: "/data/ambiente-interior.ogg",
        variante: "Nombre Variante",
        coleccion: "Colección INALI 1992",
        creditos: "Eduardo Quintana"
    },
    {
        id: 1,
        lengua: "Maya",
        nombre: "Ambiente interior 2",
        archivo: "/data/ambiente-interior.ogg",
        variante: "Nombre Variante",
        coleccion: "Colección INALI 1968",
        creditos: "Pedro Hendrick"
    },
    {
        id: 1,
        lengua: "Maya",
        nombre: "Ambiente interior 3",
        archivo: "/data/ambiente-interior.ogg",
        variante: "Nombre Variante",
        coleccion: "Colección INALI 2004",
        creditos: "Joanna Jimenez"
    },
    {
        id: 1,
        lengua: "Maya",
        nombre: "Ambiente interior 4",
        archivo: "/data/ambiente-interior.ogg",
        variante: "Nombre Variante",
        coleccion: "Colección INALI 1984",
        creditos: "Joaquin Zamora"
    },
]

    // import audio from "./data/ambiente-interior.ogg"
    // const audios = [
    //     {
    //         nombre: "Qui adipisicing veniam anim labore culpa fugiat officia eu deserunt adipisicing consectetur duis.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Deserunt reprehenderit ullamco quis aliqua nisi occaecat aute dolor ipsum excepteur tempor sint.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Ex ut amet veniam laborum anim id.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Laborum ut nisi eu dolore exercitation veniam ipsum.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Exercitation sunt enim consectetur irure aliquip velit veniam duis.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Esse voluptate culpa dolor non do qui adipisicing Lorem qui voluptate ex sit nulla.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    //     {
    //         nombre: "Lorem velit nisi anim exercitation elit officia.",
    //         archivo: "/data/ambiente-interior.ogg"
    //     },
    // ]



</script>


{#each audios as audio ('audio_'+Math.random()) }
    
    <AudioReproductor audio={audio}/>

{/each}
