import { Link } from "react-router-dom";
<<<<<<< HEAD
//import {useState} from 'react';
=======
import {useEffect, useState} from 'react';
>>>>>>> main

function Profil() {
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
		<div>
			<nav>
				<Link to="/pagemain">Accueil</Link>
				<Link to="/editprofil">Éditer mon profil</Link>
			</nav>

			<h2>Mon profil</h2>

			<section>
				<p>Nom : {user.lastname} </p>
               <p> Prénom : {user.firstname} </p>
               <p> Email : {user.email} </p>
               <p> ID : {user.ID} </p>
			</section>
		</div>
	);
}

export default Profil;
