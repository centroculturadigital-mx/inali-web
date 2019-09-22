<script>
    import Lateral from "../Lateral/Lateral.svelte";
    import Herramientas from "../Herramientas/Herramientas.svelte";
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
        top: 1rem;
        right: 1rem;
    }

    .Lateral {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 320px;
        background-color: #fff;
        height: calc( 100% - 2rem );
    }
</style>


	
	
	

<div class="Principal">
    <div class="Mapa">
        <div class="temporal">
            MAPA
        </div>
    </div>
    <div class="Herramientas">
        <Herramientas/>
    </div>
    <div class="Lateral">
        <Lateral/>
    </div>
</div>

