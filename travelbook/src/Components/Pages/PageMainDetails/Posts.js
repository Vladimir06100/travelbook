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
				<div className="ArticlePost">Article: {postContent}</div>
				<div className="NomPost">Nom : {postFirstname}</div>
				<div className="NumeroPost">Numéro article : {postId}</div>
				<div className="CommentsPost">Commentaires : {postComment}</div>
				<div className="LikesPost">
					&#128151; Likes &#128151; : &#8658; {postLikes.length}
				</div>
				<div>
					<ul className="LikeParPost">
						Liké par :
						{postLikes.map(function (like) {
							return (
								<li>
									&#128526; {like.firstname} {like.lastname}
								</li>
							);
						})}
					</ul>
				</div>
			<button onClick={handleLike}>&#128151;</button>
			<AjoutCom id={postId} comment={postComment} />
			</div>
		</section>
	);
}
export default Posts;
