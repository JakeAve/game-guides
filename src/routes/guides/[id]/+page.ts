import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = await res.json();
	if (res.ok) {
		return {
			guide
		};
	}
	throw error(404, 'Not found');
}) satisfies PageLoad;
