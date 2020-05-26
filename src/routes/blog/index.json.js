import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	console.log('trying to get frontmatter here', post.render())
	return {
		title: '???'
		// title: post.title,
		// slug: post.slug
	};
	// return {...post.render()}
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}