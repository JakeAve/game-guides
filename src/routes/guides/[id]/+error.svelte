<script>
	import { page } from '$app/stores';
</script>

<h2>404 Not Found</h2>
<p>The guide <code>{$page.url.pathname}</code> cannot be found.</p>
<a href="/guides">Go back to guides</a>