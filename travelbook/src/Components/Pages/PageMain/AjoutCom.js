import "./AjoutCom.css"
import { useState } from "react";

function AjoutCom(){

    const[comment,setComment]=useState("");
    const [comments,setComments]=useState([]);
    const onClickHandler  =()=>{
        setComments((comments)=>[...comments,comment])
    }
    const onChangeHandler=(e)=>{
        setComment(e.target.value);
    };


return(

   <div className="maincontainer">

    {comments.map((text)=>(
<div>
<div className="commentcontainer">{text}<br></br>< button classname="btndelete">❌</button>< button classname="btnmodify"><span>✏️</span></button></div>

</div>

    ))}


    <h3 className="commenttext">Commentez l'article</h3>
    <textarea
     
     value={comment}
     onChange={onChangeHandler}
     className="inputbox"/>


    <button onClick={onClickHandler} className="commentbutton">Envoyer</button>

   </div> 




)



}


export default AjoutCom;