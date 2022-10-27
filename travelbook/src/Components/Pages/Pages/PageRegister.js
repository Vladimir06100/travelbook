import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./CSSdesPages/PageRegister.css";
import "./CSSdesPages/StyleGeneraleMain.css";
const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const navigate = useNavigate();
	async function handleSubmit(e) {
		e.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname,
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/register",
			options
		);
		console.log(response);
		localStorage.setItem(email, password);
		if (response.ok) {
			navigate(`/`);
			const successMsg = alert("User registered successfully!");
			console.log("Bravo!!!!!!");
			return successMsg;
		}
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
					<h1>Cree votre Compte</h1>
					<form onSubmit={handleSubmit}>
						{/* Email */}
						<div className="">
							<label htmlFor="email">Votre Email</label>
							<input
								type="email"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						{/* Mot de PASSE */}
						<div className="">
							<label htmlFor="password">Votre Pass</label>
							<input
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						{/* NOM  */}
						<div className="">
							<label htmlFor="lastname">Votre Nom</label>
							<input
								type="text"
								id="password"
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
						</div>
						{/* PRÉNOM */}
						<div className="">
							<label htmlFor="firstname">Votre Prénom</label>
							<input
								type="text"
								id="password"
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
						</div>
						<div className="BtnCreate">
							<button
								className="CreateCompte"
								type={"submit"}
								onClick={handleSubmit}>
								Creation de Votre Compte
							</button>
						</div>
					</form>
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
};
export default Register;
