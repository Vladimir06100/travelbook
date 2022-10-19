import "./CSSdesPages/PageSansLogin.css";

function Post({ postTitle, postContent, postLikes, postId }) {
	async function handleLike() {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer `,
			},
			body: JSON.stringify({
				postId: postId,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/demo/post/like",
			options
		);
		console.log(response.status);
	}

	return (
		<article className="ArticleSansLogin">
			<h2 className="PostTitle">{postTitle}</h2>
			<p className="PostContent">{postContent}</p>
			<p className="Likes">Likes: {postLikes.length}</p>

			<p className="DetailLikes">Details likes:</p>
			<ul>
				{postLikes.map(function (like) {
					return (
						<li className="LiPosts">
							{like.firstname} {like.lastname}
						</li>
					);
				})}
			</ul>
		</article>
	);
}

export default Post;
