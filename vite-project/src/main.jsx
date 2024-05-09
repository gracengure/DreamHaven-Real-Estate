import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyPage from './components/PropertyPage.jsx';
import CreateProperty from './components/CreateProperty.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/property/:id" element={<PropertyPage />} /> 
        <Route path="/create_property" element={<CreateProperty />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
