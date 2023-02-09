<script>
	import { page } from '$app/stores';
    console.log($page)
</script>

<h1>Oops</h1>

{#if $page.status === 404}
	<p>That page cannot be found.</p>
{:else}
	<p>{$page.status}: {$page?.error?.message}</p>
{/if}
