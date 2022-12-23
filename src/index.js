import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import imageData from './components/DataComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <App imageData={imageData()} />
            <AppClass imageData={imageData()} />
            {/* change the above line - for interchaning between App and AppClass */}
        </div>
    </React.StrictMode>
);