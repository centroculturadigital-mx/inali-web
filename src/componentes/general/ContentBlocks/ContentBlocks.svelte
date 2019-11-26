<script>

export let blocks

</script>


<style>

	dl {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	dt {
		padding-bottom: 1rem;
	}
    
	img{
    width: 8rem;
    margin-bottom: 1.5rem;
    }
    
</style>


{#each blocks as block, i (i) }

	{#if block.type == "h1" }
		<h1>
			{block.data.text}
		</h1>
	{/if}
	{#if block.type == "h2" }
		<h2>
			{block.data.text}
		</h2>
	{/if}
	{#if block.type == "h3" }
		<h3>
			{block.data.text}
		</h3>
	{/if}
	{#if block.type == "h4" }
		<h4>
			{block.data.text}
		</h4>
	{/if}
	{#if block.type == "h5" }
		<h5>
			{block.data.text}
		</h5>
	{/if}
		{#if block.type == "h6" }
		<h6>
			{block.data.text}
		</h6>
	{/if}
	{#if block.type == "p" }
		<p>
			{block.data.text}
		</p>
	{/if}
	{#if block.type == "img" }
		<img src={block.data.src} alt={block.data.alt}/>
	{/if}
	{#if block.type == "dl" }
		<dl>
		{#each block.data.items as item, j (j)}
			<dt>
				{item.dt}
			</dt>	
			<dt>
				{item.dd}
			</dt>	
		{/each}
		</dl>
	{/if}
{/each}