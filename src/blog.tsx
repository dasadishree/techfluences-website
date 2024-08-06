import React from 'react'
import ReactDOM from 'react-dom/client'
import BlogApp from './BlogApp'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root1') as HTMLElement).render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>,
)
