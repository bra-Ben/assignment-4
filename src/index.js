import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// My DOM imports
import { BrowserRouter } from 'react-router-dom';
import { DataStoreProvider } from './pages/store/context';
// My custom styling link
import '../src/mystyle.css';
import '../src/pages/signup/signup.css';

ReactDOM.render(
  
  <React.StrictMode>
    
    <DataStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataStoreProvider>

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
