import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './components/Context'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
