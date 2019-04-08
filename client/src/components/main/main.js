//Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Componentes
import Taxi from '../images/Taxi.svg';
import '../styles.css';
import Footer from '../footer';

var componentCurrent;

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
            message: "User is not logged",
            isChanged: 0
        }

        fetch('/main')
        .then(res => res.json())
        .then(res => this.setState({message: res.status}))
        .catch(err => console.log(err))

        componentCurrent = 
            <div className="image-wait">
                <h3 className="text-wait">Esperando respuesta...</h3>
            </div>;
    }

    componentDidUpdate() {

        if(this.state.isChanged ===0){

            if(this.state.message === "User is not logged"){

                this.setState({isChanged: 1});

                componentCurrent = 
                <div>
                    <div className="main">
                        <div className="container">
                            <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                        </div>
                        <div className="container box-login">
                            <h1 className="initial-text">
                                Registrate para tener a la mano la mejor opción de transporte.<br/><br/>
                                    ¡Pidelo desde cualquier lugar!
                            </h1>
                            <div>
                                <Link className="login-text" to="/FormDriver">
                                    <button className="button-a">
                                            Registrarse como socio
                                    </button>
                                </Link>
                                <Link className="login-text" to="/FormUser">
                                    <button className="button-a">
                                            Registrarse como usuario
                                    </button>
                                </Link>
                                <Link className="login-text" to="/LoginDriver">
                                    <button className="button-b" >
                                            Inicia sesión como socio
                                    </button>
                                </Link>
                                <Link className="login-text" to="/LoginUser">
                                    <button className="button-b" >
                                            Inicia sesión como usuario
                                    </button>
                                </Link>
                            </div>                                     
                        </div>
                    </div>
                    <Footer />
                </div>
                
            }
            
            if(this.state.message === "User is logged"){
                
                window.location = "/Maps"
            }
        }
    }
    
    render(){

        return componentCurrent;
    }
}

export default Main;
/*

*/