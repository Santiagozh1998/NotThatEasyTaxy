import React, { Component } from 'react';
import Maps from './Maps';

var componentCurrent;

class WindowMap extends Component {

    constructor() {
        super()

        this.state ={
            message: "User is not logged",
            isChanged: 0,
        }
        
        fetch('/maps')
        .then(res => res.json())
        .then(res => this.setState({message: res.status}))
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
            this.setState({isChanged: 1});
             componentCurrent = <Maps />
          }
          
          if (this.state.message === "User is not logged") {
    
            window.location = "/Login"
          }
      }       
        
    }


    render() {

        return componentCurrent;
    }
}

export default WindowMap;