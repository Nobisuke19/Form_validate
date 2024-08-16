import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      toastClassName="transition-all duration-300 ease-in-out"
      bodyClassName="m-0 rounded-3xl bg-white"
      toastStyle={{ backgroundColor: 'transparent', padding:'0px', boxShadow: 'none',transition: 'all 0.3s ease-in-out', display:"flex", flexDirection:"row " }}
      position="top-center"
      autoClose={7000}
      hideProgressBar={true} 
      newestOnTop={false} 
      closeOnClick 
      rtl={false} 
      pauseOnFocusLoss 
      draggable 
      pauseOnHover 
      // theme='dark'
      closeButton={false}
      transition={Slide}/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
