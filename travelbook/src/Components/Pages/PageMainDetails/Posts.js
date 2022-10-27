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
		<section className="AfficheSanslogin">
			<div className="AffichagePosts">
				<div className="TitrePost">Titre: {postTitle}</div>
				<div className="Article">Article: {postContent}</div>
				<div className="Createur">Createur : {postFirstname}</div>
				<div className="NumeroPost">Numéro article : {postId}</div>
				<div className="LikesPost">
					&#128151; Likes &#128151; : {postLikes.length}
				</div>
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
				<ul>
					Commentaires :
					{postComment.map(function (comment) {
						return (
							<li className="ACommenter">
								{comment.firstname} {comment.lastname} a commenté "
								{comment.content}"
							</li>
						);
					})}
				</ul>
				<AjoutCom id={postId} />
				<button className="BtnLike" onClick={handleLike}>
					💓
				</button>
			</div>
		</section>
	);
}
export default Posts;
