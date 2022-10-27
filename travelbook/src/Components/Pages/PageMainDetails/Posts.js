import AjoutCom from "./AjoutCom";
import "./CssDetails/Post.css";

function Posts({
	postTitle,
	postContent,
	postFirstname,
	postId,
	postComment,
	postLikes,
}) {
	async function handleLike() {
		const token = localStorage.getItem("token");
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify({
				postId: postId,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post/like",
			options
		);
		console.log(response.status);
	}
	return (
		<div className="Posts">
			Titre: {postTitle}
			Article: {postContent}
			Nom : {postFirstname}
			Numéro article : {postId}
			Likes : {postLikes.length}
			<ul className="Travelers">
				Travelers qui aiment votre article :
				{postLikes.map(function (like) {
					return (
						<li>
							{like.firstname} {like.lastname}
						</li>
					);
				})}
			</ul>
			Commentaires :
			<ul>
				{postComment.map(function (comment) {
					return (
						<li className="aCommenter">
							{comment.firstname} {comment.lastname} a commenté "
							{comment.content}"
						</li>
					);
				})}
			</ul>
			<AjoutCom id={postId} />
			<button onClick={handleLike}>💓</button>
		</div>
	);
}
export default Posts;
