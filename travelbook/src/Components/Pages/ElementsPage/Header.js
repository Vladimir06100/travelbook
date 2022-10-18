import "./Header.css";
import { Search } from "@mui/icons-material";
function HeaderMain() {
	return (
		<div className="Header">
			<div>
				<h1>TravelBooK</h1>
			</div>
			<div className="SearchBar">
				<Search />
				<input placeholder="Recherchez par theme ..." className="SearchInput" />
			</div>
			<div>
				<button className="Deconnexion">Déconnexion</button>
			</div>
		</div>
	);
}
export default HeaderMain;
