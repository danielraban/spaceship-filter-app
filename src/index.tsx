import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceshipFilterApp from './App'; // Ensure App is a TypeScript file (App.tsx)
import reportWebVitals from './reportWebVitals'; // Ensure typings are available for this

// Attempt to get the root element in a safe way
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create a root.
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <SpaceshipFilterApp />
  </React.StrictMode>
);

// Reporting web vitals - strongly typed console.log as a possible handler
reportWebVitals(console.log);
