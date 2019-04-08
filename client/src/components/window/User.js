import React, { Component } from 'react';
import '../styles.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Estrella from '../images/starYellow.png';
import EstrellaVacia from '../images/star.png';

class User extends Component{

    constructor(props) {
        super(props);


        this.state = {
            windowOpen : 0,
            User: {
                profile:{
                    celular: '',
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    password: '',
                    nrotarjeta: ''
                },
                rides: [],
                start: 1
            }
        }

        fetch('/user/informacion')
        .then(res => res.json())
        .then(res => this.setState({
            User: {
            profile: res.profile,
            rides: res.rides,
            start: 1
            }
        }))
        .catch(err => console.log(err));


    }

    fetchRides() {

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
                                <p className="text-profile">Número de tarjeta</p>
                                <input className="input-profile" id="nrocard" type="text" placeholder={this.state.User.profile.nrotarjeta}/>
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

            if(this.state.User.rides.length === 0){
                windowCurrent =
                    <div className="container-Rides">
                        <h3 className="title-rides">Viajes:</h3>
                    </div>
            }
            else {

                windowCurrent =
                <div className="container-Rides">
                    <h3 className="title-rides">Viajes:</h3>
                    <InfiniteScroll
                        className="Scroll"
                        dataLength={this.state.User.rides.length}
                        next={this.fetchRides}
                        hasMore={true}
                        loader={<h3>Loading... </h3>}
                        height={480}
                    >
                        {this.state.User.rides.map(ride => (
                            <div className="Ride" key={ride.id}>
                                <div className="ride-informacion">
                                    <h3>Fecha del viaje: {ride.Fecha}</h3>
                                    <h3 >Valor: {ride.Valor} COP</h3>
                                    <h3>Tu conductor en este viaje fue: {ride.Conductor}</h3>
                                    <h3>Distancia: {ride.Kilometros}</h3>
                                </div>
                                <div className="calification-container">
                                    <h3 className="ride-calification">Calificacion: </h3>
                                    {ride.Calificacion === 1?
                                        <div>
                                            <img src={Estrella} width="25px"/>
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                        </div>
                                        :
                                        ride.Calificacion === 2?
                                        <div>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                        </div>
                                        :
                                        ride.Calificacion === 3?
                                        <div>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={EstrellaVacia} width="25px" />
                                            <img src={EstrellaVacia} width="25px" />
                                        </div>
                                        :
                                        ride.Calificacion === 4?
                                        <div>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={EstrellaVacia} width="25px" />
                                        </div>
                                        :
                                        <div>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                            <img src={Estrella} width="25px"/>
                                        </div>

                                    }
                                </div>
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>

            }

        }
        else if (this.state.windowOpen === 2){

            window.location = "/Maps"
        }

        
        return(
            <div>
                <div className="Container-Main">
                    <div className="Container-Options">
                        <button id="button-perfil" onClick={()=>{
                            this.setState({windowOpen: 0});
                            document.getElementById("button-viajes").style.background = "white";
                            document.getElementById("button-viajes").style.color = "#273036";
                            document.getElementById("button-perfil").style.background = "#273036";
                            document.getElementById("button-perfil").style.color = "white";

                        }} className="button-options">Perfil</button>
                        <button id="button-viajes" onClick={()=>{
                            this.setState({windowOpen: 1});
                            document.getElementById("button-perfil").style.background = "white";
                            document.getElementById("button-perfil").style.color = "#273036";
                            document.getElementById("button-viajes").style.background = "#273036";
                            document.getElementById("button-viajes").style.color = "white";

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

export default User;