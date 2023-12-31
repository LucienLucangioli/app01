import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

   return ( 
    <div className="auth-form-container">
        <h2>Iniciar Sesión</h2>
   <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email" placeholder="email" id="email" name="email" />
    <label htmlFor="password">Contraseña</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password" placeholder="*********" id="password" name="password" />
    <button type="submit" >Iniciar Sesión</button>
   </form>
   <button className="login-btn" onClick={() => props.onFormSwitch('register')}>Registrarme</button>
   </div>
   )
}

