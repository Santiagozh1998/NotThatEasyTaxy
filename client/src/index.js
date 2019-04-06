//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';

//Componentes
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine/dist/leaflet.routing.icons.png';
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
        <App />, 
    document.getElementById('app'));

serviceWorker.unregister();

