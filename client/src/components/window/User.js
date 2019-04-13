import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Estrella from '../images/starYellow.png';
import EstrellaVacia from '../images/star.png';

class User extends Component{

    constructor(props) {
        super(props);

        this.updateCellphone = this.updateCellphone.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateOldpassword = this.updateOldpassword.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepitpassword = this.updateRepitpassword.bind(this);
        this.updateNrocard = this.updateNrocard.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.checkDelete = this.checkDelete.bind(this);

        this.state = {
            message: "",
            windowOpen : 0,
            Cellphone: this.props.Cellphone,
            User: {
                profile:{
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    password: '',
                    nrotarjeta: ''
                },
                rides: [],
                start: 1
            },
            inputCellphone: '',
            inputName: '',
            inputLastname: '',
            inputAddress: '',
            inputOldpassword: '',
            inputPassword: '',
            inputRepitpassword: '',
            inputNrocard: '',
            open: false
        }

        fetch('/user/informacion', {
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
            }
        }))
        .catch(err => console.log(err));


    }

    componentDidUpdate() {

        if(this.state.message === "Incorect password"){
            this.setState({
                message: ""
            })
            this.openModal()
        }

        if (this.state.message === "User is not logged"){
            window.location = "/"
        }
    }

    fetchRides() {

    }

    updateCellphone(event) {
        this.setState({
            inputCellphone: event.target.value
        })
    }

    updateName(event) {
        this.setState({
            inputName: event.target.value
        })
    }

    updateLastname(event) {
        this.setState({
            inputLastname: event.target.value
        })
    }

    updateAddress(event) {
        this.setState({
            inputAddress: event.target.value
        })
    }

    updateOldpassword(event) {
        this.setState({
            inputOldpassword: event.target.value
        })
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

    updateNrocard(event) {
        this.setState({
            inputNrocard: event.target.value
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

            fetch('/user/delete', {
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

    openModal() {
        this.setState({
            open: true
        })
    }

    closeModal() {
        this.setState({
            open: false
        })
    }

    render() {

        var windowCurrent;
        
        if(this.state.windowOpen === 0) {
            windowCurrent =
                <div className="Container-window">
                <InfiniteScroll
                    className="Scroll"
                    hasMore={false}
                    height={540}
                >
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
                                <input className="input-profile" id="cellphone" type="text" placeholder={this.state.Cellphone}/>
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
                                    <h3>Fecha del viaje: {ride.fecha_carrera}</h3>
                                    <h3 >Valor: {ride.valor} COP</h3>
                                    <h3>Tu conductor en este viaje fue: {ride.nombre + " " + ride.apellido}</h3>
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

        }
        else if (this.state.windowOpen === 2){

            window.location = "/Maps/User"
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
                    <Popup
                    className="container-modal" 
                    open={this.state.open}
                    onClose={this.closeModal}>
                        <div>
                            <h3 className="modal-text">Datos invalidos</h3>
                            <button className="button-modal" onClick={this.closeModal}>Aceptar</button>
                        </div>
                    </Popup> 
                </div>
            </div>
        );
    }
}

export default User;