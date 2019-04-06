//Dependencias
import React, { Component } from 'react';
import Taxi from '../images/Taxi.svg';

//Componentes
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

        fetch('/signin')
        .then(res => res.json())
        .then(res => this.setState({message: res.status}))
        .catch(err => console.log(err))
        
        componentCurrent = 
            <div className="image-wait">
                <h3 className="text-wait">Esperando respuesta...</h3>   
            </div>;
            
    }

    componentDidUpdate() {
        
        if(this.state.isChanged === 0){

            if(this.state.message === "User is not logged"){

                this.setState({isChanged: 1});
                componentCurrent =
                <div>
                    <div className="main">
                        <div className="container">
                            <img className="image-taxi" src={Taxi} alt="Taxi" width="300"/>
                        </div>
                        <div className="container box-login">
                                <h1 className="login-title">Iniciar Sesión</h1>
                                <form className="form-login">
                                    <input className="field-login text-field" id="celular" type="text" placeholder="Celular"/> 
                                    <input className="field-login text-field" id="password" type="password" placeholder="Contraseña"/>  
                                </form>       
                                <button onClick={()=>{
                                    fetch('/signin', {
                                       method: 'POST'
                                    })
                                    .then(res => res.json())
                                    .then(res => this.setState({message: res.status, isChanged: 1}))
                                    .catch(err => console.log(err))

                                    }} className="login-button text-field" type="submit">
                                        Iniciar Sesión                                  
                                </button>                                                         
                        </div>                    
                    </div>
                    <Footer />
                </div>

                
            }
            
            if(this.state.message === "User is logged"){
                
                window.location = "/Maps"
            }
            
        }

        if(this.state.isChanged === 1){

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
