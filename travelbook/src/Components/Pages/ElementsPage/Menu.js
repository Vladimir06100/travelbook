import "./Menu.css";


function MenuMain() {
	return (
		<div className="Menus">
			<div className="deuxButton">
				<h1>Menu</h1>
				<div className="BtnAccPro">
				<button>Accueil</button>
				<button>Profil</button>
				</div>
			</div>
		</div>
	);
}

//	<Link to="/pagemain">Accueil</Link>
//	<Link to="/profil">Mon profil</Link>

export default MenuMain;

