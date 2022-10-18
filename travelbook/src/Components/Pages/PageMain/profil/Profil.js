import { Link } from "react-router-dom";
import {useState} from 'react';

function Profil() {
	async function getProfil() {
		const token = localStorage.getItem("token");
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/user",
			options
		);

		const data = await response.json();

		console.log(data.lastname);
	}

	getProfil();

	/* const nom = localStorage.getItem("lastname", data.lastname); */

	/*     
    const profil = JSON.stringify(data, lastname) */
	return (
		<div>
			<nav>
				<Link to="/pagemain">Accueil</Link>
				<Link to="/editprofil">Éditer mon profil</Link>
			</nav>

			<h2>Mon profil</h2>

			<section>
				<p> votre nom est : </p>
			</section>
		</div>
	);
}

export default Profil;
