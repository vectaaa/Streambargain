import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux';
// import { store } from './store/store.tsx';
import { AuthProvider } from './context/AuthProvider.jsx';
// import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  {/* <Provider store={store}> */}
  <Routes>
  <Route path="/*" element={<App/>} />
  </Routes>
  {/* </Provider> */}
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);


