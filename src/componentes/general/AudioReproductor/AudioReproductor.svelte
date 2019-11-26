<script>

	import { onMount, onDestroy } from 'svelte';

    import AudioReproductorVista from "./AudioReproductorVista.svelte"

    export let audio;

    let audioHTML
    
    let cargando = true;

    let actualizacion;
    // let tiempo;
    // let progreso 


    $: tocando = !! actualizacion
    $: tiempo = !! audioHTML ? formatearDuracion(audioHTML.currentTime) : 0
    $: duracion = !! audioHTML ? formatearDuracion(audioHTML.duration) : 0
    $: progreso = !! audioHTML ? calcularProgreso(audioHTML.currentTime,audioHTML.duration) : 0
    


    const calcularProgreso = (tiempo_,duracion_) => {
        
        const t = new Date(tiempo_)
        const d = new Date(duracion_)
        
        return (t / d)*100
    }
    $: !! audioHTML ? console.log(tiempo,duracion,calcularProgreso(audioHTML.currentTime,audioHTML.duration)) : null

    const actualizar = ()=>{
        // reasignar para detonar asignacion reactiva con '$'
        audioHTML = audioHTML
    }



    const tocar = () => {

        if( ! actualizacion ) {
            actualizacion = setInterval(actualizar,1000) 
        }
    
        audioHTML.play()
    }
    
    const parar = () => {
    
        audioHTML.pause()
        clearInterval(actualizacion)
        actualizacion = false
        
    }

    

    onMount(() => {
    
        
        audioHTML.addEventListener('canplay',()=>{
          actualizar()
          setTimeout(()=>{
            // suavizar cargado
            cargando = false      
          }, 500)
        });
        
    
    })

    onDestroy(() => {
    
        clearInterval(actualizacion)
    
    })

    


    const formatearDuracion = (duracion) => {
        let date = new Date(null);
        
        if(Number.isNaN(duracion)) {
            duracion = 0
        }

        date.setSeconds(duracion); // specify value for SECONDS here
        
        return date.toISOString().substr(14, 5);
    }


    const seek = posicion => {
        
        const tiempo = Math.floor((posicion/100) * audioHTML.duration);
        console.log( posicion, audioHTML.duration, tiempo );

        audioHTML.currentTime = tiempo
        
    }


</script>

<audio bind:this={audioHTML}>
    {#each audio.sources as audioSrc }
        <source src={audioSrc}/>
    {/each}
</audio>


<AudioReproductorVista
    {
        ...{
            tocando,
            tiempo,
            duracion,
            progreso,
            audio,
            parar,
            tocar,
            cargando,
            seek
        }
    }
/>
