import React, { Component } from 'react';
import Maps from './MapsD';

var componentCurrent;

class DriverMap extends Component {

    constructor() {
        super()

        this.state ={
            message: "User is not logged",
            typeUser: '',
            isChanged: 0,
        }
        
        fetch('/maps/driver')
        .then(res => res.json())
        .then(res => this.setState({
            message: res.status,
            typeUser: res.typeUser}))
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
                if(this.state.typeUser === "Driver"){

                    this.setState({isChanged: 1});
                    componentCurrent = <Maps />
                }
                else {
                    
                    window.location = "/Maps/" + this.state.typeUser;
                }              
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
  
  export default DriverMap;