<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { guides } = data;
</script>

<div class="guides">
	<ul>
		<li><a href="/">guide 1</a></li>
		<li><a href="/">guide 2</a></li>
		{#each guides as g}
			<li>
				<a href="/">{g.title}</a>
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
