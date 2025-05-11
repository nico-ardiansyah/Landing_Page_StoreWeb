import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import Hero from './component/hero'
import Footer from './component/footer'
import Content from './component/content.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Hero />
    <Content />
    <Footer />
  </>
)
