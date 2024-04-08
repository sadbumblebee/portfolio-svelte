// TK wrap this in a try/catch
export async function load({ params }) {
	// Get talks data
	const response = await fetch(`/api/talks`);
	const talks = await response.json();
	// Get the current slug
	const slug = params.slug;

	const unslugify = (slugString) => {
		return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
	};

	const talk = talks.talksData.filter((obj) => obj.title === unslugify(slug))[0];

	const { title, desc, event, links, date } = talk;
	// const Content = post.default;

	return {
		title,
		desc,
		event,
		links,
		date
	};
}
