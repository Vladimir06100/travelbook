import Likes from "./Likes";
import AjoutCom from "./AjoutCom";

function Posts(props) {
	return (
		<div>
			Titre: {props.title}
			Article: {props.content}
			Nom : {props.firstname}
			Numéro article : {props._id}
			Likes : {props.likes}
			<Likes />
			<AjoutCom id={props._id} />
		</div>
	);
}
export default Posts;
