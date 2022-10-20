import { useEffect, useState } from "react";
import Posts from "./Posts";

function ViewPosts() {
	const [post, setPost] = useState([{ title: "", content: "" }]);

  const [postId, setPostid] = useState([{postID: ""}]);
  const [content, setContent] = useState([{content:""}]);

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


	function handleCom(e) {
		const { id, value } = e.target;
		if (id === "postId") {
			setPostid(value);
		}
		if (id === "content") {
			setContent(value);
		}
	}

	async function PostComment(){ 
		const token = localStorage.getItem("token");

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},

			body: JSON.stringify({
				postId: postId,
				content: content,
			}),
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post/comment",
			options
		);
		console.log("commentas", response)
		const data = await response.json();
		console.log("commentaires", data)

	}

	function handleSubmitComment(e) {
		e.preventDefault();
		PostComment();
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
      
      <div className="Comments">

      <form onSubmit={handleSubmitComment} className="formular">
				<textarea
					className="commentcontainer"
					type="text"
					name="comment"
					onChange={handleCom}
					placeholder="commentez cet article"
          />
				<br></br>
				<button type="submit" onClick={handleSubmitComment}>envoyer</button>
			</form>
          </div>
		</div>
	);
}
export default ViewPosts;
