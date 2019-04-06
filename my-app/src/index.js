//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';

//Componentes
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.unregister();
