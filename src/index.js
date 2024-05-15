import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for ReactDOM
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component inside React.StrictMode */}
  </React.StrictMode>
);
