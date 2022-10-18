import { Link } from "react-router-dom";
import PostsTest from "../../Elements/PostsTest";

function PageMain() {
	const listeArticles = [
		{
			title: "Article1",
			details:
				"Un paragraphe est une section de texte en prose vouée au développement",
		},
		{
			title: "Article2",
			details:
				"Un paragraphe est une section de texte en prose vouée au développement",
		},
		{
			title: "Article3",
			details:
				"Un paragraphe est une section de texte en prose vouée au développement",
		},
	];

	return (
		<div>
			<nav>
				<Link to="/pagemain">Accueil</Link>
				<Link to="/profil">Mon profil</Link>
			</nav>

			<h2>Page principal</h2>

			{listeArticles.map((article) => {
				return <PostsTest title={article.title} details={article.details} />;
			})}
		</div>
	);
}

export default PageMain;
