import { useState } from "react";
import Button from "./UI/Button";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
			}),
		};

		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/login",
			options
		);
		console.log(response);
		const data = await response.json();
		localStorage.setItem("token", data.token);

		if (response.ok) {
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
					<div className={classes.control}>
						<label htmlFor="email">Votre Email</label>
						<input
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
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
					<div className={classes.actions}>
						{/* <button type="button" onClick={() => {}}>
							Se connecter
						</button> */}
						<Button type={"submit"} onClick={() => {}}>
							Se connecter
						</Button>
						<Link to="/Register">Enregistrer</Link>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
