import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import Footer from '../footer';

var componentCurrent;

class Driver extends Component {

    constructor(props) {
        super(props);

        this.updateCellphone = this.updateCellphone.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateDay = this.updateDay.bind(this);
        this.updateMonth = this.updateMonth.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.updateDocumenttype = this.updateDocumenttype.bind(this);
        this.updateNrodocument = this.updateNrodocument.bind(this)
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRepitpassword = this.updateRepitpassword.bind(this);
        this.updatePlaca = this.updatePlaca.bind(this);
        this.updateModelo = this.updateModelo.bind(this);
        this.updateBaul = this.updateBaul.bind(this);
        this.updateCarYear = this.updateCarYear.bind(this);
        this.updateSoat = this.updateSoat.bind(this);
        this.updateMarca = this.updateMarca.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);

        this.state = {
            Cellphone: "",
            Name: "",
            Lastname: "",
            Address: "",
            Day: "",
            Month: "",
            Year: "",
            Password: "",
            Repitpassword: "",
            Documenttype: "",
            Nrodocument: "",
            Placa: "",
            Modelo: "",
            Baul: "",
            CarYear: "",
            Soat: "",
            Marca: "",
            message: "User is not logged",
            isChanged: 0,
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

    componentDidUpdate() {

        if(this.state.isChanged ===0){

            if(this.state.message === "User is not logged"){

                this.setState({isChanged: 1});

                componentCurrent = 
                <div>
                    <div className="container-forms"> 
                        <h3 className="text-forms">Registrate para continuar</h3> 
                        <form className="form-users">                                       
                            <input onChange={this.updateName} className="field name text-field" type="text" placeholder="Nombre"/>
                            <input onChange={this.updateLastname} className="field name text-field" type="text" placeholder="Apellido"/>
                            <input onChange={this.updateCellphone} className="field other text-field" type="text" placeholder="Celular"/>
                            <input onChange={this.updateAddress} className="field other text-field" type="text" placeholder="Dirección"/>
                            <input onChange={this.updateDocumenttype} className="field other text-field" type="text" placeholder="Tipo de identificación"/>
                            <input onChange={this.updateNrodocument} className="field other text-field" type="text" placeholder="Número de identificación"/>
                            <div>
                                <h3 className="text-forms">Fecha de nacimiento</h3>
                                <input onChange={this.updateDay} className="field date text-field" type="text" placeholder="Día"/>
                                <input onChange={this.updateMonth} className="field date text-field" type="text" placeholder="Mes"/>
                                <input onChange={this.updateYear} className="field date text-field" type="text" placeholder="Año"/>
                            </div>
                            <input onChange={this.updatePassword} className="field other text-field" type="password" placeholder="Contraseña"/>  
                            <input onChange={this.updateRepitpassword} className="field other text-field" type="password" placeholder="Repetir contraseña"/>  
                            <div>
                                <h3 className="text-forms">Registro de taxi</h3> 
                                <input onChange={this.updatePlaca} className="field other text-field" type="text" placeholder="Placa"/>
                                <input onChange={this.updateModelo} className="field other text-field" type="text" placeholder="Modelo"/>
                                <input onChange={this.updateBaul} className="field other text-field" type="text" placeholder="Baul"/>
                                <input onChange={this.updateCarYear} className="field other text-field" type="text" placeholder="Año"/>
                                <input onChange={this.updateSoat} className="field other text-field" type="text" placeholder="Soat"/>
                                <input onChange={this.updateMarca} className="field other text-field" type="text" placeholder="Marca"/>
                            </div>
                        </form>                    
                        <button onClick={() => {
                            this.checkInfo();
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


    updateCellphone(event) {
        this.setState({
            Cellphone: event.target.value
        });
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
    
    updateAddress(event) {
        this.setState({
            Address: event.target.value
        })
    }
    
    updateDay(event) {
        this.setState({
            Day: event.target.value
        });
    }

    updateMonth(event) {
        this.setState({
            Month: event.target.value
        });
    }

    updateYear(event) {
        this.setState({
            Year: event.target.value
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
    updateDocumenttype(event) {
        this.setState({
            Documenttype: event.target.value
        });
    }
    
    
    updateNrodocument(event) {
        this.setState({
            Nrodocument: event.target.value
        });
    } 

    updatePlaca(event) {
        this.setState({
            Placa: event.target.value
        });
    }

    updateModelo(event) {
        this.setState({
            Modelo: event.target.value
        });
    }

    updateBaul(event) {
        this.setState({
            Baul: event.target.value
        });
    }

    updateCarYear(event) {
        this.setState({
            CarYear: event.target.value
        });
    }

    updateSoat(event) {
        this.setState({
            Soat: event.target.value
        });
    }

    updateMarca(event) {
        this.setState({
            Marca: event.target.value
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
		if(this.state.Day === "" || isNaN(this.state.Day)){
            
            flag = 1;
		}
        if(this.state.Month === "" || isNaN(this.state.Month)){
            
            flag = 1;
		}
		if(this.state.Year === "" || isNaN(this.state.Year)){
            
            flag = 1;
		}
		if(this.state.Documenttype === ""){
            
            flag = 1;
		}
		if(this.state.Nrodocument === "" || isNaN(this.state.Nrodocument)){
            
            flag = 1;
		}
        if(this.state.Cellphone.length < 10 || isNaN(this.state.Cellphone)){
            
            flag = 1;
        }
        if(this.state.Password === "" || this.state.Repitpassword === "" || this.state.Password != this.state.Repitpassword){
            
            flag = 1;
        }
        if(this.state.Placa === ""){

            flag = 1;
        }
        if(this.state.Modelo === ""){
            
            flag = 1;
        }
        if(this.state.Baul === ""){
            
            flag = 1;
        }
        if(this.state.CarYear === ""){
            
            flag = 1;
        }
        if(this.state.Placa === ""){
            
            flag = 1;
        }
        if(this.state.Soat === ""){
            
            flag = 1;
        }
        if(this.state.Marca === ""){
            
            flag = 1;
        }

        console.log(
            {Cellphone: this.state.Cellphone,
            Name: this.state.Name,
            Lastname: this.state.Lastname,
            Address: this.state.Address,
            Day: this.state.Day,
            Month: this.state.Month,
            Year: this.state.Year,
            Password: this.state.Password,
            Documenttype: this.state.Documenttype,
            Nrodocument: this.state.Nrodocument,
            Placa: this.state.Placa,
            Modelo: this.state.Modelo,
            Baul: this.state.Baul,
            CarYear: this.state.CarYear,
            Soat: this.state.Soat,
            Marca: this.state.Marca,
        });

        if(flag === 1){
            this.openModal();
        }
        else {

            var data = {
                Cellphone: this.state.Cellphone,
                Name: this.state.Name,
                Lastname: this.state.Lastname,
                Address: this.state.Address,
				Day: this.state.Day,
				Month: this.state.Month,
				Year: this.state.Year,
				Password: this.state.Password,
				Documenttype: this.state.Documenttype,
                Nrodocument: this.state.Nrodocument,
                Placa: this.state.Placa,
                Modelo: this.state.Modelo,
                Baul: this.state.Baul,
                CarYear: this.state.CarYear,
                Soat: this.state.Soat,
                Marca: this.state.Marca,
            }

            fetch('/signup/driver', {
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

export default Driver;
