import "./Menu.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function Menu() {
	const navigate = useNavigate();

	async function handleClick(e) {
		e.preventDefault();
		const token = localStorage.getItem("id");

		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
		};

		const response = await fetch(
			`https://social-network-api.osc-fr1.scalingo.io/TravelBook/user/${id}`,
			options
		);

		const data = await response.json({});
		console.log(data.user);
		localStorage.setItem("token", data.user);
		const id = data._id;

		if (id === true) {
			navigate(`/PageProfil`);
		} else {
			alert("Compte n’existe pas!!!");
		}
	}
	return (
		<div className="Menus">
			<div className="deuxButton">
				<h1>Menu</h1>
				<div className="BtnAccPro">
					<button>Accueil</button>
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
