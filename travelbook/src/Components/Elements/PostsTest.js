<<<<<<< HEAD
import {useState} from "react";
import AjoutCom from "../Pages/PageMain/AjoutCom";

function PostsTest (props){

const [Likes, setLikes]= useState (false);
    
const likeUnlike = ()=>{

    setLikes(!Likes)

};
  
    
    

    return(


        <div>

            
<h1>{props.title}</h1>
<p>{props.details}</p>
<button onClick={likeUnlike}>{Likes ? <span>💓</span> : <span>💔</span>}</button>
       

            <AjoutCom/>

        </div>


    )



=======
import { useState } from "react";

function PostsTest(props) {
	const [Likes, setLikes] = useState(false);

	const likeUnlike = () => {
		setLikes(!Likes);
	};

	const [rango, setRango] = useState("");

	return (
		<div>
			<h1>{props.title}</h1>
			<p>{props.details}</p>
			<p>{Likes ? "J'aime" : "Je n'aime pas"}</p>
			<button onClick={likeUnlike}>Like</button>
			<p>{rango}</p>
			<input
				type="text"
				onChange={(ev) => setRango(ev.target.value)}
				placeholder="comment cet article"
			/>
		</div>
	);
>>>>>>> Vladimir
}

export default PostsTest;
