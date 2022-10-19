import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./PageProfil.css";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function PageProfil() {

    const [user,setUser] = useState({firstname:"",lastname:"",email:"",ID:""})

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
        const ID= data._id;
        const firstname= data.firstname;
        const lastname = data.lastname;
        const email = data.email;

setUser({firstname:firstname,lastname:lastname,email:email,ID:ID});

	}

    useEffect(()=>{getProfil()},[])
	

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
					<h1>Votre Profil</h1>
					<section>
				<p>Nom : {user.lastname} </p>
               <p> Prénom : {user.firstname} </p>
               <p> Email : {user.email} </p>
               <p> ID : {user.ID} </p>
			</section>
					
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
}

export default PageProfil;
