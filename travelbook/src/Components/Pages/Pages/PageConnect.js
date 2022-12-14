import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./CSSdesPages/PageConnect.css";
import "./CSSdesPages/StyleGeneraleMain.css";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
			}),
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/login",
			options
		);
		console.log(response);
		const data = await response.json();
		localStorage.setItem("token", data.token);
		const successMsg = data.success;
		if (successMsg === true) {
			navigate(`/PagePrincipale`);
			const successMsg = console.log("Connecter!");
			console.log("Bravo!!!!!!");
			return successMsg;
		} else {
			alert(
				"Compte n’existe pas!!!\n Ou Votre EMAIL est erronée \n Ou Votre mot de passe erronée"
			);
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
					<h1>Connecter Vous</h1>
					<form onSubmit={handleSubmit}>
						<div className="">
							<label htmlFor="email">Votre Email</label>
							<input
								type="email"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor="password">Votre Pass</label>
							<input
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="DeuxBtnMain">
							<div>
								<button type={"submit"} onClick={() => {}}>
									Se connecter
								</button>
							</div>
							<div>
								<Link className="LinkMain" to="/Register">
									Enregistrer
								</Link>
							</div>
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

export default Login;
