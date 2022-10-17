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



}

export default PostsTest;