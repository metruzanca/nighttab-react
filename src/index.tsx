import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from 'store';

import App from 'app';
import { EditingProvider, ConfigProvider } from 'contexts';
import { Compose } from 'lib/utils';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faPen } from '@fortawesome/free-solid-svg-icons'

// TODO figure out how to include all free solids so that you can search for icons to use
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// library.add(fab)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Compose components={[
        ConfigProvider,
        EditingProvider,
      ]}>
        <App />
      </Compose>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
