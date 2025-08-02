import 'bootstrap/dist/css/bootstrap.min.css';
// import 'slick-carousel/slick/slick.css'; // 사용할 경우 주석 해제

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('❌ Could not find root element to mount React app.');
}

reportWebVitals();
