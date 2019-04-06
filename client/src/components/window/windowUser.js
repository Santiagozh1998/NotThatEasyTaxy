import React, { Component } from 'react';
import '../styles.css';

class WindowUser extends Component{

    constructor(props) {
        super(props);

        this.state = {
            windowOpen : 0
        }
    }


    render() {

        var windowCurrent;
        
        if(this.state.windowOpen === 0) {
            windowCurrent =
                <div className="Container-window">
                    <h3 className="title-profile">Información de la cuenta</h3>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Nombre</p>
                                <input className="input-profile" id="name" type="text" placeholder="Nombre"/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Apellidos</p>
                                <input className="input-profile" id="last-name" type="text" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Celular</p>
                                <input className="input-profile" id="cellphone" type="text" placeholder="Celular"/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Vieja Contraseña</p>
                                <input className="input-profile" id="old-password" type="password" placeholder="Contraseña"/>
                            </div>
                        </div>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Nueva Contraseña</p>
                                <input className="input-profile" id="new-password" type="password" placeholder="Nueva Contraseña"/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Repetir Contraseña</p>
                                <input className="input-profile" id="repitnew-password" type="password" placeholder="Repetir Contraseña"/>
                            </div>
                        </div>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Dirección</p>
                                <input className="input-profile" id="address" type="text" placeholder="Dirección"/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Número de tarjeta</p>
                                <input className="input-profile" id="nrocard" type="text" placeholder="Número de tarjeta"/>
                            </div>
                        </div>
                    <div className="container-button"> 
                        <button className="button-profile">
                            Actualizar
                        </button>       
                    </div>
                </div>
        }
        else if (this.state.windowOpen === 1){

            windowCurrent = 
                <div>
                    
                </div>
        }
        else if (this.state.windowOpen === 2){

            window.location = "/Maps"
        }

        
        return(
            <div>
                <div className="Container-Main">
                    <div className="Container-Options">
                        <button onClick={()=>{
                            this.setState({windowOpen: 0});

                        }} className="button-options">Perfil</button>
                        <button onClick={()=>{
                            this.setState({windowOpen: 1});
                        }} className="button-options">Mis viajes</button>
                        <button onClick={()=>{
                            this.setState({windowOpen: 2}); 
                        }} className="button-options">Pedir un viaje</button>
                    </div>
                    {windowCurrent}
                </div>
            </div>
        );
    }
}

export default WindowUser;