import "./CssDetails/AjoutCom.css";
import { useReducer, useRef, useState } from "react";

const AjoutCom = (props) => {
	const [comment, setComment] = useState([]);

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
				content: props.comment,
			}),
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post/comment",
			options
		);
		console.log(response.status);
	}

	function handleSubmitComment(e) {
		e.preventDefault();
		Comment();
	}

	const inputRef = useRef();


	return (
		<div className="maincontainer">
			<form  className="formular">
				<textarea
					className="commentcontainer"
					type="text"
					name="title"
					ref={inputRef}
					onChange={handleCom}
					placeholder="commentez cet article"
				/>
			
				<button type="submit" onClick={handleSubmitComment}>
					Envoyer
				</button>
			</form>

			<div className="comments">
		 Commentaires :

			<ul>
         {comment.map(function (comment) {
          return (
            <li>
              {comment.firstname} {comment.lastname}
            </li>
          );
        })}
      </ul>

			</div>
		</div>
	);
};

export default AjoutCom;
