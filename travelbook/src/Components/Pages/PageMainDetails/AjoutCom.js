import "./CssDetails/AjoutCom.css";
import { useReducer, useRef, useState } from "react";

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

	function handleSubmitComment(e) {
		e.preventDefault();
		Comment();
	}

	const inputRef = useRef();

	const [comments, dispatch] = useReducer((state = [], action) => {
		switch (action.type) {
			case "add_task": {
				return [
					...state,
					{
						id: state.length,
						title: action.title,
					},
				];
			}
			case "remove_comment": {
				return state.filter((task, index) => index !== action.index);
			}
			default: {
				return state;
			}
		}
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: "add_task",
			title: inputRef.current.value,
		});
	};
	return (
		<div className="maincontainer">
			<form onSubmit={handleSubmit} className="formular">
				<textarea
					className="commentcontainer"
					type="text"
					name="title"
					ref={inputRef}
					onChange={handleCom}
					placeholder="commentez cet article"
				/>
				<br></br>
				<button type="submit" onClick={handleSubmitComment}>
					envoyer
				</button>
			</form>
		</div>
	);
};

export default AjoutCom;
