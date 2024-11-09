import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux';
// import { store } from './store/store.tsx';
import { AuthProvider } from './context/AuthProvider.jsx';
// import { ToastContainer, toast } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider>
  {/* <Provider store={store}> */}
  <App />
  {/* </Provider> */}
  </AuthProvider>
  </React.StrictMode>
);


