import { useState } from 'react';
    
    function CreatePost(){
    

    const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

    function handleCom(e) {
        const { id, value } = e.target;
        if ( id === "post" ) {
            setContent(value);
        }
        if ( id === "title") {
            setTitle(value);
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        Create()
    }
    async function Create() {
        
        const token = localStorage.getItem("token");
        
        
            const options = {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${token}`
                },

                body: JSON.stringify({
                    title: title,
                    content: content
                }),
            }
            
            const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/TravelBook/post", options);
            
            const data = await response.json();
            
            console.log(data);

            localStorage.setItem(title, content);
            
        }
        

return(
    <div className='Createpost'>
        <form>
<h2>Whats UP Traveler ?</h2>
        <input
							type="text"
							id="title"
							onChange={handleCom}
							required
                            placeholder=" Titre de votre voyage"
						/>
				

						<input
							type="text"
							id="post"
							onChange={handleCom}
							required
                            placeholder=" Parlez de votre voyage"
						/>
				
					

						<button type={"submit"} onClick={handleSubmit}>
							Creation Post
						</button>
				
				</form>
    </div>
)

    }

export default CreatePost;