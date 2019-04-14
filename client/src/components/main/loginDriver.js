//Dependencias
import React, { Component } from 'react';
<<<<<<< HEAD
import Popup from 'reactjs-popup';
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
import Taxi from '../images/Taxi.svg';

//Componentes
import '../styles.css';
import Footer from '../footer';

var componentCurrent;

class LoginDriver extends Component{

    constructor(props) {
        super(props);

<<<<<<< HEAD
        this.updateCellphone = this.updateCellphone.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.checkInfo = this.checkInfo.bind(this);

        this.state = {
            Cellphone: "",
            Password: "",
            message: "User is not logged",
            isChanged: 0,
            open: false
=======
        this.state = {
            message: "User is not logged",
            isChanged: 0
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
        }

        fetch('/signin/driver')
        .then(res => res.json())
<<<<<<< HEAD
        .then(res => this.setState({
            message: res.status,
            typeUser: res.typeUser}))
=======
        .then(res => this.setState({message: res.status}))
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
        .catch(err => console.log(err))
        
        componentCurrent = 
            <div className="image-wait">
                <h3 className="text-wait">Esperando respuesta...</h3>   
            </div>;
            
    }

<<<<<<< HEAD
    checkInfo() {

        var flag = 0;
        
        if(this.state.Cellphone.length < 10 || isNaN(this.state.Cellphone)){

            flag = 1;
        }
        if(this.state.Password === ""){
            
            flag = 1;
        }
        
        if(flag === 1){
            this.openModal();
        }
        else {

            var data = {
                Cellphone: this.state.Cellphone,
                Password: this.state.Password
            }

            fetch('/signin/driver', {
                method: 'POST',
                headers: {
                     Accept: "application/json, text/plain, */*",
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(data)
             })
             .then(res => res.json())
             .then(res => this.setState({
                message: res.status, 
                typeUser: res.typeUser}))
             .catch(err => console.log(err))
    

        }
    }

=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
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
<<<<<<< HEAD
                                    <input onChange={this.updateCellphone} className="field-login text-field" type="text" placeholder="Celular"/> 
                                    <input onChange={this.updatePassword} className="field-login text-field" type="password" placeholder="Contraseña"/>  
                                </form>       
                                <button onClick={()=>{

                                    this.checkInfo()
=======
                                    <input className="field-login text-field" id="celular" type="text" placeholder="Celular"/> 
                                    <input className="field-login text-field" id="password" type="password" placeholder="Contraseña"/>  
                                </form>       
                                <button onClick={()=>{
                                    fetch('/signin/driver', {
                                       method: 'POST'
                                    })
                                    .then(res => res.json())
                                    .then(res => this.setState({message: res.status, isChanged: 1}))
                                    .catch(err => console.log(err))
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

                                    }} className="login-button text-field" type="submit">
                                        Iniciar Sesión                                  
                                </button>                                                         
                        </div>                    
                    </div>
                    <Footer />
                </div>

                
            }
            
            if(this.state.message === "User is logged"){
                
<<<<<<< HEAD
                window.location = "/Maps/Driver"
=======
                window.location = "/Maps"
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
            }
            
        }

        if(this.state.isChanged === 1){

<<<<<<< HEAD
            if(this.state.message === "Datos invalidos"){
                this.setState({message: "User is not logged"})
                this.openModal()
            }

            if(this.state.message === "User is logged"){
                
                window.location = "/Maps/" + this.state.typeUser;
=======
            if(this.state.message === "User is logged"){
                
                window.location = "/Maps"
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
            }
        }
    }

<<<<<<< HEAD

    updateCellphone(event) {
        this.setState({
            Cellphone: event.target.value
        });
    }

    updatePassword(event) {
        this.setState({
            Password: event.target.value
        });
    }

    openModal() {
        this.setState({open: true})
    }

    closeModal() {
        this.setState({open: false})
    }

    render(){
        return (
            <div>
                {componentCurrent}
                    <Popup
                    className="container-modal" 
                    open={this.state.open}
                    onClose={this.closeModal}>
                        <div>
                            <h3 className="modal-text">Usuario o contraseña invalidos</h3>
                            <button className="button-modal" onClick={this.closeModal}>Aceptar</button>
                        </div>
                    </Popup> 
            </div>);
=======
    render(){
        return componentCurrent;
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
    }
}

export default LoginDriver;
