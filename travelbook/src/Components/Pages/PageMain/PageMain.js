import {Link} from 'react-router-dom'; 


function PageMain (){

    return(
        <div>
        <nav>

<Link to="/pagemain">Accueil</Link>
<Link to="/profil">Mon profil</Link>

        </nav>

        <h2>Page principal</h2>

        </div>

    )


}


export default PageMain;