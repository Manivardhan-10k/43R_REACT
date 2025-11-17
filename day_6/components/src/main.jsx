import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Color from "./Color.jsx"
import Counter from './counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Color/> */}
    <Counter />
  </StrictMode>,
)
