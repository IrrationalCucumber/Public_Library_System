import React, { useState } from 'react'
import axios from 'axios'

function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const handleSignIn = async () => {
    if(username !== "" || password !== ""){
        alert("Pleasse input username/password")
    }
    alert(username + " " + password)
    // try {
    //     const res = await axios.get('https://localhost/user/' + {params: { username: username, password: password}});
    //     if(res !== null){
    //         alert("SUCCESS!")
    //     }
    // } catch (error) {
    //     console.log(error);
        
    // }
}
  return (
    <>
      <input type="text" name="username" id="" onChange={(e)=>{setUsername(e)}} />
      <input type="password" name="password" id="" onChange={(e)=>{setPassword(e)}}/>
      <button onClick={handleSignIn}>SIGN IN</button>
    </>
  )
}

export default SignIn
