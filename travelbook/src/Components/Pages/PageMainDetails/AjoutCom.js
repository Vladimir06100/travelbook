import "./CssDetails/AjoutCom.css";
import { useReducer, useRef } from "react";


const AjoutCom = () => {
	const [postId, setPostid] = useState("");
	const [content, setContent] = useState("");

	function handleCom(e) {
		const { id, value } = e.target;
		if (id === "postId") {
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
				postId: postId,
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
		<div className="MainContainer">
			<form onSubmit={handleSubmit} className="Formular">
				<textarea
					className="CommentContainer"
					type="text"
					name="title"
					ref={inputRef}
					onChange={handleCom}
					placeholder="commentez cet article"
				/>
				<br></br>
				<button type="submit" onClick={handleSubmitComment}>envoyer</button>
			</form>
			<div className="Comments">
				{comments &&
					comments.map((comment, index) => (
						<div className="Comment" key={index}>
							<button
								onClick={() => dispatch({ type: "remove_comment", index })}
								classname="BtnDelete">
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
