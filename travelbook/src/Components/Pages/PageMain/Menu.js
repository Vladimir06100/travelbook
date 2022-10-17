import "./Menu.css"
import { Search } from "@mui/icons-material"
import {Link} from 'react-router-dom'; 

function  Menu (){

return(

    <div className="menuContainer">
        <div className="menuleft">
    <span className="logo">Travelbook</span>

    </div>

<div className="searchbarcenter">
    <div className="searchbar">

<Search className="searchIcon"/>
<input placeholder="Recherchez par theme..." className="searchInput"/>

    </div>
    </div>

    <div className="MenuRight">
        <div className="MenuLinks">

    <Link to="/pagemain">Main page</Link>
    <Link to="/profil">Mon profil</Link>
    
        </div>


    <div>
    <img src=""/>

    </div>
    </div>
    </div>





)



}


export default Menu;