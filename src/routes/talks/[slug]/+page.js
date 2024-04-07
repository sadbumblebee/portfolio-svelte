// TK wrap this in a try/catch
export async function load({ params }) {
	console.log('hi');
	// Get talks data
	const response = await fetch(`/api/talks`);
	const talks = await response.json();
	// Get the current slug
	const slug = params.slug;
	console.log(params);
	console.log(talks, params.slug);

	const unslugify = (slugString) => {
		return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
	};

	console.log(unslugify(slug));

	const talk = talks.talksData.filter((obj) => obj.title === unslugify(slug))[0];

	console.log(talk);
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
