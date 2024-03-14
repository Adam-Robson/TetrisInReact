import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App'
import './reset.css'
import './index.css'

import { store } from './app/store'
import { Provider } from 'react-redux'

// Supports weights 100-900
import '@fontsource-variable/inter';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
