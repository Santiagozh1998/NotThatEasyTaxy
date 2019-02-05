import React, { Component } from 'react';
import './styles.css'


class Driver extends Component {
    render() {
        return(
            <div className="container-forms"> 
                <h1 className="text-forms">Registrate para continuar</h1> 
                <form className="form-users">                                       
                    <input className="field name text-field" id="name" type="text" placeholder="Nombre"/>
                    <input className="field name text-field" id="last-name" type="text" placeholder="Apellido"/>
                    <input className="field other text-field" id="email" type="email" placeholder="Correo electrónico"/>
                    <input className="field other text-field" id="cellphone" type="text" placeholder="Celular"/>
                    <input className="field other text-field" id="address" type="text" placeholder="Dirección"/>
                    <input className="field date" id="birthday" type="date"/>
                    <input className="button-forms" type="submit" value="Enviar"/>
                </form>                    
            </div>  
        );
    }
}

export default Driver;