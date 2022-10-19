import { PrivacyTipSharp } from "@mui/icons-material";
import Likes from "../../Elements/Likes";
import AjoutCom from "../PageMain/AjoutCom";

function Posts(props) {
	return (
		<div>
			Titre: {props.title}
			Article: {props.content}
			Nom : {props.firstname}
			Numéro article : {props._id}
			Likes : {props.likes}
            <Likes />

		</div>
	);
}
export default Posts;
