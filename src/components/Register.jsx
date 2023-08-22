import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
     }
    return (
        <div className="auth-form-container">
            <h2>Registrarse</h2>
         <form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Nombre completo</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type= "name" name="name" id="name" placeholder="Nombre completo"/>
    <label htmlFor="email">Email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email" placeholder="email" id="email" name="email" />
    <label htmlFor="password">Contraseña</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password" placeholder="*********" id="password" name="password" />
    <button type="submit" >Iniciar Sesión</button>
   </form>
   <button className="register-btn" onClick={() => props.onFormSwitch('login')}>Ya tengo cuenta</button>
   </div>   

        
    )
}