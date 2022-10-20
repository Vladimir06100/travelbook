import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./CSSdesPages/PageModifProfile.css";
import "./CSSdesPages/StyleGeneraleMain.css";
import { useEffect, useState } from "react";

function PageProfil() {
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		ID: "",
	});

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
		const firstname = data.firstname;
		const lastname = data.lastname;
		const email = data.email;
		setUser({ firstname: firstname, lastname: lastname, email: email });
		console.log(data);
	}
	useEffect(() => {
		getProfil();
	}, []);

	async function PutProfil() {
		const token = localStorage.getItem("token");
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify({
				email: user.email,
				firstname: user.firstname,
				lastname: user.lastname,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/user",
			options
		);

		const data = await response.json();
		console.log(data);
		console.log(user.email);
		console.log(user.firstname);
		console.log(user.lastname);
	}
	function lastnameChange(e) {
		e.preventDefault();
		setUser({
			...user,
			lastname: e.target.value,
		});
	}
	function firstnameChange(e) {
		e.preventDefault();
		setUser({
			...user,
			firstname: e.target.value,
		});
	}
	function emailChange(e) {
		e.preventDefault();
		setUser({
			...user,
			email: e.target.value,
		});
	}
	function SubmitInfo() {
		PutProfil();
	}

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
					<h1>Modifier Votre Profil</h1>
					<section className="ModifUser">
						<p className="SetLastName">
							Nom :
							<input
								type="text"
								placeholder="Select new lastname"
								value={user.lastname}
								onChange={lastnameChange}
							/>
						</p>
						<p className="SetFirstName">
							Prénom :
							<input
								type="text"
								placeholder="Select new fisrtname"
								value={user.firstname}
								onChange={firstnameChange}
							/>
						</p>
						<p className="SetEmail">
							Email :
							<input
								type="text"
								placeholder="Select new email"
								value={user.email}
								onChange={emailChange}
							/>
						</p>
					</section>
					<button className="BtnValider" onClick={SubmitInfo}>
						Valider
					</button>
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
}

export default PageProfil;
