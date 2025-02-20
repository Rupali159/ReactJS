// import React,{ useContext, useState } from "react"
// import Usercontext from "./context/Usercontext"


// function Login() {

//    const [username, setUsername] = useState('')
//    const [password, setPassword] = useState('')

//    const {setUser} = useContext(Usercontext)

//    const handleSubmit = (e) =>{
//     e.preventDefault()
//     setUser({username, password})
//    }

//     return(
//         <div>
//             <h2>Login</h2>
//             <input type="text" 
//             value={username}
//             onClick={(e) => setUsername(e.target.value)}
//             placeholder="username" />

//             <input type="text"  
//              value={password}
//              onClick={(e) => setPassword(e.target.value)}
//             placeholder="passward" />
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }

// export default Login

import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";  // ✅ Ensure correct path

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Usercontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}  // ✅ Fixed
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  // ✅ Fixed
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
