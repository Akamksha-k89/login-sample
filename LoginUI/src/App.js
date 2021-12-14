import './App.css';
import { useState } from "react";
import { useAlert } from 'react-alert'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();
  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email,password:password })
  };
  fetch('http://localhost:7000/api/login', requestOptions)
      .then(response => response.json())
      .then((data) => {
                      console.log(data);
                      // alert.show(data,{ type: 'success' });
                      setEmail("");
                      setPassword("")});    
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="App_form">
        <label className='App_form_lbl_email'>
        <b>Email:</b>
        </label>
          <input type="text" className="App_form_email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label className='App_form_lbl_password' >
        <b>Password:</b>
          </label>
        <input type="password" className="App_form_password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" className="App_form_btn" value="Login" />
      </form>
    </div>
  );
}

export default App;
