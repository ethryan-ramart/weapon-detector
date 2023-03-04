import React from 'react'
import ReactDOM from 'react-dom/client'
import PublicRoutes from './routes/public-routes'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PublicRoutes />
  </React.StrictMode>,
)
