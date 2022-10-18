import {Link} from 'react-router-dom'; 
import {useState} from 'react';


function Profil (){

    async function getProfil() {

        
        const token = localStorage.getItem("token");
        const options = {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            }
            
        }
        
        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/TravelBook/user", options);
        
        const data =await response.json();

    console.log(data.lastname)

    }

    getProfil();

/*    const [profil,setProfil] = useState({lastname : "lastname"});
    console.log(profil);
	const [viewProfil,setViewProfil] = useState(""); 

    function viewProfilperso(){

    profil.push(viewProfil);

    setProfil(profil);
    } */

    return(

    <div>
        
    
    
        
     
    <nav>

    <Link to="/PagePrincipale">Accueil</Link>
    <Link to="/editprofil">Editer mon profil</Link>

    </nav>
    
    <h2>Mon profil</h2>

<section>
  
  <p onChange={viewProfilperso}> votre nom est : {profil} </p>

</section>


            </div>

)


}


export default Profil; 
