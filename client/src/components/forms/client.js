import React, { Component } from 'react';
import '../styles.css';
import Footer from '../footer';

var componentCurrent;

class Client extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "User is not logged",
            isChanged: 0
        }

        fetch('/signup')
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
                    <div className="container-forms"> 
                        <h1 className="text-forms">Registrate para continuar</h1> 
                        <form className="form-users">                                       
                            <input className="field name text-field" id="name" type="text" placeholder="Nombre"/>
                            <input className="field name text-field" id="last-name" type="text" placeholder="Apellido"/>
                            <input className="field other text-field" id="cellphone" type="text" placeholder="Celular"/>
                            <input className="field other text-field" id="address" type="text" placeholder="Dirección"/>
                            <input className="field other text-field" id="nrocard" type="text" placeholder="Número de tarjeta"/>                  
                        </form>   
                        <button className="button-forms">
                            Continuar
                        </button>                 
                    </div> 
                    <Footer />
                </div> 
                
            }
            
            if(this.state.message === "User is logged"){
                
                window.location = "/Maps"
            }
        }
    }

    render() {
        return componentCurrent;
    }
}

export default Client;
