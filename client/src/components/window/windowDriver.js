import React, { Component } from 'react';
import Driver from './Driver';

var componentCurrent;

class WindowDriver extends Component {

    constructor() {
        super()

        this.state ={
            message: "User is not logged",
<<<<<<< HEAD
            typeUser: "",
            isChanged: 0,
            Cellphone: ""
        }
        
        fetch('/maps/Driver')
        .then(res => res.json())
        .then(res => this.setState({
          message: res.status,
          typeUser: res.typeUser,
          Cellphone: res.Cellphone}))
=======
            isChanged: 0,
        }
        
        fetch('/maps')
        .then(res => res.json())
        .then(res => this.setState({message: res.status}))
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
        .catch(err => console.log(err))

        componentCurrent =
        <div className="image-wait">
          <h3 className="text-wait">Esperando respuesta...</h3>
        </div>;

    }

    componentDidUpdate () {   
    
      if(this.state.isChanged === 0)
      {
          if(this.state.message === "User is logged")
          {
<<<<<<< HEAD
            if(this.state.typeUser === "Driver"){

              this.setState({isChanged: 1});
             componentCurrent = <Driver  Cellphone={this.state.Cellphone}/>
            }
            else {
                
                window.location = "/Main/" + this.state.typeUser;
            }   
            
=======
            this.setState({isChanged: 1});
             componentCurrent = <Driver />
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
          }
          
          if (this.state.message === "User is not logged") {
    
            window.location = "/"
          }
      }       
        
    }


    render() {

        return componentCurrent;
    }
}

export default WindowDriver;