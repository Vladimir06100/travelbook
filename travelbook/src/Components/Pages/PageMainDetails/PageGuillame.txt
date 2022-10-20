import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import { useEffect, useState } from "react";

function App() {
	const [posts, setPosts] = useState([]);

	async function getPosts() {
		const options = {
			method: "GET",
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/posts",
			options
		);
		const data = await response.json();
		setPosts(data.posts);
	}

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="Visuel">
			<section className="SectionHeader">
				<Header />
			</section>
			<div className="PartieCentre">
				<section className="SectionMenu">
					<Menu />
				</section>

				<div className="SectionMain">
					<h1>TravelBook</h1>
					<h1>Voici les retours exprimer de Voyage</h1>
					<h1>Des nos participants</h1>
					{posts.map(function (element) {
						return (
							<div className="Test">
								<Post
									postTitle={element.title}
									postContent={element.content}
									postLikes={element.likes}
									postId={element._id}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
}

export default App;
