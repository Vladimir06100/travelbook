
async function Login({email,password,update, index}) {
     
    const options = {
method : "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({
    email : email,
    password: password
})
     }

const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/demo/login", options);

const data =await response.json();
console.log(data);

function handleChange1(e){
update(e.target.email,index);
}

function handleChange2(e){
    update(e.target.password,index);
    }
    return (
      <div className="Login">

   <form className="form-login">
    
        <label htmlFor="emailInput"> Votre identifiant Email </label>
        <input
          type="email"
          id="emailInput"
          autoComplete="username"
          placeholder="c.colomb@travelbook.fr"
          email={email}
          onChange={handleChange1}
          />
  

        <label htmlFor="passwordInput"> Votre mot de passe </label>
        <input
          type="password"
          autoComplete="current-password"
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
  
  export default Login;

