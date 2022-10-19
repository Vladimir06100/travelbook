import "./AjoutCom.css";
import { useReducer, useRef, useState } from "react";
import { ForumOutlined } from "@mui/icons-material";

const AjoutCom = () => {
	const [postid, setPostid] = useState("");
	const [content, setContent] = useState("");

	function handleCom(e) {
		const { id, value } = e.target;
		if (id === "postd") {
			setPostid(value);
		}
		if (id === "content") {
			setContent(value);
		}
	}

	async function Comment(){ 
		const token = localStorage.getItem("token");

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},

			body: JSON.stringify({
				postId: postid,
				content: content,
			}),
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post/comment",
			options
		);
		console.log("commentas", response)
		const data = await response.json();
		console.log("commentaires", data)

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
				<button type="submit" onClick={handleSubmitComment}>envoyer</button>
			</form>
			<div className="comments">
				{comments &&
					comments.map((comment, index) => (
						<div className="comment" key={index}>
							<button
								onClick={() => dispatch({ type: "remove_comment", index })}
								classname="btndelete">
								❌
							</button>
							<div>
								<p>{comment.title}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AjoutCom;
