import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import Footer from '../footer';

var componentCurrent;

class Client extends Component {

    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.updateCellphone = this.updateCellphone.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepitpassword = this.updateRepitpassword.bind(this);
        this.updateNrocard = this.updateNrocard.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);

        this.state = {
            Cellphone: "",
            Name: "",
            Lastname: "",
            Address: "",
            Password: "",
            Repitpassword: "",
            Nrocard: "",
            message: "User is not logged",
            isChanged: 0,
            alert: 0,
            open: false
        }

        fetch('/main')
        .then(res => res.json())
        .then(res => this.setState({message: res.status}))
        .catch(err => console.log(err))

        componentCurrent = 
            <div className="image-wait">
                <h3 className="text-wait">Esperando respuesta...</h3>
            </div>;
    }


    updateName(event) {
        this.setState({
            Name: event.target.value
        });
    }

    updateLastname(event) {
        this.setState({
            Lastname: event.target.value
        });
    }

    updateCellphone(event) {
        this.setState({
            Cellphone: event.target.value
        });
    }

    updateAddress(event) {
        this.setState({
            Address: event.target.value
        });
    }

    updatePassword(event) {
        this.setState({
            Password: event.target.value
        });
    }

    updateRepitpassword(event) {
        this.setState({
            Repitpassword: event.target.value
        });
    }

    updateNrocard(event) {
        this.setState({
            Nrocard: event.target.value
        });
    }

    checkInfo() {

        var flag = 0;

        if(this.state.Name === ""){
            
            flag = 1;
        }
        if(this.state.Lastname === ""){
            
            flag = 1;
        }
        if(this.state.Address === ""){
            
            flag = 1;
        }
        if(this.state.Cellphone.length < 10 || isNaN(this.state.Cellphone)){
            
            flag = 1;
        }
        if (this.state.Nrocard.length < 15 || isNaN(this.state.Nrocard)){
            
            flag = 1;
        }
        if(this.state.Password === "" || this.state.Repitpassword === "" || this.state.Password != this.state.Repitpassword){
            
            flag = 1;
        }

        if(flag === 1){
            this.openModal();
        }
        else {

            var data = {
                Cellphone: this.state.Cellphone,
                Name: this.state.Name,
                Lastname: this.state.Lastname,
                Address: this.state.Address,
                Password: this.state.Password,
                Nrocard: this.state.Nrocard,
            }

            fetch('/signup/user', {
                method: 'post',
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => this.setState({message: res.status}))
            .catch(err => console.log(err))
            
        }

    }

    openModal() {
        this.setState({open: true})
    }

    closeModal() {
        this.setState({open: false})
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
                            <input onChange={this.updateName} className="field name text-field" type="text" placeholder="Nombre"/>
                            <input onChange={this.updateLastname} className="field name text-field" type="text" placeholder="Apellido"/>
                            <input onChange={this.updateCellphone} className="field other text-field" type="text" placeholder="Celular"/>
                            <input onChange={this.updateAddress} className="field other text-field" type="text" placeholder="Dirección"/>
                            <input onChange={this.updateNrocard} className="field other text-field" type="text" placeholder="Número de tarjeta"/>                  
                            <input onChange={this.updatePassword} className="field other text-field" type="password" placeholder="Contraseña"/>  
                            <input onChange={this.updateRepitpassword} className="field other text-field" type="password" placeholder="Repetir contraseña"/>  
                        </form>   
                        <button onClick={() => {
                            this.checkInfo()
                        }} className="button-forms">
                            Continuar
                        </button>                 
                    </div>
                    <Footer />
                </div> 
                
            }
            
            if(this.state.message === "User is logged"){
                
                window.location = "/Maps/" + this.state.typeUser;
            }
        }

        if(this.state.isChanged === 1){

            if(this.state.message === "Celular en uso"){
                this.setState({message: "User is not logged"})
                this.openModal()
            }

            if(this.state.message === "User is logged"){
                
                window.location = "/Maps/" + this.state.typeUser;
            }
        }
        
    }

    render() {
        return (
            <div>
                {componentCurrent}
                <Popup
                    className="container-modal" 
                    open={this.state.open}
                    closeOnDocumentClick={false}
                    onClose={this.closeModal}>
                        <div>
                            <h3 className="modal-text">Datos erroneos, ingresa los datos correctamente</h3>
                            <button className="button-modal" onClick={this.closeModal}>Aceptar</button>
                        </div>
                    </Popup> 
            </div>);
    }
}

export default Client;
