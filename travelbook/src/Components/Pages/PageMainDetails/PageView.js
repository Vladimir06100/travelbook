import { useEffect, useState } from "react";
import Posts from "./Posts";

function ViewPosts() {
	const [post, setPost] = useState([{ title: "", content: "" }]);
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

	async function PutComment() {}

	function postChange(e) {
		e.preventDefault();
		setPost({ ...post, post: e.target.value });
	}
	function AjoutComment() {
		PutComment();
	}

	return (
		<div className="FEED">
			<h1>Mon FEED de Travelers</h1>

			{post.map((posts, index) => (
				<Posts
					key={index}
					index={index}
					_id={posts._id}
					title={posts.title}
					content={posts.content}
					firstname={posts.firstname}
				/>
			))}
			<button value={post.post} onChange={AjoutComment}>
				Ajouter
			</button>
		</div>
	);
}
export default ViewPosts;
