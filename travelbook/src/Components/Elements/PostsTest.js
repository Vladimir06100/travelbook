import { useState } from "react";

function PostsTest(props) {
	const [Likes, setLikes] = useState(false);

	const likeUnlike = () => {
		setLikes(!Likes);
	};

	const [rango, setRango] = useState("");

	return (
		<div className="Article">
			<h1>{props.title}</h1>
			<p>{props.details}</p>
			<p>{Likes ? "J'aime" : "Je n'aime pas"}</p>
			<button className="BtnLike" onClick={likeUnlike}>Like</button>
			<p>{rango}</p>
			<input
				type="text"
				onChange={(ev) => setRango(ev.target.value)}
				placeholder="comment cet article"
			/>
		</div>
	);
}

export default PostsTest;
