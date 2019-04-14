import React, { Component } from 'react';
<<<<<<< HEAD
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles.css';
import Estrella from '../images/starYellow.png';
import EstrellaVacia from '../images/star.png';
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

class Driver extends Component{

    constructor(props){
        super(props);

<<<<<<< HEAD
        this.fetchRides = this.fetchRides.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepitpassword = this.updateRepitpassword.bind(this);
        this.checkDelete = this.checkDelete.bind(this);

        this.state = {
            message: "",
            windowOpen : 0,
            Cellphone: this.props.Cellphone,
            User: {
                profile:{
                },
                rides: [],
                start: 1
            }
        }

        fetch('/driver/informacion', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({Cellphone: this.state.Cellphone})
        })
        .then(res => res.json())
        .then(res => this.setState({
            User: {
            profile: res.profile,
            rides: res.rides,
            start: 1
=======
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
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
            }
        }))
        .catch(err => console.log(err));

    }

<<<<<<< HEAD
    componentDidUpdate() {

        if (this.state.message === "User is not logged"){
            window.location = "/"
        }
    }

    fetchRides() {

    }

    updatePassword(event) {
        this.setState({
            inputPassword: event.target.value
        })
    }

    updateRepitpassword(event) {
        this.setState({
            inputRepitpassword: event.target.value
        })
    }

    checkDelete() {

        var flag = 0;

        if(this.state.inputPassword === "" || this.state.inputRepitpassword === "" 
            || this.state.inputPassword != this.state.inputRepitpassword){
            
            flag = 1;
        }

        if(flag === 1){
            this.openModal();
        }
        else {

            var data = {
                Cellphone : this.state.Cellphone,
                Password: this.state.inputPassword
            }

            fetch('/driver/delete', {
                method: 'POST',
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => this.setState({
                message: res.status
            }))
            .catch(err => console.log(err))

        }
    }
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
        
    render() {

        var windowCurrent;

        if(this.state.windowOpen === 0){
            windowCurrent =
                <div className="Container-window">
<<<<<<< HEAD
                <InfiniteScroll
                    className="Scroll"
                    hasMore={false}
                    height={540}
                >
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
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
<<<<<<< HEAD
                                <input className="input-profile" id="cellphone" type="text" placeholder={this.state.Cellphone}/>
=======
                                <input className="input-profile" id="cellphone" type="text" placeholder={this.state.User.profile.celular}/>
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
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
<<<<<<< HEAD
                    <div>
                        <h3 className="title-profile">Eliminar perfil</h3>
                        <div className="fila-profile">
                            <div className="columna-profile">
                                <p className="text-profile">Nueva Contraseña</p>
                                <input onChange={this.updatePassword} className="input-profile" type="password" placeholder="Nueva Contraseña"/>
                            </div>
                            <div className="columna-profile">
                                <p className="text-profile">Repetir Contraseña</p>
                                <input onChange={this.updateRepitpassword} className="input-profile" type="password" placeholder="Repetir Contraseña"/>
                            </div>
                        </div>
                        <div className="container-button"> 
                            <button onClick={this.checkDelete} className="button-profile">
                                Eliminar perfil
                            </button>       
                        </div>
                    </div>
                </InfiniteScroll>
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
                </div>
        }
        else if(this.state.windowOpen === 1){
            
<<<<<<< HEAD
            if(this.state.User.rides.length === 0){
                windowCurrent =
                    <div className="container-Rides">
                        <h3 className="title-rides">Viajes:</h3>
                    </div>
            }
            else {

                windowCurrent =
                    <div className="container-Rides">
                            <h3 className="title-rides">Viajes realizados:</h3>
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
                                            <h3>Fecha del viaje: {ride.fecha_carrera}</h3>
                                            <h3 >Valor: {ride.valor} COP</h3>
                                            <h3>El usuario en este viaje fue: {ride.nombre + " " + ride.apellido}</h3>
                                            <h3>Distancia: {ride.nrokm}</h3>
                                        </div>
                                        <div className="calification-container">
                                            <h3 className="ride-calification">Calificacion: </h3>
                                            {ride.calificacion === 1?
                                                <div>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                </div>
                                                :
                                                ride.calificacion === 2?
                                                <div>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                </div>
                                                :
                                                ride.calificacion === 3?
                                                <div>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={Estrella} width="25px"/>
                                                    <img src={EstrellaVacia} width="25px" />
                                                    <img src={EstrellaVacia} width="25px" />
                                                </div>
                                                :
                                                ride.calificacion === 4?
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
            
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
        }
        else if(this.state.windowOpen === 2){
            
        }
        else if(this.state.windowOpen === 3){
            
<<<<<<< HEAD
            window.location = "/Maps/Driver"
=======
            window.location = "/Maps"
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
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