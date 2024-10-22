import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextStep from './components/context/ContextStep.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextStep>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ContextStep>

)
