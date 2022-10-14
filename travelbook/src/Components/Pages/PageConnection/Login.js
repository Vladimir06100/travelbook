function Login() {
   


    return (
      <div className="Login">

   <form>
    
        <label htmlFor="emailInput">Email : </label>
        <input
          type="email"
          id="emailInput"
          placeholder="john.doe@lebocal.academy"
          
          />
  

        <label htmlFor="passwordInput">Password : </label>
        <input
          type="password"
          id="passwordInput"
          placeholder="1234"
          
          />

      <input type="submit" value="Se connecter" />

          </form>


      </div>
    );
  }
  
  export default Login;

