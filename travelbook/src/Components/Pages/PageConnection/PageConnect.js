import { useState } from 'react';
import Login from './Login'

function PageConnect() {
const [login,setLogin] = useState ([{email:"",password:""}]) 

function updateLogin(newValue, index){
    login[index] = newValue;
    setLogin([...login]);
}
    return (
      <div className="PageConnect">


{login.map((email,password,index)=> (<Login index={index} email={email}  password={password} update={updateLogin} />
))}


      </div>
    );
  }
  
  export default PageConnect;
