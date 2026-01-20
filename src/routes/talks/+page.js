export const load = async ({ fetch }) => {
	const response = await fetch(`/api/talks`);
	const talks = await response.json();

	return {
		talks
	};
};
