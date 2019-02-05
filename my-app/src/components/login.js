//Dependencias
import React, { Component } from 'react';
import Taxi from './images/Taxi.svg';

//Componentes
import './styles.css';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="container">
                    <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                </div>
                <div className="container box-login">
                        <h1 className="login-title">Iniciar Sesión</h1>
                        <form className="form-login">
                            <input className="field-login" id="email" type="email" placeholder="Correo electrónico"/> 
                            <input className="field-login" id="password" type="password" placeholder="Contraseña"/>  
                            <input className="login-button" type="submit" value="Iniciar Sesión"/>
                        </form>                                                                
                </div>
                
            </div>
        );
    }
}

export default Main;
