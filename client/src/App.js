//Dependencias
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//Componentes
import Navigation from './components/navigation';
import Main from './components/main/main';
import LoginDriver from './components/main/loginDriver';
import LoginUser from './components/main/loginUser';
import FormClient from './components/forms/client';
import FormDriver from './components/forms/driver';
import DriverMap from './components/map/DriverMap';
import UserMap from './components/map/UserMap';
import WindowDriver from './components/window/windowDriver';
import WindowUser from './components/window/windowUser';
import ErrorPage from './components/errorpage';


export default class App extends Component {


    render() {
      return(
        <div>
          <Navigation/> 
            <Router>
              <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/Login/Driver" component={LoginDriver}/>
                  <Route exact path="/Login/User" component={LoginUser}/>
                  <Route exact path="/Form/User" component={FormClient}/>
                  <Route exact path="/Form/Driver" component={FormDriver}/>
                  <Route exact path="/Maps/Driver" component={DriverMap}/>
                  <Route exact path="/Maps/User" component={UserMap}/>
                  <Route exact path="/Main/Driver" component={WindowDriver}/>
                  <Route exact path="/Main/User" component={WindowUser}/>    
                  <Route component={ErrorPage}/>
              </Switch>
            </Router>
        </div>      
      );
    }

};
