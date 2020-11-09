import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
