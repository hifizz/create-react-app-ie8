import "es5-shim";
import "es5-shim/es5-sham";
import "babel-polyfill";
import "console-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
