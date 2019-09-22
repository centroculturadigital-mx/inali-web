<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { id } = page.params;
        
        const articulo = {
            nombre: "Yuto-nahua",
            descripcion: "..........." + id
        }

        let p = new Promise((resolve, reject)=>{
            setTimeout(()=>resolve({
                articulo
            }),2500)
        })

        let r = await p

        

        return r

    }
</script>

<script>
    export let articulo;
</script>


<h1>
    { articulo.nombre }    
</h1>

<p>
    { articulo.descripcion }    
</p>