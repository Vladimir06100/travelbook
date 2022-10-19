


function Posts(props){

    return(
        <div>
          Titre:  {props.title}
          Article:   {props.content}
            Nom : {props.firstname}
            Numéro article : {props._id}
        </div>
    )

}
export default Posts;