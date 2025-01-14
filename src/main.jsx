import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/StaticWebsites_React_Art/'>
      <Routes>

        <Route path="/" element={<App />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)