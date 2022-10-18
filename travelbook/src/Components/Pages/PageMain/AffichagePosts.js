import {Link} from 'react-router-dom'; 

function AffichagePost (){
    const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(20);
   
    async function getPost() {

        
        const token = localStorage.getItem("token");
        const options = {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
            }
            
        }
        
        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/TravelBook/posts?page=2&limit=10", options);
        
        const data =await response.json();

        console.log(data.lastname);
        
    }
    
    getProfil();
    
    
    
    
    return(

    <div>
        
    
    
        
     
    <nav>

    

    </nav>
    
  


            </div>

)


}


export default AffichagePost; 