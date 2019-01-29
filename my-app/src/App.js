//Dependencias
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';

//Componentes
import Main from './components/Main/main';
import Login from './components/Login/login';
import Navigation from './components/navigation';
import Footer from './components/footer';
import FormClient from './components/Forms/client';
import FormDriver from './components/Forms/driver';

class App extends Component{
  render() {
    return(
      <div>
        <Navigation />
        <Router>
        <div> 
          <Route path="/" exact render={
            () => {
              return (<Main />);
            }
          }/>
          <Route path="/Login" exact render={
            () => {
              return (<Login />);
            }
          }/>
          <Route path="/FormClient" exact render={
            () => {
              return (<FormClient />);
            }
          }/>
          <Route path="/FormDriver" exact render={
            () => {
              return (<FormDriver />);
            }
          }/>
        </div>        
      </Router>
      <Footer />
      </div>
      
    );
  }
}

export default App;

