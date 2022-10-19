import "../ElementsPage/CssElements/Header.css";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function HeaderMain() {
	const navigate = useNavigate();

	async function handleClick(e) {
		e.preventDefault();
		const deco = localStorage.getItem("token");

		if (deco) {
			localStorage.clear("token");
			alert("Merci et a bientôt!!!");
			navigate(`/`);
		}
	}

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
				<button className="Deconnexion" type="submit" onClick={handleClick}>
					Déconnexion
				</button>
			</div>
		</div>
	);
}
export default HeaderMain;
