import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './reset.css'
import './index.css'
import './main.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
