import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Counter} from './App.jsx'
import Something from "./Parent.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Something />
  </StrictMode>,
)
