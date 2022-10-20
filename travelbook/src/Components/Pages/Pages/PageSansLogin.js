import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./CSSdesPages/PagePrincipale.css";
import ViewPostsSansLogin from "../PageMainDetails/PageViewSansLogin";

const PagePrincipaleSansLogin = () => {
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
					
					<ViewPostsSansLogin />
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
};

export default PagePrincipaleSansLogin;
