//Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Taxi from '../images/Taxi.svg';
import './main.css';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="container">
                    <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                </div>
                <div className="container form-box">
                    <h1 className="initial-text">
                    Registrate para tener a la mano la mejor opción de transporte.<br/><br/>
                        ¡Pidelo desde cualquier lugar!
                    </h1>
                    <div className="container-buttons">
                        <Link className="login-text" to="/FormClient">
                            <button className="button-a">
                                Registrarse como socio
                            </button>
                        </Link>
                        <Link className="login-text" to="/FormDriver">
                            <button className="button-a">
                                Registrarse como usuario
                            </button>
                        </Link>
                        <Link className="login-text" to="/Login">
                            <button className="button-b" >
                                ¿Tienes una cuenta? Inicia sesión?
                            </button>
                        </Link>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Main;