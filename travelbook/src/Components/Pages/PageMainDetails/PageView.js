import { useEffect, useState } from "react";
import Posts from "./Posts";

function ViewPosts() {
	const [post, setPost] = useState([]);
	//recuperation Post
	async function getPost() {
		localStorage.getItem("token");
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/posts",
			options
		);
		const data = await response.json();
		const post = data.posts;
		console.log("content :", post);
		setPost(post);
	}
	useEffect(() => {
		getPost();
	}, []);
	return (
		<div className="FEED">
			<h1>Mon FEED de Travelers</h1>

			{post.map((posts, index) => (
				<Posts
					key={index}
					index={index}
					postFirstname={posts.firstname}
					postTitle={posts.title}
					postContent={posts.content}
					postId={posts._id}
					postLikes={posts.likes}
					postComment={posts.comments}
				/>
			))}
		</div>
	);
}
export default ViewPosts;
