// this is the main file for starting

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// outer render component that is called only once
ReactDOM.render(
  // calling our app 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// this binds our app to the HTML file using root id
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
