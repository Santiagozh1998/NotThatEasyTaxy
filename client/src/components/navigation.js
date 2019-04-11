//Dependencias
import React, { Component } from 'react';
import Popup from 'reactjs-popup';

//Componentes
import './styles.css';

class Navigation extends Component{

    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            message: '',
            typeUser: '',
            modal: {
                open: false
            }
        }   

        fetch('/navbar')
        .then(res => res.json())
        .then(res => this.setState({
            message: res.status,
            typeUser: res.typeUser}))
    }

    openModal() {
        this.setState({
            modal: {
                open: true
            }
        })
    }

    closeModal() {
        this.setState({
            modal: {
                open: false
            }
        })
    }

    render() {

        var buttonOption;

        if(this.state.message === 'User is not logged')
        {
            buttonOption =
                <p  className="navbar-option navbar-container" onClick={() => {
                    this.openModal()
                }}>Inicia sesión</p>
        }
        else {
            
            buttonOption =
                <div className="navbar-container-signin">
                    <p className="navbar-option" onClick={() => {

                        

                        console.log(this.state.typeUser)

                        if(this.state.typeUser === "User"){
                            window.location = '/Main/User'
                        }

                        if(this.state.typeUser === "Driver"){
                            window.location = '/Main/Driver'
                        }
                        
                    }}>Menu</p>
                    <p className="navbar-option" onClick={() => {
                        fetch('/logout', {
                            method: 'POST'
                        })
                        .then(res => res.json())
                        .then(res => this.setState({message: res.status}))

                        window.location = '/'
                    }}>Cierra sesión</p>
                </div>
                
        }

        return(
            <div>
                <nav className='navbar'>
                    <a className="titlePage" href="/">
                        NotThatEasyTaxy             
                    </a>       
                    {buttonOption}   
                </nav>
                <Popup
                    className="container-modal"
                    open={this.state.modal.open}
                    onClose={this.closeModal}>
                    <div>
                        <h3 className="modal-text">Iniciar sesión</h3>
                        <button className="button-modal" onClick={() => {
                            window.location = "/Login/Driver"
                        }}>Inicia sesión como socio</button>
                        <button className="button-modal" onClick={() => {
                            window.location = "/Login/User"
                        }}>Inicia sesión como usuario</button>
                    </div>
                </Popup>
            </div>

        
        );
    }
}

export default Navigation;