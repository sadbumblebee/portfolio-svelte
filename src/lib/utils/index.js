export const loadTalksData = async () => {
	const allData = import('../data/talks.js');

	return allData;
};
