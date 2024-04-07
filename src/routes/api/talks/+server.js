import { loadTalksData } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allTalks = await loadTalksData();

	// If we want to sort these orr have any filter
	// you would do that here before returning

	return json(allTalks);
};
