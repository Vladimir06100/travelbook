import "./AjoutCom.css";
import { useReducer, useRef } from "react";
// import { ForumOutlined } from "@mui/icons-material";

const AjoutCom = () => {
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
				/>
				<br></br>
				<button type="submit">envoyer</button>
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
