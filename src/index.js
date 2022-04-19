import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  reducers  from './store/reducers/index'
import { createStore } from 'redux';
const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);

