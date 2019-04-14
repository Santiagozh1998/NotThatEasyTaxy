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
            typeUser: "",
            isChanged: 0
        }

        fetch('/main')
        .then(res => res.json())
        .then(res => this.setState({
            message: res.status,
            typeUser: res.typeUser}))
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
<<<<<<< HEAD
                                <Link className="login-text" to="/Form/Driver">
=======
                                <Link className="login-text" to="/FormDriver">
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
                                    <button className="button-a">
                                            Registrarse como socio
                                    </button>
                                </Link>
                                <Link className="login-text" to="/Form/User">
                                    <button className="button-a">
                                            Registrarse como usuario
                                    </button>
                                </Link>
<<<<<<< HEAD
                                <Link className="login-text" to="/Login/Driver">
=======
                                <Link className="login-text" to="/LoginDriver">
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
                                    <button className="button-b" >
                                            Inicia sesión como socio
                                    </button>
                                </Link>
<<<<<<< HEAD
                                <Link className="login-text" to="/Login/User">
=======
                                <Link className="login-text" to="/LoginUser">
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
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
                
                if(this.state.typeUser === "User"){

                    window.location = "/Maps/User"
                }
                else {

                    window.location = "/Maps/Driver"
                }
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