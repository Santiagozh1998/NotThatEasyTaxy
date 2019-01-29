//Dependencias
import React, { Component } from 'react';
import Taxi from '../images/Taxi.svg';
import './login.css';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="container">
                    <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                </div>
                <div className="container form-box">
                    <div>
                        <p className="login-title">Iniciar Sesión</p>
                        <form className="form-login">
                            <p className="login-text">Correo electrónico</p>
                            <input className="field" id="email" type="email" placeholder="Correo electrónico"/>
                            <p className="login-text">Contraseña</p>  
                            <input className="field" id="password" type="password" placeholder="Contraseña"/>  
                        </form> 
                    </div>                                                
                    <button className="login-button">Iniciar Sesión</button>                   
                </div>
                
            </div>
        );
    }
}

export default Main;

/*
<div className="container form-box">
                    <h1 className="initial-text">
                    Registrate para tener a la mano la mejor opción de transporte.<br/><br/>
                        ¡Pidelo desde cualquier lugar!
                    </h1>
                    <div className="container-buttons">
                        <button className="button-a">Registrarse como socio</button>
                        <button className="button-a">Registrarse como usuario</button>
                        <button className="button-b">¿Tienes una cuenta? Inicia sesión</button>   
                    </div>                    
                </div>
 */