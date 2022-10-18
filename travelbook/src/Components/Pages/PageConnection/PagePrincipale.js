//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./PagePrincipale.css";
import PostsTest from "../../Elements/PostsTest";
import CreatePost from "../PageMain/CreatePost";
const PagePrincipale = () => {



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
		<div className="Visuel">
			<section className="SectionHeader">
				<Header />
			</section>
			<div className="PartieCentre">
				<section className="SectionMenu">
					<Menu />
				</section>

				<section className="SectionMain">
					<h1>TravelBook</h1>
					<h1>Page Principale</h1>
					<CreatePost />
					{listeArticles.map((article) => {
						return (
							<PostsTest title={article.title} details={article.details} />
						);
					})}
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
};

export default PagePrincipale;
