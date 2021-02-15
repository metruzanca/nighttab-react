import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';
import { EditingProvider } from 'contexts';


ReactDOM.render(
  <React.StrictMode>
    <EditingProvider>
      <App />
    </EditingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
