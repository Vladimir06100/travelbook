import { useState } from 'react';
//import Login from './Login'
import Register from './Register';

function PageConnect() {
const [register,setRegister] = useState ([{email:"",password:"",firstname:"",lastname:""}]) 
console.log(register);

function updateRegister(email, password, firstname, lastname, index){
    register[index] = [{email, password, firstname, lastname}];
    setRegister([...register]);
}
    return (
      <div className="PageConnect">


{register.map((email,password,firstname,lastname,index)=> (<Register key={index} index={index} email={email}  password={password}  firstname={firstname} lastanme={lastname} update={updateRegister} />
))}


      </div>
    );
  }
  
  export default PageConnect;
