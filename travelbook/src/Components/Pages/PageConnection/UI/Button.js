
const Button = (props) => {
	return (
		<button
			className=""
			type={props.type || "button"}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};
export default Button;
