import { useState } from "react";
import Button from "./UI/Button";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
//import PageConnect from './PageConnect';
//import {  Route } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";
const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const navigate = useNavigate();
	//   const history = useHistory();

	// остановка обновления страницы
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
			// <Route path="/" element={<PageConnect />}></Route>
			//		history.push("/");

			const successMsg = console.log("User registered successfully!");
			console.log("Bravo!!!!!!");
			return successMsg;
		}
	}
	return (
		<>
			<section className={classes.Login}>
				<h1>TravelBook</h1>
				<h1>Connecter Vous</h1>
				<form onSubmit={handleSubmit}>
					{/* Email */}
					<div className={classes.control}>
						<label htmlFor="email">Votre Email</label>
						<input
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					{/* Mot de PASSE */}
					<div className={classes.control}>
						<label htmlFor="password">Votre Pass</label>
						{/* поменять потом способ текст на пароль чтобы спрятать данные */}
						<input
							type="text"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{/* NOM  */}
					<div className={classes.control}>
						<label htmlFor="firstname">Votre Nom</label>
						{/* поменять потом способ текст на пароль чтобы спрятать данные */}
						<input
							type="text"
							id="password"
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					{/* PRÉNOM */}
					<div className={classes.control}>
						<label htmlFor="lastname">Votre Prénom</label>
						{/* поменять потом способ текст на пароль чтобы спрятать данные */}
						<input
							type="text"
							id="password"
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<div className={classes.actions}>
						{/* <button type="button" onClick={() => {}}>
							Se connecter
						</button> */}

						<Button type={"submit"} onClick={handleSubmit}>
							Creation de Votre Compte
						</Button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Register;
