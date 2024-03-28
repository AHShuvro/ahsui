import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Page/MainPage.jsx';
import HomePage1 from './Page/HomePage1.jsx';
import Accordion from './Components/Accordions/Accordion.jsx';
import ModalPage from './Page/ModalPage.jsx';
import ButtonPage from './Page/ButtonPage.jsx';
import SwapPage from './Page/SwapPage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components" element={<HomePage1 />}>
          <Route path="accordion" element={<Accordion />} />
          <Route path="modal" element={<ModalPage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="swap" element={<SwapPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
