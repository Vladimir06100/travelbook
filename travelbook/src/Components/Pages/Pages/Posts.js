import Likes from "../PageMainDetails/Likes";
import AjoutCom from "../PageMainDetails/AjoutCom";

function Posts(props) {
	return (
		<div>
			Titre: {props.title}
			Article: {props.content}
			Nom : {props.firstname}
			Numéro article : {props._id}
			<Likes />
			<AjoutCom />
		</div>
	);
}
export default Posts;
