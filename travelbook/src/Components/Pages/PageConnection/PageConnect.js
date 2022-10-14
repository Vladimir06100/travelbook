import { useState } from 'react';
//import Login from './Login'
import Register from './Register';

function PageConnect() {
const [register,setRegister] = useState ([{email:"",password:"",firstname:"",lastname:""}]) 
console.log(register);
function updateLogin(email, password, firstname, lastname, index){
    register[index] = [{email, password, firstname, lastname}];
    setRegister([...register]);
}
    return (
      <div className="PageConnect">


{register.map((email,password,firstname,lastname,index)=> (<Register key={index} index={index} email={email}  password={password}  firstname={firstname} lastanme={lastname} update={updateLogin} />
))}


      </div>
    );
  }
  
  export default PageConnect;
