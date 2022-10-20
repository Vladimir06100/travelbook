import "./CssDetails/PostSansLogin.css";

function PostsSansLogin({
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
				<div>Article: {postContent}</div>
				<div>Nom : {postFirstname}</div>
				<div>Numéro article : {postId}</div>
				<div>Commentaires : {postComment}</div>
				<div>Likes : {postLikes.length}</div>
				<div>
					<ul>
						Liké par :
						{postLikes.map(function (like) {
							return (
								<li>
									{like.firstname} {like.lastname}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
export default PostsSansLogin;
