<script>
        export let backgroundColor = '#fff'

</script>

<style>
    .Lateral {
        padding: 0 2rem;
        position: fixed;
        top: 3.25rem;
        left: 0;
        width: 50%;
        max-width: 45rem;
        height: 100vh;
        background-color: #fff;
        overflow-y: auto;
    }

      @media  (max-width: 575.98px) {

      .Lateral {
        padding: 0 2rem;
        position: fixed;
        top: 3.25rem;
        left: 0;
        width: 100%;
        max-width: 45rem;
        height: 100vh;
        background-color: #fff;
        overflow-y: auto;
    }
}

</style>

<aside class="Lateral" style={ `background-color: ${backgroundColor}`}>

    <slot />

</aside>
