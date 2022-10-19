import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./PagePrincipale.css";
import Likes from "../../Elements/Likes";
import CreatePost from "../PageMain/CreatePost";
import ViewPosts from "../PageConnection/ViewPosts"
const PagePrincipale = () => {


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
					<ViewPosts />

				
							
				
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
};

export default PagePrincipale;
