import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { WoodDeck } from 'https://cdn.jsdelivr.net/gh/lampd-tgl/wood-deck@main/dist/wood-deck@1.0.16.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <WoodDeck /> */}
  </React.StrictMode>,
)
