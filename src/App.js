import React, { useState } from "react";
import './loginpage.css';
import Buttonfunc from "./Buttonfunc.jsx";


function App() {
  const[password,setpassword] = useState('');
  const[opacity,setopacity] = useState(0.1);
  const inputpassword = (e) => {
    const input = e.target.value;
    setpassword(input);
  };
  return (
      <div className="App">
        <div className="container">
          <div className="logindetails"> 
              <h1 id="sign">Sign In</h1>
              <input type="text" id="emailbox" placeholder="Email or mobile number"></input>
              <input type="password" id="passwordbox" placeholder="Password" onChange={inputpassword}></input>
              <button type="submit" id="SButton" style={{opacity:opacity}}>Sign In</button>
              <Buttonfunc password={password} setopacity={setopacity} />
        </div>      
      </div>
    </div>
  );
} 

export default App;
