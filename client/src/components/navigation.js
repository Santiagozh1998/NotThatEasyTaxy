//Dependencias
import React, { Component } from 'react';

//Componentes
import './styles.css';

class Navigation extends Component{


    render() {
        return(
            <div>
                <nav className='navbar'>
                    <a className="titlePage" href="/">
                        NotThatEasyTaxy             
                    </a>          
                </nav>
            </div>

        
        );
    }
}

export default Navigation;