<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { guides } = data;
</script>

<div class="guides">
	<ul data-sveltekit-preload-data="hover">
		{#each guides as g}
			<li>
				<a href={`/guides/${g.id}`}>{g.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
