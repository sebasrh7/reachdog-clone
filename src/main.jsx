import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { ThemeProvider } from './context/theme.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ThemeProvider>
)

