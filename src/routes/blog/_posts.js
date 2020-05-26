import all from '../../content/posts/*/index.svx'

const posts = all

// import fs from "fs";
// import path from "path";
// // import grayMatter from "gray-matter";

// const getAllPosts = () => {
// 	// ../../content/posts/*/index.md
// 	fs.readdirSync("src/content/posts").map(dirName => {
// 		const post = fs.readFileSync(path.resolve("src/content/posts", `${dirName}/index.md`), "utf-8");
// 		console.log('sssss', post)
// 		// return grayMatter(post).data;
// 		return post
// 	})
// }
// const posts = getAllPosts()

export default posts
