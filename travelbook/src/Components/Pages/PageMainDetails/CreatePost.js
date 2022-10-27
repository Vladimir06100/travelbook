import { useState } from "react";
import "./CssDetails/CreatePost.css";

function CreatePost() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	function handleCom(e) {
		const { id, value } = e.target;
		if (id === "post") {
			setContent(value);
		}
		if (id === "title") {
			setTitle(value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		Create();
	}
	async function Create() {
		const token = localStorage.getItem("token");

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},

			body: JSON.stringify({
				title: title,
				content: content,
			}),
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/post",
			options
		);

		await response.json();
	}

	return (
		<div className="CreatePost">
			<form>
				<h2 className="WhatsUP">Whats UP Traveler ?</h2>
				<div className="InputAjoutCom">
					<input
						className="InputTitre"
						type="text"
						id="title"
						onChange={handleCom}
						required
						placeholder="&#127957;Titre de votre Voyage&#127957;"
					/>

					<input
						className="InputDetail"
						type="text"
						id="post"
						onChange={handleCom}
						required
						placeholder="&#9992;Parlez de votre voyage"
					/>
				</div>
				<button className="CreationPost" type={"submit"} onClick={handleSubmit}>
					Creation Post
				</button>
			</form>
		</div>
	);
}

export default CreatePost;
