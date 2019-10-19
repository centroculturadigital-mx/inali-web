<script>
  import { onMount } from "svelte";
  import Carousel from "../../../../node_modules/@centroculturadigital-mx/svelte-carousel/src/Carousel.svelte";

  import Metadatos from "../Metadatos/Metadatos.svelte";
  import FotosMetadatos from "../Galerias/TextilesMetadatos.svelte";

  export let content;
  export let go;

  let classBase = "LightBox";

  let classList = `${classBase} ${classBase}--hidden`;

  let shouldOpen = false;

  $: contents = Array.isArray(content) ? content : [content];

  $: open(go);

  onMount(() => {
    shouldOpen = true;

    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 27:
          close();
          break;
      }
    });
  });

  const open = goIndex => {
    if ((goIndex === 0 || goIndex > 0) && shouldOpen) {
      classList = classBase;
    }
  };

  const close = () => {
    go = null;
    classList = `${classBase} ${classBase}--hidden`;
  };
</script>

<style>
  .LightBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transition: opacity 1s;
    z-index: 1;
  }

  .LightBox header {
    width: 100%;
    position: absolute;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .LightBox header button {
    position: absolute;
    top: 3.75rem;
    right: 1.35rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .LightBox header button:hover {
    color: tomato;
  }

  .LightBox :global(.carousel)
    /* ,
    .LightBox :global(.slides)  */
 {
    width: 100vw;
    height: 100vh;
  }
  .LightBox :global(.slides > * > *) {
    width: 100vw !important;
    /* height: 70vh !important; */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LightBox :global(.carousel > ul) {
    bottom: 0;
  }

  .LightBox :global(.carousel img) {
    object-fit: contain;
  }

  .Lightbox__Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }

  .LightBox--hidden {
    opacity: 0;
    z-index: -1;
  }

  :global(.carousel) {
    z-index: 100;
    border: 1px solid red;
  }
</style>

<div class={classList}>
  <header>
    <button on:click={close}>X</button>
  </header>

  <div class="Lightbox__Overlay" on:click={close} />

  {#if contents.length > 0}
    <Carousel perPage={{ perParge: 1 }} {go}>

      {#each contents as content, i ('content_' + i)}
        {#if content.tipo == 'imagen' || !content.tipo}
          <img src={content.url}/>
          <!-- <img src={content.url} alt={content.metadatos.nombre} /> -->
          <!-- <img src={content.full} alt={content.metadatos.nombre} /> -->
          <!-- <FotosMetadatos metadatos={content.metadatos}/> -->
        {/if}
        {#if content.tipo == 'textil' || !content.tipo}
          <img src={content.full} alt={content.metadatos.nombreDelProducto} />
          <Metadatos metadatos={content.metadatos} tipo={content.tipo}/>
        {/if}
      {/each}

    </Carousel>
  {/if}

</div>
