import Likes from "./Likes";
import AjoutCom from "./AjoutCom";


function Posts({ postTitle, postContent, postFirstname, postId, postComment , postLikes}) {

	async function handleLike() {
		const token = localStorage.getItem("token");
		const options = {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Authorization:
			  `bearer ${token}`,
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
		<div>
			Titre: {postTitle}
			Article: {postContent}
			Nom : {postFirstname}
			Numéro article : {postId}
			Commentaires : {postComment}
			Likes : {postLikes.length}
		
 

	
			<AjoutCom id={postId} />

			<button onClick={handleLike}>
        Like
      </button>

		</div>
	);
}
export default Posts;

	
  

  