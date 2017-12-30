import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './css/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
