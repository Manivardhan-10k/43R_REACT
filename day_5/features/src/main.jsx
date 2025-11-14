import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {Feature} from './App.jsx'
import { Classbasedcomp } from './cbc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feature />
    <Classbasedcomp />
  </StrictMode>,
)
