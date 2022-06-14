import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Repos from './pages/Repos'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Repos />
  </React.StrictMode>
)
