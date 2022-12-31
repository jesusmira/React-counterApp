import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
// import { App } from './HelloWorldApp';
import { CounterApp } from './CounterApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp  value={20}/>
        {/* < FirstApp title='Hola soy Vegeta' /> */}
    </React.StrictMode>
)