import "./Menu.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function Menu() {
	const navigate = useNavigate();

	async function handleClick(e) {
		e.preventDefault();
		const token = localStorage.getItem("token");

		if (token) {
			navigate(`/profil`);
		} else {
			alert("Compte n’existe pas!!!");
		}
	}
	async function handleClickAccueil(e) {
		e.preventDefault();
		const token = localStorage.getItem("token");

		if (token) {
			navigate(`/PagePrincipale`);
		} else {
			alert("Veiller vous connecter!!!");
			navigate(`/`);
		}
	}
	return (
		<div className="Menus">
			<div className="deuxButton">
				<h1>Menu</h1>
				<div className="BtnAccPro">
					<button type="submit" onClick={handleClickAccueil}>
						Accueil
					</button>
					<button type="submit" onClick={handleClick}>
						Profil
					</button>
				</div>
			</div>
		</div>
	);
}

//	<Link to="/pagemain">Accueil</Link>
//	<Link to="/profil">Mon profil</Link>

export default Menu;
