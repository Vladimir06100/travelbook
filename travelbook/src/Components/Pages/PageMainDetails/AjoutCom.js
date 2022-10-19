import "./CssDetails/AjoutCom.css";
import { useReducer, useRef } from "react";


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
		<div className="MainContainer">
			<form onSubmit={handleSubmit} className="Formular">
				<textarea
					className="CommentContainer"
					type="text"
					name="title"
					ref={inputRef}
				/>
				<br></br>
				<button type="submit">envoyer</button>
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
