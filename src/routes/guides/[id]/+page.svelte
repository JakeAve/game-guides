<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { guide } = data;
</script>

<div class="guide">
	<h2>{guide.title}</h2>
	<p>{guide.body}</p>
</div>

<style>
	.guide {
		margin-top: 40px;
		padding: 10px;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
</style>
