import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PopupContextProvider from './context/PopupContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PopupContextProvider>
          <App />
        </PopupContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
