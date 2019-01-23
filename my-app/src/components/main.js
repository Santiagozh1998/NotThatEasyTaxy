import React, { Component } from 'react';
import Taxi from './images/Taxi.svg';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="container">
                    <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                </div>
                <div className="container form-box">
                    <h1 className="initial-text">
                        Registrate para tener a la mano la mejor opcionón de transporte.<br/><br/>
                        ¡Pidelo desde cualquier lugar!
                    </h1>
                    <div className="container-buttons">
                        <button className="button-a">Registrarse como socio</button>
                        <button className="button-a">Registrarse como usuario</button>
                        <button className="button-b">¿Tienes una cuenta? Inicia sesión</button>   
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Main;