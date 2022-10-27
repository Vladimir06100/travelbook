import "./CssDetails/PostSansLogin.css";

function PostsSansLogin({
	postTitle,
	postContent,
	postFirstname,
	postId,
	postComment,
	postLikes,
}) {
	return (
		<section className="AfficheSanslogin">
			<div className="AffichagePosts">
				<div className="TitrePost">Titre: {postTitle}</div>
				<div className="ArticlePost">Article: {postContent}</div>
				<div className="NomPost">Createur : {postFirstname}</div>
				<div className="NumeroPost">Numéro article : {postId}</div>
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
				<div>
					<ul className="ACom">
						Commentaires :
						{postComment.map(function (comment) {
							return (
								<li>
									{comment.firstname} {comment.lastname} a commenté "
									{comment.content}"
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
