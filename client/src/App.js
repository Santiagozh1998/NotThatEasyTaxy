//Dependencias
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//Componentes
import Navigation from './components/navigation';
import Main from './components/main/main';
import Login from './components/main/login';
import FormClient from './components/forms/client';
import FormDriver from './components/forms/driver';
import WindowMaps from './components/map/windowMap';
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
                  <Route exact path="/Login" component={Login}/>
                  <Route exact path="/FormUser" component={FormClient}/>
                  <Route exact path="/FormDriver" component={FormDriver}/>
                  <Route exact path="/Maps" component={WindowMaps}/>
                  <Route exact path="/MainDriver" component={WindowDriver}/>
                  <Route exact path="/MainUser" component={WindowUser}/>    
                  <Route component={ErrorPage}/>
              </Switch>
            </Router>
        </div>      
      );
    }

};
