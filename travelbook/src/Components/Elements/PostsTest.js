import {useState} from "react";
import AjoutCom from "../Pages/PageMain/AjoutCom";

function PostsTest (props){

const [Likes, setLikes]= useState (false);

    
const likeUnlike = async ()=>{
    var token= localStorage.getItem("token");
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`

        },
        body: JSON.stringify({
        postId:"postId",
        })
        };
        const response = await fetch("https://social-network-api.oscfr1.scalingo.io/TravelBook/post/like", options);
        const data = await response.json();
        console.log()

    setLikes(!Likes)

}
  
    
    

    return(


        <div>

            
<h1>{props.title}</h1>
<p>{props.details}</p>
<button onClick={likeUnlike}>{Likes ? <span>💓</span> : <span>❤</span>}</button>
       

            <AjoutCom/>

        </div>


    )



}

export default PostsTest;
