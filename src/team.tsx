import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TeamApp from './TeamApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TeamApp/>
  </React.StrictMode>,
)
