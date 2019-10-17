<script>
  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import { onMount } from "svelte";

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
    z-index: 1000;
  }

  .LightBox header {
    width: 100%;
    position: absolute;
    z-index: 1;
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
    display: none;
  }
</style>

<div class={classList}>
  <header>
    <button on:click={close}>X</button>
  </header>

  <div class="Lightbox__Overlay" on:click={close} />
  <Carousel perPage={{ perParge: 1 }} {go}>

    {#each contents as content, i ('content_' + i)}
      {#if content.type == 'image' || !content.type}
        <img src={content.full} alt={content.nombre} />
      {/if}
    {/each}

  </Carousel>

</div>
