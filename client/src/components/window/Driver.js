import React, { Component } from 'react';

class Driver extends Component{

    constructor(props){
        super(props);

        this.state = {
            windowOpen: 0,
            User: {
                profile:{
                    celular: '',
                    nombre: '',
                    apellido: '',
                    nacimiento: '',
                    direccion: '',
                    password: '',
                    tipodocumento: '',
                    nrodocumento: 0
                }
            }
        }

        fetch('/driver/informacion')
        .then(res => res.json())
        .then(res => this.setState({
            User: {
            profile: res.profile
            }
        }))
        .catch(err => console.log(err));

    }

        
    render() {

        var windowCurrent;

        if(this.state.windowOpen === 0){
            windowCurrent =
                <div className="Container-window">
                    <h3 className="title-profile">Información de la cuenta</h3>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Nombre</p>
                                <input className="input-profile" id="name" type="text" placeholder={this.state.User.profile.nombre}/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Apellidos</p>
                                <input className="input-profile" id="last-name" type="text" placeholder={this.state.User.profile.apellido}/>
                            </div>
                        </div>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Celular</p>
                                <input className="input-profile" id="cellphone" type="text" placeholder={this.state.User.profile.celular}/>
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
                                <input className="input-profile" id="address" type="text" placeholder={this.state.User.profile.direccion}/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Fecha de nacimiento</p>
                                <p>{this.state.User.profile.nacimiento}</p>
                            </div>
                        </div>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Tipo de documento</p>
                                <input className="input-profile" id="tipodocumento" type="text" placeholder={this.state.User.profile.tipodocumento}/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Numero de documento</p>
                                <input className="input-profile" id="nrodocumento" type="text" placeholder={this.state.User.profile.nrodocumento}/>
                            </div>
                        </div>
                    <div className="container-button"> 
                        <button className="button-profile">
                            Actualizar
                        </button>       
                    </div>
                </div>
        }
        else if(this.state.windowOpen === 1){
            
        }
        else if(this.state.windowOpen === 2){
            
        }
        else if(this.state.windowOpen === 3){
            
            window.location = "/Maps"
        }


        return(
            <div>
                <div className="Container-Main">
                    <div className="Container-Options">
                        <button id="button-perfil" onClick={()=>{
                            this.setState({windowOpen: 0});

                        }} className="button-options">Perfil</button>
                        <button id="button-viajes" onClick={()=>{
                            this.setState({windowOpen: 1});

                        }} className="button-options">Viajes realizados</button>
                        <button id="button-vehiculos" onClick={()=>{
                            this.setState({windowOpen: 2});

                        }} className="button-options">Mis vehiculos</button>
                        <button onClick={()=>{
                            this.setState({windowOpen: 3}); 
                        }} className="button-options">Ir al mapa</button>
                    </div>
                    {windowCurrent}
                </div>
            </div>
        );
    }
}

export default Driver;