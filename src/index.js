import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from "./context/AuthProvider"
import { ModalProvider } from './context/modal';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';

// use cors to avoid cors policy
// delete on deployment
// const cors = require('cors');
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionSuccessStatus: 200
// }

// App.use(cors(corsOptions));

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
