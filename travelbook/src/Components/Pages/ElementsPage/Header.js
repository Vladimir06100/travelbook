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
	async function handleClickConnect(e) {
		e.preventDefault();
		const token = localStorage.getItem("token");

		if (token !== true) {
			navigate(`/PageConnect`);
		} else {
			alert("Compte n’existe pas!!!");
		}
	}

	return (
		<div className="Header">
			<div className="Absolute">
				<img
					className="Chat"
					src="https://i.pinimg.com/originals/0a/8d/77/0a8d779ffa83e45877df56a7ad06735e.png"
					alt="chat"
				/>
			</div>
			<div>
				<h1>TravelBooK</h1>
			</div>
			<div className="SearchBar">
				<Search />
				<input placeholder="Recherchez par theme ..." className="SearchInput" />
			</div>
			<div>
				<button
					className="Connexion"
					type="submit"
					onClick={handleClickConnect}>
					Connexion
				</button>
				<button className="Deconnexion" type="submit" onClick={handleClick}>
					Déconnexion
				</button>
			</div>
		</div>
	);
}
export default HeaderMain;
