function AffichagePost(props) {
	return (
		<div>
			<li>{props.title}</li>
			<li>{props.content} </li>
		</div>
	);
}

export default AffichagePost;
