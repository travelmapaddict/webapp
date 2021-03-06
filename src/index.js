// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './bootstrap/bootstrap.css'

const rootElem = document.getElementById('root')
if (!rootElem) throw new Error('Root element not found')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElem
)
