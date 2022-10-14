import './Register.css'

function Register({email,password,firstname, lastname, update, index}){
 
      
    async function newRegister() {
        
        const options = {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            })
        }
        
        const response =await fetch("https://social-network-api.osc-fr1.scalingo.io/travelbook/register", options);
        
const data =await response.json();
console.log(data);
}
function data() {
    
    return ({
      email: "test@test.com",
      password: "test",
      result: null,
      token: "",
    });
}

newRegister(data);
function handleChange1(e){
    update(e.target.value,index);
}

function handleChange2(e){
    update(e.target.password,index);
}
return (
    <div className="Register">

   <h1> Bienvenue sur TRAVEL BOOK</h1>
   <form className="form-register">
   <h2> Veuillez vous enregistrer</h2>
   <label htmlFor="firstnameInput"> Votre Prénom </label>
        <input
          /* type="email" */
          id="firstnameInput"
          /* autoComplete="username" */
          placeholder="Christophe"
          firstname={firstname}
          onChange={handleChange1}
          />

<label htmlFor="lastnameInput"> Votre Nom </label>
        <input
          /* type="email" */
          id="lastnameInput"
          /* autoComplete="username" */
          placeholder="Colomb"
          lastname={lastname}
          onChange={handleChange1}
          />
    
        <label htmlFor="emailInput"> Votre Email </label>
        <input
          /* type="email" */
          id="emailInput"
          /* autoComplete="username" */
          placeholder="c.colomb@travelbook.fr"
          email={email}
          onChange={handleChange1}
          />
  

        <label htmlFor="passwordInput"> Votre mot de passe </label>
        <input
          /* type="password" */
          /* autoComplete="current-password" */
          id="passwordInput"
          placeholder="******"
          password={password}
          onChange={handleChange2}
          />

      <input type="submit" value="Se connecter" />

          </form>


      </div>
    );


}
export default Register;

