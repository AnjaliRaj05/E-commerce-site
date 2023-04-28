import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';
 import { Provider } from 'react-redux';
  import store from './redux/store';


// import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider></ChakraProvider>
   <Provider store={store}> 
 
    <App />
    </Provider> 
  
   </BrowserRouter>
);


reportWebVitals();
