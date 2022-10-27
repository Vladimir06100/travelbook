import "./CssDetails/AjoutCom.css";
import { useRef, useState } from "react";
const AjoutCom = (props) => {
	const [comment, setComment] = useState("");
	function handleCom(e) {
		setComment(e.target.value);
	}
	async function Comment() {
		const token = localStorage.getItem("token");
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify({
				postId: props.id,
				content: comment,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post/comment",
			options
		);
		console.log("commentas", response);
		const data = await response.json();
		console.log("commentaires", data);
	}
	function handleSubmitComment() {
		Comment();
	}
	const inputRef = useRef();
	return (
		<div className="maincontainer">
			<form className="formular">
				<textarea
					className="CommentContainer"
					type="text"
					name="title"
					ref={inputRef}
					onChange={handleCom}
					placeholder="commentez cet article"
				/>
				<br />
				<button
					className="NewComment"
					type="submit"
					onClick={handleSubmitComment}>
					Envoyer
				</button>
			</form>
		</div>
	);
};

export default AjoutCom;
