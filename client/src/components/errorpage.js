import React, { Component } from 'react';
import './styles.css';

class ErrorPage extends Component{

    render() {
        return(
        <div className="errorPage">
            <p>404 Not found</p>
            <p>La pagina que buscas no se existe.</p>
        </div>);
    }
}

export default ErrorPage;